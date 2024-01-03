import React, { useRef, useEffect,useCallback } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';


const Frame3 = () => {
  const ref = useRef();

  useEffect(() => {
    // 创建场景、相机和渲染器
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, ref.current.clientWidth / ref.current.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(ref.current.clientWidth, ref.current.clientHeight);
    ref.current.appendChild(renderer.domElement);

    // 添加灯光
    // ... 灯光代码 ...

    // 加载 glTF 模型
    const loader = new GLTFLoader();
    loader.load('liwandan.gltf', (gltf) => {
      scene.add(gltf.scene);
    }, undefined, (error) => {
      console.error(error);
    });

    // 设置相机位置
    camera.position.z = 5;

    // 添加控制器
    const controls = new OrbitControls(camera, renderer.domElement);

    // 动画循环
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // 清理
    return () => {
      ref.current.removeChild(renderer.domElement);
      scene.clear();
      renderer.dispose();
    };
  }, []);

  return <div ref={ref} style={{ width: '100%', height: '100%' }} />;
};

export default Frame3;




