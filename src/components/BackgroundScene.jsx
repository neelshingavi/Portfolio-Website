import { useEffect, useRef } from 'react';
import { Scene, PerspectiveCamera, WebGLRenderer, PlaneGeometry, MeshBasicMaterial, Mesh, BufferGeometry, BufferAttribute, PointsMaterial, Points } from 'three';

export function BackgroundScene() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const scene = new Scene();
    const camera = new PerspectiveCamera(58, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 20, 92);

    const renderer = new WebGLRenderer({ canvas, alpha: true, antialias: true, preserveDrawingBuffer: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
    renderer.setSize(window.innerWidth, window.innerHeight);

    const terrain = new PlaneGeometry(150, 92, 74, 46);
    terrain.rotateX(-Math.PI / 3.1);
    const terrainMaterial = new MeshBasicMaterial({
      color: 0xbff205,
      wireframe: true,
      transparent: true,
      opacity: 0.16,
    });
    const terrainMesh = new Mesh(terrain, terrainMaterial);
    terrainMesh.position.set(0, -16, -12);
    scene.add(terrainMesh);

    const count = 190;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      positions[i * 3] = (Math.random() - 0.5) * 150;
      positions[i * 3 + 1] = (Math.random() - 0.45) * 72;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 72;
    }

    const particleGeometry = new BufferGeometry();
    particleGeometry.setAttribute('position', new BufferAttribute(positions, 3));
    const particleMaterial = new PointsMaterial({
      color: 0xff5e3a,
      size: 0.62,
      transparent: true,
      opacity: 0.72,
    });
    const particles = new Points(particleGeometry, particleMaterial);
    scene.add(particles);

    const original = terrain.attributes.position.array.slice();
    let animationId = 0;

    const animate = (time = 0) => {
      const seconds = time * 0.001;
      const verts = terrain.attributes.position.array;
      for (let i = 0; i < verts.length; i += 3) {
        const x = original[i];
        const y = original[i + 1];
        verts[i + 2] = original[i + 2] + Math.sin(x * 0.08 + seconds) * 1.7 + Math.cos(y * 0.12 + seconds * 1.25) * 1.2;
      }
      terrain.attributes.position.needsUpdate = true;

      terrainMesh.rotation.z = Math.sin(seconds * 0.25) * 0.035;
      particles.rotation.y = seconds * 0.035;
      particles.rotation.x = Math.sin(seconds * 0.22) * 0.04;

      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };

    const resize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', resize);
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
      terrain.dispose();
      terrainMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="background-scene" aria-hidden="true" />;
}
