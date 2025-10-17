// ThreeDView.jsx
import React, { useRef, useEffect, useState } from 'react';
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export const ThreeDView = ({ location }) => {
  const mountRef = useRef(null);
  const [solarData, setSolarData] = useState(null);
  const [timeOfDay, setTimeOfDay] = useState(12);
  const [panelAngle, setPanelAngle] = useState(30);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setClearColor(0x000000, 0);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    
    mountRef.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(50, 50, 50);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    scene.add(directionalLight);

    const sunLight = new THREE.DirectionalLight(0xffeb3b, 2);
    sunLight.position.set(100, 100, 50);
    sunLight.castShadow = true;
    scene.add(sunLight);

    const gridHelper = new THREE.GridHelper(100, 100, 0x444444, 0x222222);
    scene.add(gridHelper);

    const houseGeometry = new THREE.BoxGeometry(20, 10, 15);
    const houseMaterial = new THREE.MeshLambertMaterial({ color: 0x8B4513 });
    const house = new THREE.Mesh(houseGeometry, houseMaterial);
    house.position.set(0, 5, 0);
    house.castShadow = true;
    house.receiveShadow = true;
    scene.add(house);

    const roofGeometry = new THREE.ConeGeometry(12, 8, 4);
    const roofMaterial = new THREE.MeshLambertMaterial({ color: 0x8B0000 });
    const roof = new THREE.Mesh(roofGeometry, roofMaterial);
    roof.position.set(0, 15, 0);
    roof.rotation.y = Math.PI / 4;
    roof.castShadow = true;
    scene.add(roof);

    const solarPanelGroup = new THREE.Group();
    
    const panelGeometry = new THREE.BoxGeometry(8, 0.2, 4);
    const panelMaterial = new THREE.MeshLambertMaterial({ 
      color: 0x2F4F4F,
      emissive: 0x1a1a1a,
      emissiveIntensity: 0.2
    });

    for (let i = 0; i < 6; i++) {
      const panel = new THREE.Mesh(panelGeometry, panelMaterial);
      panel.position.set((i % 3 - 1) * 10, 11, Math.floor(i / 3) * 6 - 3);
      panel.rotation.x = -panelAngle * Math.PI / 180;
      panel.castShadow = true;
      panel.receiveShadow = true;
      solarPanelGroup.add(panel);
    }

    scene.add(solarPanelGroup);

    const sunGeometry = new THREE.SphereGeometry(3, 32, 32);
    const sunMaterial = new THREE.MeshBasicMaterial({ 
      color: 0xffeb3b,
      emissive: 0xff9800,
      emissiveIntensity: 0.5
    });
    const sun = new THREE.Mesh(sunGeometry, sunMaterial);
    scene.add(sun);

    camera.position.set(40, 30, 40);
    controls.update();

    const updateSunPosition = (hour) => {
      const radians = (hour - 6) * Math.PI / 12;
      const distance = 80;
      const x = Math.cos(radians) * distance;
      const y = Math.sin(radians) * distance * 0.5 + 30;
      const z = Math.sin(radians) * distance;
      
      sun.position.set(x, Math.max(y, 10), z);
      sunLight.position.copy(sun.position);
      
      const intensity = Math.max(0, Math.sin(radians));
      sunLight.intensity = intensity * 2;
      directionalLight.intensity = intensity * 0.5 + 0.3;
    };

    updateSunPosition(timeOfDay);

    const animate = () => {
      requestAnimationFrame(animate);
      
      solarPanelGroup.rotation.y += 0.002;
      sun.rotation.y += 0.01;
      
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, [timeOfDay, panelAngle]);

  const calculateEfficiency = (angle, time) => {
    const optimalAngle = Math.abs(angle - (location?.lat || 20));
    const timeEfficiency = 1 - Math.abs(time - 12) / 6;
    return Math.max(0, (1 - optimalAngle / 90) * timeEfficiency * 100).toFixed(1);
  };

  return (
    <div className="three-d-container">
      <div className="controls-panel">
        <h3>3D Solar Simulation</h3>
        
        <div className="control-group">
          <label>Time of Day: {timeOfDay}:00</label>
          <input 
            type="range" 
            min="6" 
            max="18" 
            value={timeOfDay}
            onChange={(e) => setTimeOfDay(e.target.value)}
            className="slider"
          />
        </div>

        <div className="control-group">
          <label>Panel Angle: {panelAngle}°</label>
          <input 
            type="range" 
            min="0" 
            max="90" 
            value={panelAngle}
            onChange={(e) => setPanelAngle(e.target.value)}
            className="slider"
          />
        </div>

        <div className="efficiency-display">
          <div className="efficiency-meter">
            <div className="efficiency-label">Current Efficiency</div>
            <div className="efficiency-value">
              {calculateEfficiency(panelAngle, timeOfDay)}%
            </div>
            <div className="efficiency-bar">
              <div 
                className="efficiency-fill"
                style={{ width: `${calculateEfficiency(panelAngle, timeOfDay)}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="simulation-info">
          <h4>Simulation Data</h4>
          <div className="info-grid">
            <div className="info-item">
              <span>Optimal Angle:</span>
              <span>{location?.lat ? Math.round(location.lat) : 20}°</span>
            </div>
            <div className="info-item">
              <span>Sun Intensity:</span>
              <span>{Math.max(0, (1 - Math.abs(timeOfDay - 12) / 6) * 100).toFixed(0)}%</span>
            </div>
            <div className="info-item">
              <span>Panel Coverage:</span>
              <span>48 sqm</span>
            </div>
            <div className="info-item">
              <span>Estimated Output:</span>
              <span>{(calculateEfficiency(panelAngle, timeOfDay) * 0.05).toFixed(2)} kW</span>
            </div>
          </div>
        </div>
      </div>

      <div className="visualization-area">
        <div ref={mountRef} className="three-d-canvas" />
        
        <div className="hud-overlay">
          <div className="hud-item">
            <div className="hud-label">☀️ Sun Position</div>
            <div className="hud-value">{timeOfDay}:00</div>
          </div>
          <div className="hud-item">
            <div className="hud-label">📐 Panel Angle</div>
            <div className="hud-value">{panelAngle}°</div>
          </div>
          <div className="hud-item">
            <div className="hud-label">⚡ Efficiency</div>
            <div className="hud-value">{calculateEfficiency(panelAngle, timeOfDay)}%</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .three-d-container {
          display: grid;
          grid-template-columns: 300px 1fr;
          height: 100vh;
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
        }

        .controls-panel {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border-right: 1px solid rgba(255, 255, 255, 0.2);
          padding: 20px;
          color: white;
          overflow-y: auto;
        }

        .controls-panel h3 {
          margin-bottom: 20px;
          font-size: 1.5rem;
          background: linear-gradient(45deg, #ff6b00, #ffa500);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .control-group {
          margin-bottom: 25px;
        }

        .control-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: 500;
          color: #e0e0e0;
        }

        .slider {
          width: 100%;
          height: 6px;
          border-radius: 3px;
          background: rgba(255, 255, 255, 0.2);
          outline: none;
          -webkit-appearance: none;
        }

        .slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: linear-gradient(45deg, #ff6b00, #ffa500);
          cursor: pointer;
          box-shadow: 0 0 10px rgba(255, 107, 0, 0.5);
        }

        .efficiency-display {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
          padding: 15px;
          margin: 20px 0;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .efficiency-meter {
          text-align: center;
        }

        .efficiency-label {
          font-size: 0.9rem;
          color: #b0b0b0;
          margin-bottom: 5px;
        }

        .efficiency-value {
          font-size: 2rem;
          font-weight: bold;
          background: linear-gradient(45deg, #ff6b00, #ffa500);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 10px;
        }

        .efficiency-bar {
          width: 100%;
          height: 8px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
          overflow: hidden;
        }

        .efficiency-fill {
          height: 100%;
          background: linear-gradient(90deg, #ff6b00, #ffa500);
          transition: width 0.3s ease;
        }

        .simulation-info {
          margin-top: 30px;
        }

        .simulation-info h4 {
          margin-bottom: 15px;
          color: #e0e0e0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          padding-bottom: 5px;
        }

        .info-grid {
          display: grid;
          gap: 10px;
        }

        .info-item {
          display: flex;
          justify-content: space-between;
          padding: 8px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .info-item span:first-child {
          color: #b0b0b0;
        }

        .info-item span:last-child {
          color: #ffa500;
          font-weight: 500;
        }

        .visualization-area {
          position: relative;
          background: #000;
        }

        .three-d-canvas {
          width: 100%;
          height: 100%;
        }

        .hud-overlay {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(10px);
          border-radius: 10px;
          padding: 15px;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .hud-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
          min-width: 150px;
        }

        .hud-item:last-child {
          margin-bottom: 0;
        }

        .hud-label {
          color: #e0e0e0;
          font-size: 0.9rem;
        }

        .hud-value {
          color: #ffa500;
          font-weight: bold;
          font-size: 1.1rem;
        }

        @media (max-width: 768px) {
          .three-d-container {
            grid-template-columns: 1fr;
            grid-template-rows: auto 1fr;
          }
          
          .controls-panel {
            border-right: none;
            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          }
        }
      `}</style>
    </div>
  );
};