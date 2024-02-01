import React from "react";
import styles from "./Footer.module.css";
import { FaInstagram, FaTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import logo from "public/img/Logo2.png";
import Image from "next/image";
const Footer = () => {
  const CurrentDate = new Date().getFullYear();
  return (
    <>
      <footer className={styles.ffooter}>
        <div className={styles.GridFooter}>
          <div className={styles.LogoCol}>
            <a href="#" className={styles.FooterLogo}>
              <Image
                src={logo}
                alt="image of clothes combo"
                className={styles.Logo}
              />
            </a>
            <ul className={styles.SocialLinks}>
              <li>
                <a
                  href="
                https://www.instagram.com/tejasengineeringworks/?igsh=cGd0NThncDl2cjNw"
                  className={styles.FooterLink}
                >
                  <FaInstagram className={styles.SocialIcon} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61554180940787&mibextid=ZbWKwL"
                  className={styles.FooterLink}
                >
                  <FaFacebook className={styles.SocialIcon} />
                </a>
              </li>
            </ul>
            <p className={styles.Copyright}>
              Copyright &copy;{" "}
              <span className={styles.Year}>{CurrentDate}</span> by Tejas
              Engineering Works. All rights reserved.
            </p>
          </div>
          <div className={styles.AddressCol}>
            <p className={styles.FooterHeading}>Contact Us</p>
            <address className={styles.Contacts}>
              <a
                href="https://maps.app.goo.gl/N91UHoJS997Vfrgr5"
                className={styles.FooterLink}
              >
                Shed No.3 Aradhana Industrial Estate,Navghar Road Near Rahul
                College Bhayander(E),Thane-401107
              </a>
              <p />
              <p>
                <a href="tel=+918104352837" className={styles.FooterLink}>
                  +918928284735
                </a>
                <br />
                <a
                  href="https://mail.google.com/mail/u/0/#search/tejasengg.works2859%40gmail.com"
                  className={styles.FooterLink}
                >
                  tejasengg.works2859@gmail.com
                </a>
              </p>
            </address>
          </div>

          <nav className={styles.NavCol}>
            <p className={styles.FooterHeading}>Account</p>
            <ul className={styles.FooterNav}>
              <li>
                <a className={styles.FooterLink} href="/contact">
                  Account
                </a>
              </li>
              <li>
                <a className={styles.FooterLink} href="/contact">
                  Sign In
                </a>
              </li>
              <li>
                <a className={styles.FooterLink} href="#">
                  IOS App
                </a>
              </li>
            </ul>
          </nav>
          <nav className={styles.NavCol}>
            <p className={styles.FooterHeading}>Social</p>
            <ul className={styles.FooterNav}>
              <li>
                <a
                  className={styles.FooterLink}
                  href="https://www.facebook.com/profile.php?id=61554180940787&mibextid=ZbWKwL"
                >
                  Facebook
                </a>
              </li>

              <li>
                <a
                  className={styles.FooterLink}
                  href=" https://www.instagram.com/tejasengineeringworks/?igsh=cGd0NThncDl2cjNw"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </nav>
          <nav className={styles.NavCol}>
            <p className={styles.FooterHeading}>Help Desk</p>
            <ul className={styles.FooterNav}>
              <li>
                <a className={styles.FooterLink} href="#values">
                  Privacy
                </a>
              </li>
              <li>
                <a className={styles.FooterLink} href="#product">
                  Our Selling
                </a>
              </li>
              <li>
                <a className={styles.FooterLink} href="#hero">
                  Help
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
      <div className={styles.hg}>
        <span className={styles.blue}></span>
        <span className={styles.grey}></span>
      </div>
    </>
  );
};

export default Footer;
