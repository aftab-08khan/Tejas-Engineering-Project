import React from "react";
import styles from "./Mission.module.css";
import { AiFillExperiment } from "react-icons/ai";
import { PiCellSignalHigh } from "react-icons/pi";
import { MdEngineering } from "react-icons/md";
import { AiFillAlert } from "react-icons/ai";
import { IoRocket } from "react-icons/io5";

const Mission = () => {
  return (
    <>
      <section className={styles.bgMission}>
        <div className={styles.mission} id="mission">
          <div className={styles.missionTop}>
            <IoRocket className={styles.missionMainIcon} />
            <h1>Our Mission</h1>
          </div>
          <div className={styles.sectionMissions}>
            <div class={styles.sectionMission}>
              <div class={styles.missionValues}>
                <AiFillExperiment className={styles.missionIcon} />

                <p class={styles.missionInfo}>
                  Drive innovation by providing cutting-edge engineering
                  solutions,Strive for excellence in every project.
                </p>
              </div>
              <div class={styles.missionValues}>
                <PiCellSignalHigh className={styles.missionIcon} />

                <p class={styles.missionInfo}>
                  To give delightful experience to our valued customer by
                  providing on time delivery with best Quality Products.
                </p>
              </div>
            </div>
            <div class={styles.sectionMission} id={styles.bd2}>
              <div class={styles.missionValues}>
                <MdEngineering className={styles.missionIcon} />

                <p class={styles.missionInfo}>
                  Inspire positive transformation through engineering
                  advancements that address global challenges.
                </p>
              </div>
              <div class={styles.missionValues}>
                <AiFillAlert className={styles.missionIcon} />

                <p class={styles.missionInfo}>
                  Aim to be a leading force in the engineering industry, setting
                  benchmarks for innovation and quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Mission;
