import React from "react";
import styles from "./design.module.css";
const design = () => {
  return (
    <section className={styles.DesignSection} id="design">
      <div className={styles.Container}>
        <div className={styles.DesignInfo}>
          <h1>Engineering Designs</h1>

          <p>
            we havean expert design team with knowledge of design too is which
            work in close association with the product team for complex
            parameters we also have expertise to develop jigs and fixture for
            photo type developments to get right first time product
          </p>
        </div>
        <div className={styles.DesignSkills}>
          <div className={styles.Skill}>cutting</div>
          <div className={styles.Skill}>sheering</div>
          <div className={styles.Skill}>forming</div>
          <div className={styles.Skill}>welding</div>
          <div className={styles.Skill}>machining</div>
          <div className={styles.Skill}>handling</div>
        </div>
      </div>
    </section>
  );
};

export default design;
