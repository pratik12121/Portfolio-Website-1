"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { DOMAIN_CONFIG, Domain } from "@/lib/utils";

interface HeroCanvasProps {
  activeDomain?: Domain | null;
  className?: string;
}

export function HeroCanvas({ activeDomain, className = "" }: HeroCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [webGLAvailable, setWebGLAvailable] = useState<boolean>(true);
  const targetColorRef = useRef<THREE.Color>(new THREE.Color("#00F0FF"));

  useEffect(() => {
    if (activeDomain && DOMAIN_CONFIG[activeDomain]) {
      targetColorRef.current = new THREE.Color(DOMAIN_CONFIG[activeDomain].color);
    } else {
      targetColorRef.current = new THREE.Color("#00F0FF");
    }
  }, [activeDomain]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) {
        setWebGLAvailable(false);
        return;
      }
    } catch {
      setWebGLAvailable(false);
      return;
    }

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.z = 5.8;

    // 2. Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: false, // Intentional crisp retro pixelated aliasing feel!
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(1); // 1x pixel ratio for retro CRT monitor crunch!
    container.appendChild(renderer.domElement);

    // 3. Retro Vector Arcade Mesh (Low-poly faceted geometric core)
    const polyGeo = new THREE.IcosahedronGeometry(1.8, 0); // detail 0 = faceted retro low-poly
    const wireframeGeo = new THREE.WireframeGeometry(polyGeo);
    const wireframeMat = new THREE.LineBasicMaterial({
      color: 0x00f0ff,
      linewidth: 2,
    });
    const wireframeLines = new THREE.LineSegments(wireframeGeo, wireframeMat);
    scene.add(wireframeLines);

    // Glowing vertex points
    const pointsMat = new THREE.PointsMaterial({
      color: 0x39ff14,
      size: 0.12,
      transparent: true,
      opacity: 0.9,
    });
    const vertexPoints = new THREE.Points(polyGeo, pointsMat);
    scene.add(vertexPoints);

    // Inner orbiting geometric satellite
    const satGeo = new THREE.OctahedronGeometry(0.8, 0);
    const satWire = new THREE.WireframeGeometry(satGeo);
    const satMat = new THREE.LineBasicMaterial({
      color: 0xff007f,
    });
    const satMesh = new THREE.LineSegments(satWire, satMat);
    scene.add(satMesh);

    // 4. Parallax Mouse Tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      targetX = (x - 0.5) * 2;
      targetY = (y - 0.5) * 2;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // 5. Resize Observer
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // 6. Stepped 30/60FPS Arcade Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      mouseX += (targetX - mouseX) * 0.08;
      mouseY += (targetY - mouseY) * 0.08;

      wireframeMat.color.lerp(targetColorRef.current, 0.1);
      pointsMat.color.lerp(targetColorRef.current, 0.1);

      // Distinctive vector arcade step rotation
      wireframeLines.rotation.x = elapsed * 0.4 + mouseY * 0.5;
      wireframeLines.rotation.y = elapsed * 0.6 + mouseX * 0.5;
      vertexPoints.rotation.x = wireframeLines.rotation.x;
      vertexPoints.rotation.y = wireframeLines.rotation.y;

      satMesh.rotation.x = -elapsed * 0.8 + mouseY * 0.3;
      satMesh.rotation.y = -elapsed * 0.9 + mouseX * 0.3;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      resizeObserver.disconnect();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      polyGeo.dispose();
      wireframeGeo.dispose();
      wireframeMat.dispose();
      pointsMat.dispose();
      satGeo.dispose();
      satWire.dispose();
      satMat.dispose();
      renderer.dispose();
    };
  }, []);

  if (!webGLAvailable) {
    return (
      <div className={`relative flex items-center justify-center ${className}`}>
        <div className="w-40 h-40 border-2 border-dashed border-[#00F0FF] animate-spin" />
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full min-h-[340px] pointer-events-none select-none ${className}`}
      aria-hidden="true"
    />
  );
}
