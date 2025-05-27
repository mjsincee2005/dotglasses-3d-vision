
import React, { useEffect, useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

declare global {
  interface Window {
    THREE: any;
  }
}

const Index = () => {
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

  return (
    <div className="min-h-screen relative overflow-hidden">
      <canvas
        ref={canvasRef}
        id="three-canvas"
        className="fixed top-0 left-0 w-full h-full -z-10"
      />
      
      <div className="content-overlay relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 glass-effect">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold text-gradient">
                DotGlasses
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Collections</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Virtual Try-On</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">About</a>
                <Button className="pulse-glow">Shop Now</Button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center pt-20">
          <div className="container mx-auto px-6 text-center">
            <div className={`space-y-8 ${isLoaded ? 'slide-up' : 'opacity-0'}`}>
              <Badge className="glass-effect text-primary border-primary/30 mb-4">
                🚀 Experience 3D Vision Technology
              </Badge>
              
              <h1 className="text-6xl md:text-8xl font-black leading-tight">
                <span className="text-gradient">Revolutionary</span>
                <br />
                <span className="text-white">Eyewear</span>
                <br />
                <span className="text-gradient">Experience</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Immerse yourself in the future of eyewear shopping with our stunning 3D technology. 
                See, feel, and experience glasses like never before.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
                <Button size="lg" className="text-lg px-8 py-4 pulse-glow">
                  🥽 Try Virtual Fitting
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-4 glass-effect border-primary/30 text-primary hover:bg-primary/10">
                  👁️ Explore Collection
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 fade-in">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-gradient">Why Choose</span> DotGlasses?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Experience the perfect blend of cutting-edge technology and timeless style
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="glass-effect p-8 text-center hover:scale-105 transition-all duration-500 scale-in">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold mb-4 text-gradient">Precision Fit</h3>
                <p className="text-gray-300">
                  Advanced 3D scanning technology ensures every pair fits perfectly to your unique facial structure.
                </p>
              </Card>

              <Card className="glass-effect p-8 text-center hover:scale-105 transition-all duration-500 scale-in" style={{animationDelay: '0.2s'}}>
                <div className="text-4xl mb-4">✨</div>
                <h3 className="text-2xl font-bold mb-4 text-gradient">Premium Materials</h3>
                <p className="text-gray-300">
                  Crafted from the finest materials with attention to every detail for lasting comfort and style.
                </p>
              </Card>

              <Card className="glass-effect p-8 text-center hover:scale-105 transition-all duration-500 scale-in" style={{animationDelay: '0.4s'}}>
                <div className="text-4xl mb-4">🌟</div>
                <h3 className="text-2xl font-bold mb-4 text-gradient">Virtual Reality</h3>
                <p className="text-gray-300">
                  Try on thousands of frames virtually with our revolutionary AR technology before you buy.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="container mx-auto px-6 text-center">
            <Card className="glass-effect p-12 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to See the <span className="text-gradient">Future</span>?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of satisfied customers who've revolutionized their vision with DotGlasses
              </p>
              <Separator className="my-8 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8 py-4 pulse-glow">
                  🚀 Start Your Journey
                </Button>
                <Button size="lg" variant="ghost" className="text-lg px-8 py-4 text-primary hover:bg-primary/10">
                  📞 Contact Us
                </Button>
              </div>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer className="glass-effect py-12 mt-24">
          <div className="container mx-auto px-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient mb-4">DotGlasses</div>
              <p className="text-gray-400 mb-6">Revolutionizing vision, one pair at a time.</p>
              <div className="flex justify-center space-x-6 text-gray-400">
                <a href="#" className="hover:text-primary transition-colors">Privacy</a>
                <a href="#" className="hover:text-primary transition-colors">Terms</a>
                <a href="#" className="hover:text-primary transition-colors">Support</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
