"use client";

import React, { useEffect, useRef, useCallback } from "react";
import * as THREE from "three";
import { X, RotateCcw } from "lucide-react";

// Domain accent colors (same as DOMAIN_CONFIG)
const ACCENT_COLORS = [
  "#00F0FF", // software  - cyan
  "#FF007F", // design    - magenta
  "#FF8C00", // threed    - orange
  "#FF2A55", // video     - red-pink
  "#39FF14", // photo     - neon green
  "#FFE600", // blog      - yellow
] as const;

// Game constants
const GRID = 15;
const CELL = 1;
const HALF = GRID / 2;
const BASE_TICK = 150;
const SPEED_STEP = 5;
const SPEED_DELTA = 10;

type Vec2 = { x: number; y: number };
type Dir = "U" | "D" | "L" | "R";

const OPPOSITE: Record<Dir, Dir> = { U: "D", D: "U", L: "R", R: "L" };

function randomCell(occupied: Vec2[]): Vec2 {
  const all: Vec2[] = [];
  for (let x = 0; x < GRID; x++)
    for (let y = 0; y < GRID; y++) {
      if (!occupied.some((c) => c.x === x && c.y === y)) all.push({ x, y });
    }
  return all[Math.floor(Math.random() * all.length)] ?? { x: 7, y: 7 };
}

interface SnakeGameProps {
  onClose: () => void;
}

