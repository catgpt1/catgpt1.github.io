import React, { useRef, useEffect, useCallback } from 'react';
import styles from "./Frame.module.css";
import { useNavigate } from 'react-router-dom';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const frameNavigationMap = {   
  frame2: ['frame1', 'frame3'],  
  frame3: ['frame1', 'frame4'],  
};

const Frame3 = () => {
  const navigate = useNavigate();
  const onWenImageClick = useCallback(() => {
    navigate('/frame4');
  }, [navigate]);
  const ref = useRef();
  const onImage8Click = useCallback(() => {
    navigate('/'); 
  }, [navigate]);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, ref.current.clientWidth / ref.current.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(ref.current.clientWidth, ref.current.clientHeight);
    ref.current.appendChild(renderer.domElement);

    // 添加灯光
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.7);
    directionalLight.position.set(-16, 23, 15);
    directionalLight.castShadow = true;  // 设置产生阴影的光源
    scene.add(directionalLight);

    // 其他设置，例如阴影贴图等
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;


    //初始化并使用 GLTFLoader 加载 glTF 模型
    const loader = new GLTFLoader();
    loader.load(
      '/liwandan.gltf',
      (gltf) => {
        // 缩放模型
        gltf.scene.scale.set(0.5, 0.5, 0.5); 
        gltf.scene.position.set(0, -5, 0); // 将模型向下移动 5 个单位
        gltf.scene.traverse(function (node) {
          if (node.isMesh) { // 检查这个节点是否是网格
            node.castShadow = true;  // 如果物体应该产生阴影
            node.receiveShadow = true;  // 如果物体应该接收阴影
          }
        });
        scene.add(gltf.scene);
      },
      undefined,
      (error) => {
        console.error('An error happened', error);
      }
    );
    

    // 设置相机位置
    camera.position.set(0, 5, 10);  // 调整相机位置

    // 添加控制器
    const controls = new OrbitControls(camera, renderer.domElement);


    // 窗口尺寸变化处理函数
    const onWindowResize = () => {
      camera.aspect = ref.current.clientWidth / ref.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(ref.current.clientWidth, ref.current.clientHeight);
    };

    window.addEventListener('resize', onWindowResize, false);

    // 动画循环
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // 清理+变化
    return () => {
      window.removeEventListener('resize', onWindowResize);
      if (ref.current) {
        ref.current.removeChild(renderer.domElement);
      }
      scene.clear();
      renderer.dispose();
    };
  }, []);

  return (
    <div className={styles.wenParent}>
      <div ref={ref} style={{ width: '100%', height: '100%' }}></div>
      <img
        className={styles.wenIcon}
        alt=""
        src="/wen@2x.png"
        onClick={onWenImageClick}
      />
      <img
        className={styles.icon8}
        alt=""
        src="/-1@2x.png"
        onClick={onImage8Click}
      />
    </div>
  );
};

export default Frame3;
