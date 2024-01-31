import React from "react";
import styles from "./Form.module.css";
import { HiOutlinePhone } from "react-icons/hi";
import { CiLocationOn } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { LuMailSearch } from "react-icons/lu";
import { CiFacebook } from "react-icons/ci";
import { IoMdContact } from "react-icons/io";
import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";
import NavigationBar from "@/Components/Navigation/NavigationBar";
const Form = () => {
  return (
    <>
      <Header />
      <NavigationBar />
      <div id="contact">
        <div className={styles.contacthead}>
          <IoMdContact className={styles.icons} />
          <h1 className={styles.h1}>
            <strong>Contact Us</strong>
          </h1>
          <p className={styles.contInfo}>
            At Tejas Engineering Works , We have an expert Design team with
            Knowledge of design tools which work in close association with the
            product team for complex product parameters.We also have expertise
            to develop stainless Steel Products and fixture for prototype
            Development to get 'Right time product'
          </p>
        </div>
        <div className={styles.formOuter}>
          <div>
            <form
              action={"https://formspree.io/f/xyyrzlzo"}
              method="POST"
              className={styles.formInput}
            >
              <input
                name="fname"
                type="text"
                placeholder="Full Name"
                className={styles.textHolder}
                required
              ></input>
              <input
                name="email"
                type="text"
                placeholder="E-Mail"
                className={styles.textHolder}
                required
              ></input>
              <input
                type="text"
                name="inquiry"
                placeholder="Your Inquiry Here"
                className={styles.InqInput}
                required
              ></input>
              <button className={styles.SubmitBtn}>Submit</button>
            </form>
          </div>
          <div className={styles.formDetails}>
            <div className={styles.loc}>
              <a
                href="https://maps.app.goo.gl/N91UHoJS997Vfrgr5"
                target="blank"
              >
                <div>
                  <CiLocationOn className={styles.iconSocials} />
                </div>
              </a>

              <p className={styles.address}>
                Shed No.3 Aradhana Industrial Estate, Navghar road next to Rahul
                college bhayander(E),thane-401107
              </p>
            </div>
            <div className={styles.contactDetails}>
              <div className={styles.contact}>
                <div>
                  <HiOutlinePhone className={styles.iconSocials} />
                </div>
                <p className={styles.cntNum}>+918928284735 </p>
              </div>
              <div className={styles.eMails}>
                <div>
                  <LuMailSearch className={styles.iconSocials} />
                </div>
                <p className={styles.eMail}>tejasengg.works2859@gmail.com</p>
              </div>
            </div>
            <div className={styles.socialIcons}>
              {/* <CiLinkedin className={styles.icon} /> */}
              <a
                href="https://www.instagram.com/tejasengineeringworks/?igsh=cGd0NThncDl2cjNw"
                target="blank"
              >
                <FaInstagram className={styles.icon} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61554180940787&mibextid=ZbWKwL"
                target="blank"
              >
                <CiFacebook className={styles.icon} />
              </a>
              <p className={styles.socialPara}>TejasEngineeringWorks</p>
            </div>
          </div>
        </div>
        <span className={styles.blue}></span>
        <span className={styles.grey}></span>
      </div>
      <Footer />
    </>
  );
};

export default Form;