export default function SnakeGame({ onClose }: SnakeGameProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scoreRef = useRef<HTMLSpanElement>(null);
  const hiRef = useRef<HTMLSpanElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const overlayScoreRef = useRef<HTMLSpanElement>(null);
  const restartRef = useRef<() => void>(() => {});
  const triggerDirRef = useRef<(d: Dir) => void>(() => {});

  // Close on Esc
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const handleRestart = useCallback(() => {
    restartRef.current();
  }, []);

  const handleDirInput = useCallback((dir: Dir) => {
    triggerDirRef.current(dir);
  }, []);

  // Three.js scene
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // WebGL check
    try {
      const probe = document.createElement("canvas");
      const gl = probe.getContext("webgl") || probe.getContext("experimental-webgl");
      if (!gl) return;
    } catch {
      return;
    }

    // Scene / Camera / Renderer
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x05050a);

    const camera = new THREE.OrthographicCamera(-HALF, HALF, HALF, -HALF, 0.1, 100);
    camera.position.z = 10;

    const renderer = new THREE.WebGLRenderer({ antialias: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    const initialSize = container.clientWidth || container.offsetWidth || 300;
    renderer.setSize(initialSize, initialSize, false);
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.display = "block";
    container.appendChild(renderer.domElement);

    // Grid overlay
    const gridMat = new THREE.LineBasicMaterial({ color: 0x0a1a1a });
    const gridGeos: THREE.BufferGeometry[] = [];
    for (let i = 0; i <= GRID; i++) {
      const hGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(-HALF + i * CELL, -HALF, 0),
        new THREE.Vector3(-HALF + i * CELL, HALF, 0),
      ]);
      const vGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(-HALF, -HALF + i * CELL, 0),
        new THREE.Vector3(HALF, -HALF + i * CELL, 0),
      ]);
      gridGeos.push(hGeo, vGeo);
      scene.add(new THREE.Line(hGeo, gridMat));
      scene.add(new THREE.Line(vGeo, gridMat));
    }

    // Shared cell geometry
    const cellGeo = new THREE.PlaneGeometry(CELL * 0.88, CELL * 0.88);

    function toWorld(g: Vec2): THREE.Vector3 {
      return new THREE.Vector3(
        -HALF + g.x * CELL + CELL / 2,
        -HALF + g.y * CELL + CELL / 2,
        0
      );
    }

    // Segment mesh pool
    const segmentMeshes: THREE.Mesh[] = [];
    const segmentMats: THREE.MeshBasicMaterial[] = [];

    function getOrCreateMesh(index: number): THREE.Mesh {
      if (segmentMeshes[index]) return segmentMeshes[index];
      const mat = new THREE.MeshBasicMaterial({ color: 0x00f0ff });
      const mesh = new THREE.Mesh(cellGeo, mat);
      scene.add(mesh);
      segmentMeshes[index] = mesh;
      segmentMats[index] = mat;
      return mesh;
    }

    // Food mesh
    const foodMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true });
    const foodMesh = new THREE.Mesh(cellGeo, foodMat);
    scene.add(foodMesh);

    // Game state
    let snake: Vec2[] = [];
    let food: Vec2 = { x: 0, y: 0 };
    let dir: Dir = "R";
    let dirQueue: Dir[] = [];
    let score = 0;
    let gameOver = false;
    let colorIndex = 0;
    let tickInterval: ReturnType<typeof setInterval>;

    function getTickMs() {
      const speedSteps = Math.floor(score / SPEED_STEP);
      return Math.max(60, BASE_TICK - speedSteps * SPEED_DELTA);
    }

    function initGame() {
      snake = [{ x: 9, y: 7 }, { x: 8, y: 7 }, { x: 7, y: 7 }];
      dir = "R";
      dirQueue = [];
      score = 0;
      gameOver = false;
      colorIndex = 0;
      food = randomCell(snake);
      if (overlayRef.current) overlayRef.current.style.display = "none";
      if (scoreRef.current) scoreRef.current.textContent = "0";
      segmentMeshes.forEach((m) => (m.visible = false));
    }

    function endGame() {
      gameOver = true;
      clearInterval(tickInterval);
      let hi = parseInt(localStorage.getItem("snakeHi") ?? "0", 10);
      if (score > hi) {
        hi = score;
        localStorage.setItem("snakeHi", String(hi));
      }
      if (hiRef.current) hiRef.current.textContent = String(hi);
      if (overlayScoreRef.current) overlayScoreRef.current.textContent = String(score);
      if (overlayRef.current) overlayRef.current.style.display = "flex";
    }

    function tick() {
      if (gameOver) return;
      if (dirQueue.length > 0) {
        const next = dirQueue.shift()!;
        if (OPPOSITE[next] !== dir) dir = next;
      }
      const head = snake[0];
      let nx = head.x;
      let ny = head.y;
      if (dir === "R") nx++;
      else if (dir === "L") nx--;
      else if (dir === "U") ny++;
      else if (dir === "D") ny--;

      if (nx < 0 || nx >= GRID || ny < 0 || ny >= GRID) { endGame(); return; }
      if (snake.slice(0, -1).some((s) => s.x === nx && s.y === ny)) { endGame(); return; }

      const newHead: Vec2 = { x: nx, y: ny };
      const ate = newHead.x === food.x && newHead.y === food.y;

      if (ate) {
        snake = [newHead, ...snake];
        score++;
        colorIndex = (colorIndex + 1) % ACCENT_COLORS.length;
        food = randomCell(snake);
        if (scoreRef.current) scoreRef.current.textContent = String(score);
        clearInterval(tickInterval);
        tickInterval = setInterval(tick, getTickMs());
      } else {
        snake = [newHead, ...snake.slice(0, -1)];
      }
    }

    function queueDir(nextDir: Dir) {
      if (dirQueue.length < 2) {
        dirQueue.push(nextDir);
      }
    }

    triggerDirRef.current = queueDir;

    restartRef.current = () => {
      clearInterval(tickInterval);
      initGame();
      tickInterval = setInterval(tick, getTickMs());
    };

    initGame();
    tickInterval = setInterval(tick, getTickMs());

    // RAF render loop
    let rafId: number;
    const render = () => {
      rafId = requestAnimationFrame(render);
      snake.forEach((seg, i) => {
        const mesh = getOrCreateMesh(i);
        mesh.visible = true;
        mesh.position.copy(toWorld(seg));
        const colorIdx = ((colorIndex - i) % ACCENT_COLORS.length + ACCENT_COLORS.length) % ACCENT_COLORS.length;
        segmentMats[i].color.set(ACCENT_COLORS[colorIdx]);
      });
      for (let i = snake.length; i < segmentMeshes.length; i++) {
        segmentMeshes[i].visible = false;
      }
      foodMat.opacity = 0.75 + Math.sin(Date.now() * 0.005) * 0.25;
      foodMesh.position.copy(toWorld(food));
      foodMesh.visible = true;
      renderer.render(scene, camera);
    };
    render();

    // Keyboard
    const DIR_MAP: Record<string, Dir> = {
      ArrowUp: "U", w: "U", W: "U",
      ArrowDown: "D", s: "D", S: "D",
      ArrowLeft: "L", a: "L", A: "L",
      ArrowRight: "R", d: "R", D: "R",
    };
    const onKeyDown = (e: KeyboardEvent) => {
      const mapped = DIR_MAP[e.key];
      if (mapped) {
        e.preventDefault();
        queueDir(mapped);
      }
      if (e.key === " " && gameOver) restartRef.current();
    };
    window.addEventListener("keydown", onKeyDown);

    // Touch swipe
    let touchStartX = 0;
    let touchStartY = 0;
    const onTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    };
    const onTouchMove = (e: TouchEvent) => {
      // Prevent browser bounce / pull to refresh while playing on canvas
      if (e.cancelable) e.preventDefault();
    };
    const onTouchEnd = (e: TouchEvent) => {
      const dx = e.changedTouches[0].clientX - touchStartX;
      const dy = e.changedTouches[0].clientY - touchStartY;
      if (Math.abs(dx) < 16 && Math.abs(dy) < 16) return;
      const swipeDir: Dir = Math.abs(dx) > Math.abs(dy)
        ? (dx > 0 ? "R" : "L")
        : (dy > 0 ? "D" : "U");
      queueDir(swipeDir);
    };
    container.addEventListener("touchstart", onTouchStart, { passive: true });
    container.addEventListener("touchmove", onTouchMove, { passive: false });
    container.addEventListener("touchend", onTouchEnd, { passive: true });

    // Resize
    const onResize = () => {
      if (!container) return;
      const s = container.clientWidth || container.offsetWidth || 300;
      renderer.setSize(s, s, false);
    };
    const resizeObserver = new ResizeObserver(onResize);
    resizeObserver.observe(container);

    // Init hi score
    if (hiRef.current) hiRef.current.textContent = localStorage.getItem("snakeHi") ?? "0";

    // Cleanup
    return () => {
      cancelAnimationFrame(rafId);
      clearInterval(tickInterval);
      window.removeEventListener("keydown", onKeyDown);
      container.removeEventListener("touchstart", onTouchStart);
      container.removeEventListener("touchmove", onTouchMove);
      container.removeEventListener("touchend", onTouchEnd);
      resizeObserver.disconnect();
      cellGeo.dispose();
      gridGeos.forEach((g) => g.dispose());
      gridMat.dispose();
      segmentMats.forEach((m) => m.dispose());
      foodMat.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="flex flex-col gap-2.5 w-full items-center select-none">
      {/* HUD */}
      <div className="w-full flex items-center justify-between px-1">
        <div className="flex gap-4 font-pixel text-[11px]">
          <span className="text-[#00F0FF]">
            SCR: <span ref={scoreRef} className="text-white">0</span>
          </span>
          <span className="text-[#FFE600]">
            HI: <span ref={hiRef} className="text-white">0</span>
          </span>
        </div>
        <button
          onClick={onClose}
          aria-label="Close snake game"
          className="w-6 h-6 flex items-center justify-center text-muted-foreground hover:text-[#FF007F] border border-white/20 hover:border-[#FF007F] transition-colors"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Canvas wrapper */}
      <div className="relative w-full max-w-[320px] sm:max-w-[360px] mx-auto">
        {/* Square spacer: padding-bottom = 100% */}
        <div style={{ paddingBottom: "100%", position: "relative" }}>
          <div
            ref={containerRef}
            className="border border-[#00F0FF]/40 shadow-[0_0_15px_rgba(0,240,255,0.15)]"
            style={{
              position: "absolute",
              inset: 0,
              touchAction: "none",
              overflow: "hidden",
            }}
          />

          {/* Game Over overlay */}
          <div
            ref={overlayRef}
            style={{ display: "none", position: "absolute", inset: 0 }}
            className="flex flex-col items-center justify-center gap-2.5 bg-[#05050A]/92 border border-[#FF007F]/60 backdrop-blur-sm z-10"
          >
            <p className="font-pixel text-[#FF007F] text-base tracking-widest animate-pulse">
              GAME OVER
            </p>
            <p className="font-pixel text-white text-xs">
              SCORE: <span ref={overlayScoreRef} className="text-[#FFE600]">0</span>
            </p>
            <button
              onClick={handleRestart}
              className="flex items-center gap-1.5 px-4 py-2 font-pixel text-[10px] text-black bg-[#39FF14] hover:bg-[#39FF14]/90 active:scale-95 border border-[#39FF14] shadow-[0_0_12px_rgba(57,255,20,0.5)] transition-all"
            >
              <RotateCcw className="w-3 h-3" />
              RETRY
            </button>
            <p className="font-pixel text-[9px] text-muted-foreground">
              or press [SPACE]
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Touch D-Pad */}
      <div className="flex flex-col items-center gap-1 mt-1 sm:hidden">
        <button
          type="button"
          onClick={() => handleDirInput("U")}
          aria-label="Move Up"
          className="w-12 h-10 flex items-center justify-center bg-white/[0.06] active:bg-[#00F0FF]/30 border border-white/20 active:border-[#00F0FF] text-white font-pixel text-xs rounded transition-all active:scale-95 shadow-sm"
        >
          ▲
        </button>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => handleDirInput("L")}
            aria-label="Move Left"
            className="w-12 h-10 flex items-center justify-center bg-white/[0.06] active:bg-[#00F0FF]/30 border border-white/20 active:border-[#00F0FF] text-white font-pixel text-xs rounded transition-all active:scale-95 shadow-sm"
          >
            ◀
          </button>
          <button
            type="button"
            onClick={() => handleDirInput("D")}
            aria-label="Move Down"
            className="w-12 h-10 flex items-center justify-center bg-white/[0.06] active:bg-[#00F0FF]/30 border border-white/20 active:border-[#00F0FF] text-white font-pixel text-xs rounded transition-all active:scale-95 shadow-sm"
          >
            ▼
          </button>
          <button
            type="button"
            onClick={() => handleDirInput("R")}
            aria-label="Move Right"
            className="w-12 h-10 flex items-center justify-center bg-white/[0.06] active:bg-[#00F0FF]/30 border border-white/20 active:border-[#00F0FF] text-white font-pixel text-xs rounded transition-all active:scale-95 shadow-sm"
          >
            ▶
          </button>
        </div>
      </div>

      {/* Controls hint */}
      <p className="font-pixel text-[8px] sm:text-[9px] text-muted-foreground tracking-wider text-center hidden sm:block">
        WASD / ↑↓←→ TO MOVE · ESC TO EXIT
      </p>
    </div>
  );
}

