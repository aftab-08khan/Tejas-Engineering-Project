import React from "react";
import styles from "./MachinesMain.module.css";
import { GiDrill } from "react-icons/gi";

const machinesMain = () => {
  return (
    <>
      <section className={styles.SectionMachines} id="about">
        <div className={styles.main}>
          <div className={styles.InfoSection}>
            <GiDrill className={styles.MachineIcon} />
            <h1 className={styles.HeadingPrimary}>About Us</h1>
            <p className={styles.para}>
              the tejas Engineering works established in 1990, has been a
              dedicated stainless steel,mild steel & galvanized iron products
              manufacturer for nearly 30 years. empowering progress our company
              envisions a world transformed through innovative Engineering
              solution , poineering excellence,and sustainable advancements that
              leave and enduring impact on industries and combinative alike.
            </p>
          </div>
        </div>
        {/* Slider */}
        {/* <div className={styles.ImgSlider}>
          <img src=""></img>
        </div> */}
      </section>
    </>
  );
};

export default machinesMain;
