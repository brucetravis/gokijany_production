import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { feature } from 'topojson-client';

export default function KenyanMap() {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;

    // Setup scene, camera, renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    currentMount.appendChild(renderer.domElement);

    // Lighting
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 0, 100).normalize();
    scene.add(light);

    // Load Kenya counties TopoJSON and render
    fetch('https://raw.githubusercontent.com/deldersveld/topojson/master/countries/kenya/kenya-counties.json')
      .then(res => res.json())
      .then(topoData => {
        const geojson = feature(topoData, topoData.objects['kenya-counties']);
        geojson.features.forEach(f => {
          f.geometry.coordinates.forEach(polygon => {
            polygon.forEach(ring => {
              const shape = new THREE.Shape();
              ring.forEach(([lng, lat], i) => {
                const x = lng * 50;
                const y = lat * 50;
                if (i === 0) shape.moveTo(x, y);
                else shape.lineTo(x, y);
              });
              const geom = new THREE.ExtrudeGeometry(shape, { depth: 5, bevelEnabled: false });
              const mat = new THREE.MeshLambertMaterial({ color: Math.random() * 0xffffff, opacity: 0.8, transparent: true });
              const mesh = new THREE.Mesh(geom, mat);
              scene.add(mesh);
            });
          });
        });

        camera.position.z = 200;

        // Animate
        const animate = () => {
          scene.rotation.z += 0.001;
          renderer.render(scene, camera);
          requestAnimationFrame(animate);
        };
        animate();
      });

    return () => {
      if (currentMount) currentMount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100vw', height: '100vh' }} />;
}
