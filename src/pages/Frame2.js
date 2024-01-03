import { useCallback } from "react";
import styles from "./Frame.module.css";
import { useNavigate } from 'react-router-dom';
import Pin from './pin.js';

const frameNavigationMap = {  
  frame2: ['frame1', 'frame3'],  
};

const Frame2 = () => {
  const navigate = useNavigate();
  const onChaImageClick = useCallback(() => {
    navigate('/frame3'); 
  }, [navigate]);
  const onImage8Click = useCallback(() => {
    navigate('/'); 
  }, [navigate]);

  return (
    <div className={styles.chaParent}>
      <img
        className={styles.chaIcon}
        alt=""
        src="/cha@2x.png"
        onClick={onChaImageClick}
      />
      <img
        className={styles.icon8}
        alt=""
        src="/-1@2x.png"
        onClick={onImage8Click}
      />
      <Pin />
    </div>
  );
};

export default Frame2;
