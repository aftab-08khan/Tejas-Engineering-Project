import React from "react";
import styles from "./Vision.module.css";
// import ss from '../../../public/images/Logo/'
import { IoEarthSharp } from "react-icons/io5";

const Vision = () => {
  return (
    <>
      <section className={styles.visionSection}>
        <div className={styles.vision} id="vision">
          <div className={styles.visionTop}>
            <div>
              <IoEarthSharp className={styles.visionMainIcon} />
            </div>

            <h1>Our Vision</h1>
          </div>
          <div className={styles.visionBottom}>
            <p className="fw-bold">
              Empowering Progress, Tejas Engineering envisions a world
              transformed through innovative engineering solutions, pioneering
              excellence, and sustainable advancements that leave an enduring
              impact on industries and communities alike.
            </p>
            <img src="vs.png" alt="VisionBottom" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Vision;
