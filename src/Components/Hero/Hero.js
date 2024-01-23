import styles from "./Hero.module.css";
import Image from "next/image";
import hero from "public/img/hero3.png";
import React, { useEffect } from "react";
const Hero = () => {
  return (
    <>
      <section className={styles.SectionHero} id="hero">
        <div className={styles.Hero}>
          <div className={styles.HeroDescription}>
            <h1 className={styles.HeadingPrimary}>
              Welcome to, Tejas Engineering Works
            </h1>
            <p className={styles.HeroPara}>
              Specialist In: precision components cutting & embossing dies, all
              type steel accessories, kitchen items, fixtures & all kind of
              mechanical works.
            </p>
            <a href="/contact">
              <button className={styles.contactUsBtn}>Contact Us</button>
            </a>
            <a href="#">
              <button className={styles.moreInfoBtn}>More Info</button>
            </a>
          </div>
          <div className={styles.HeroImgbox}>
            <Image
              src={hero} // Corrected the image path
              className={styles.HeroImg}
              alt="photo of Tejas Engineering works"
              width={520}
              height={456}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
