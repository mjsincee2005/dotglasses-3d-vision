
import { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    THREE: any;
  }
}

export const useThreeJS = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<any>(null);
  const rendererRef = useRef<any>(null);
  const glassesRef = useRef<any[]>([]);
  const particlesRef = useRef<any>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.THREE) {
      initThreeJS();
      setIsLoaded(true);
    }

    return () => {
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, []);

  const initThreeJS = () => {
    const THREE = window.THREE;
    
    // Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x0a0f1c, 50, 200);
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 30);

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current!,
      antialias: true,
      alpha: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x4a5568, 0.3);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0x60a5fa, 1);
    directionalLight.position.set(10, 10, 5);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    scene.add(directionalLight);

    const pointLight1 = new THREE.PointLight(0xa855f7, 0.8, 50);
    pointLight1.position.set(-15, 10, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xec4899, 0.6, 40);
    pointLight2.position.set(15, -10, 5);
    scene.add(pointLight2);

    // Create floating glasses
    createFloatingGlasses(scene, THREE);

    // Create particle system
    createParticleSystem(scene, THREE);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Animate glasses
      glassesRef.current.forEach((glasses, index) => {
        glasses.rotation.y += 0.005 + index * 0.001;
        glasses.rotation.x = Math.sin(Date.now() * 0.001 + index) * 0.1;
        glasses.position.y += Math.sin(Date.now() * 0.002 + index) * 0.02;
      });

      // Animate particles
      if (particlesRef.current) {
        particlesRef.current.rotation.y += 0.001;
        const positions = particlesRef.current.geometry.attributes.position.array;
        for (let i = 0; i < positions.length; i += 3) {
          positions[i + 1] += Math.sin(Date.now() * 0.001 + i) * 0.01;
        }
        particlesRef.current.geometry.attributes.position.needsUpdate = true;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Mouse interaction
    const handleMouseMove = (event: MouseEvent) => {
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
      
      camera.position.x += (mouseX * 2 - camera.position.x) * 0.02;
      camera.position.y += (mouseY * 2 - camera.position.y) * 0.02;
      camera.lookAt(scene.position);
    };

    window.addEventListener('mousemove', handleMouseMove);
  };

  const createFloatingGlasses = (scene: any, THREE: any) => {
    const glassesGeometry = new THREE.Group();
    
    // Frame
    const frameGeometry = new THREE.TorusGeometry(1.2, 0.15, 8, 20);
    const frameMaterial = new THREE.MeshPhongMaterial({
      color: 0x2563eb,
      shininess: 100,
      transparent: true,
      opacity: 0.9
    });
    
    const leftLens = new THREE.Mesh(frameGeometry, frameMaterial);
    leftLens.position.x = -1.5;
    glassesGeometry.add(leftLens);
    
    const rightLens = new THREE.Mesh(frameGeometry, frameMaterial);
    rightLens.position.x = 1.5;
    glassesGeometry.add(rightLens);
    
    // Bridge
    const bridgeGeometry = new THREE.CylinderGeometry(0.08, 0.08, 1, 8);
    const bridgeMaterial = new THREE.MeshPhongMaterial({ color: 0x1e40af });
    const bridge = new THREE.Mesh(bridgeGeometry, bridgeMaterial);
    bridge.rotation.z = Math.PI / 2;
    bridge.position.y = 0.2;
    glassesGeometry.add(bridge);
    
    // Temples
    const templeGeometry = new THREE.CylinderGeometry(0.06, 0.06, 3, 8);
    const templeMaterial = new THREE.MeshPhongMaterial({ color: 0x1e40af });
    
    const leftTemple = new THREE.Mesh(templeGeometry, templeMaterial);
    leftTemple.rotation.z = Math.PI / 2;
    leftTemple.position.set(-2.2, 0, -1.5);
    glassesGeometry.add(leftTemple);
    
    const rightTemple = new THREE.Mesh(templeGeometry, templeMaterial);
    rightTemple.rotation.z = Math.PI / 2;
    rightTemple.position.set(2.2, 0, -1.5);
    glassesGeometry.add(rightTemple);

    // Create multiple glasses at different positions
    const positions = [
      { x: -20, y: 10, z: -10 },
      { x: 25, y: -8, z: -15 },
      { x: -15, y: -12, z: -20 },
      { x: 30, y: 15, z: -5 },
      { x: -25, y: 5, z: -25 }
    ];

    positions.forEach((pos, index) => {
      const glasses = glassesGeometry.clone();
      glasses.position.set(pos.x, pos.y, pos.z);
      glasses.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      glasses.scale.setScalar(0.8 + Math.random() * 0.4);
      scene.add(glasses);
      glassesRef.current.push(glasses);
    });
  };

  const createParticleSystem = (scene: any, THREE: any) => {
    const particleCount = 1000;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100;

      const color = new THREE.Color();
      color.setHSL(0.6 + Math.random() * 0.2, 0.8, 0.6);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.5,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);
    particlesRef.current = particles;
  };

  return { canvasRef, isLoaded };
};
