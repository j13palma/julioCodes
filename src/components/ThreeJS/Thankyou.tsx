"use client";

import { useRef, useEffect } from "react";
import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";

export default function Thankyou() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const scene = new THREE.Scene();
      const renderer = new THREE.WebGLRenderer();
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        100,
      );
      camera.position.z = 2;

      /**
       * Textures
       */
      const textureLoader = new THREE.TextureLoader();
      const textMatcapTexture = textureLoader.load("/textures/matcaps/2.png");
      const donutMatcapTexture = textureLoader.load("/textures/matcaps/1.png");

      /**
       * Text Shape
       */
      const fontLoader = new FontLoader();

      fontLoader.load("/fonts/helvetiker_regular.typeface.json", (font) => {
        // Material
        const material = new THREE.MeshMatcapMaterial({
          matcap: textMatcapTexture,
        });
        const textGeometry = {
          font: font,
          size: 0.2,
          height: 0.2,
          curveSegments: 12,
          bevelEnabled: true,
          bevelThickness: 0.01,
          bevelSize: 0.02,
          bevelOffset: 0,
          bevelSegments: 1,
        };

        // textThanks
        const thanksGeometry = new TextGeometry("Thanks", textGeometry);
        thanksGeometry.center();

        const textThanks = new THREE.Mesh(thanksGeometry, material);
        textThanks.position.y = 0.5;
        scene.add(textThanks);

        // textFor
        const forGeometry = new TextGeometry("for", textGeometry);
        forGeometry.center();

        const textFor = new THREE.Mesh(forGeometry, material);
        scene.add(textFor);

        // textComing
        const comingGeometry = new TextGeometry("coming!", textGeometry);
        comingGeometry.center();

        const textComing = new THREE.Mesh(comingGeometry, material);
        textComing.position.y = -0.5;
        scene.add(textComing);
      });

      /**
       * Donuts
       */

      const donutMaterial = new THREE.MeshMatcapMaterial({
        matcap: donutMatcapTexture,
      });
      const donutGeometry = new THREE.TorusGeometry(0.4, 0.2, 32, 48);
      const donuts: THREE.Mesh[] = [];
      for (let i = 0; i < 100; i++) {
        const donut = new THREE.Mesh(donutGeometry, donutMaterial);
        donut.position.x = (Math.random() - 0.5) * 10;
        donut.position.y = (Math.random() - 0.5) * 10;
        donut.position.z = (Math.random() - 0.5) * 10;
        donut.rotation.x = Math.random() * Math.PI;
        donut.rotation.y = Math.random() * Math.PI;
        const scale = Math.random();
        donut.scale.set(scale, scale, scale);

        scene.add(donut);

        donuts.push(donut);
      }

      const renderScene = () => {
        if (donuts) {
          donuts.forEach((donut) => {
            donut.rotation.x += 0.01; // Rotate around the X axis
            donut.rotation.y += 0.01; // Rotate around the Y axis
            donut.rotation.z += 0.01; // Rotate around the z axis
          });
        }

        renderer.render(scene, camera);
        requestAnimationFrame(renderScene);
      };

      const handleResize = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;

        camera.aspect = width / height;
        camera.updateProjectionMatrix();

        renderer.setSize(width, height);
      };

      window.addEventListener("resize", handleResize);
      renderer.setSize(window.innerWidth, window.innerHeight);
      containerRef.current?.appendChild(renderer.domElement);

      renderScene();

      return () => {
        window.removeEventListener("resize", handleResize);
        containerRef.current?.removeChild(renderer.domElement);
        renderer.dispose();
      };
    }
  }, []);

  return <div ref={containerRef} />;
}
