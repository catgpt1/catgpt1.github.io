import { useCallback } from "react";
import styles from "./Frame.module.css";
import { useNavigate } from "react-router-dom";


const Frame1 = () => {
  const navigate = useNavigate();

  const onPinImageClick = useCallback(() => {
    navigate('/frame2'); 
  }, [navigate]);

  return (
    <div className={styles.fengParent}>
      <img
        className={styles.pinIcon}
        alt=""
        src="/pin@2x.png"
        onClick={onPinImageClick}
      />
      <img className={styles.zi} alt="" src="/zi.png" />
      <img className={styles.xi} alt="" src="/xi.png" />
      <img className={styles.zu} alt="" src="/zu.png" />
      <img className={styles.di} alt="" src="/9@2x.png" />
    </div>
  );
};

export default Frame1;
