import { useState, useCallback } from "react";
import styles from "./Frame.module.css";
import { useNavigate } from 'react-router-dom';

const frameNavigationMap = {   
  frame4: ['frame1'],  
};

const Frame4 = () => {
  const navigate = useNavigate();
  const onImage8Click = useCallback(() => {
    navigate('/'); 
  }, [navigate]);
  // 状态对象来跟踪每张图片的显示状态
  const [visibleImages, setVisibleImages] = useState({
    imagew1: false,
    imagew2: false,
    imagew3: false,
    imagew4: false,
    imagew5: false,
    imagew6: false,
  });

  // 通用的点击事件处理函数来切换图片的显示状态
  const toggleImageVisibility = (imageName) => {
    setVisibleImages(prevState => ({
      ...prevState,
      [imageName]: !prevState[imageName] // 切换指定图片的显示状态
    }));
  };

  return (
    <div className={styles.parent}>
      <img className={styles.icon}  />
      <img className={styles.icon1}
        alt=""
        src="/1@2x.png"
        onClick={() => toggleImageVisibility('imagew1')}
      />
      <img
        className={styles.icon2}
        alt=""
        src="/2@2x.png"
        onClick={() => toggleImageVisibility('imagew2')}
      />
       <img className={styles.icon3}
        alt=""
        src="/3@2x.png"
        onClick={() => toggleImageVisibility('imagew3')}
      />
      <img className={styles.icon4}
        alt=""
        src="/4@2x.png"
        onClick={() => toggleImageVisibility('imagew4')}
      />
       <img className={styles.icon5}
        alt=""
        src="/5@2x.png"
        onClick={() => toggleImageVisibility('imagew5')}
      />
      <img
        className={styles.icon6}
        alt=""
        src="/6@2x.png"
        onClick={() => toggleImageVisibility('imagew6')}
      />


      {visibleImages.imagew1 && (
        <img
          className={styles.w1}
          alt=""
          src="/w1.png"
          onClick={() => toggleImageVisibility('imagew1')}
        />
      )}
      {visibleImages.imagew2 && (
        <img
          className={styles.w2}
          alt=""
          src="/w2.png"
          onClick={() => toggleImageVisibility('imagew2')}
        />
      )}
            {visibleImages.imagew3 && (
        <img
          className={styles.w3}
          alt=""
          src="/w3.png"
          onClick={() => toggleImageVisibility('imagew3')}
        />
      )}
      {visibleImages.imagew4 && (
        <img
          className={styles.w4}
          alt=""
          src="/w4.png"
          onClick={() => toggleImageVisibility('imagew4')}
        />
      )}
            {visibleImages.imagew5 && (
        <img
          className={styles.w5}
          alt=""
          src="/w5.png"
          onClick={() => toggleImageVisibility('imagew5')}
        />
      )}
      {visibleImages.imagew6 && (
        <img
          className={styles.w6}
          alt=""
          src="/w6.png"
          onClick={() => toggleImageVisibility('image6')}
        />
      )}


<img
        className={styles.icon7}
        alt=""
        src="/7@2x.png"
        
      />


      <img
        className={styles.icon8}
        alt=""
        src="/-1@2x.png"
        onClick={onImage8Click}
        
      />
      <img className={styles.icon0} alt="" src="/8@2x.png"/>
    </div>
  );
};

export default Frame4;
