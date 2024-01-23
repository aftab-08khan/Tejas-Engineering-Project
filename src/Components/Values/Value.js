import React from "react";
import styles from "./Value.module.css";
import { IoDiamond } from "react-icons/io5";
import { GiThreeFriends } from "react-icons/gi";
import { FaDoorOpen, FaHandshake } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { AiFillAlert } from "react-icons/ai";
import { MdHighQuality } from "react-icons/md";

const Value = () => {
  return (
    <>
      <section className={styles.bgSection} id="values">
        <div className={`${styles.container} ${styles.centerText}`}>
          <IoDiamond className={styles.valueMainIcon} />
          <h2 className={styles.valueHeading}>Our Values</h2>
        </div>
        <div className={styles.sectionValues}>
          <div className={styles.sectionValue}>
            <div className={styles.values}>
              <GiThreeFriends className={styles.valueIcon} />
              <h3 className={styles.headingTertairy}>respect</h3>
              <p className={styles.valueInfo}>
                Nurturing team spirit with a focused and tolerant .approach to
                faster a harmonious work environment.
              </p>
            </div>
            <div className={styles.values}>
              <MdHighQuality className={styles.valueIcon} />
              <h3 className={styles.headingTertairy}>quality</h3>
              <p className={styles.valueInfo}>
                Achieving excellence in delivery, ensuring consistent results,
                and fostering continuity in every endeavor.
              </p>
            </div>
          </div>
          <div className={styles.sectionValue} id={styles.bd2}>
            <div className={styles.values}>
              <FaDoorOpen className={styles.valueIcon} />
              <h3 className={styles.headingTertairy}>openess</h3>
              <p className={styles.valueInfo}>
                Nurturing success through transparent, honest, and open
                communication.
              </p>
            </div>
            <div className={styles.values}>
              <FaHandshake className={styles.valueIcon} />
              <h3 className={styles.headingTertairy}>dedication</h3>
              <p className={styles.valueInfo}>
                Wholehearted commitment fuels our relentless pursuit of
                engineering excellence.
              </p>
            </div>
          </div>
          <div className={styles.sectionValue}>
            <div className={styles.values}>
              <RiTeamFill className={styles.valueIcon} />
              <h3 className={styles.headingTertairy}>team</h3>
              <p className={styles.valueInfo}>
                Committed to prioritizing customers, building trust, and
                fostering a culture of humble collaboration.
              </p>
            </div>
            <div className={styles.values}>
              <AiFillAlert className={styles.valueIcon} />
              <h3 className={styles.headingTertairy}>Innovation</h3>
              <p className={styles.valueInfo}>
                Pushing boundaries and embracing cutting-edge solutions for a
                better future.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Value;
