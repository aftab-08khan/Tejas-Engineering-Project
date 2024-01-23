import React, { useState } from "react";
import styles from "./Navigation.module.css";
import { FiMenu, FiX } from "react-icons/fi"; // Import the hamburger and cancel icons
import Link from "next/link";
// import Link from "next/link";
const NavigationBar = () => {
  const navigationOptions = [
    { name: "Home", link: "/" },
    { name: "Our Values", link: "/#values" },
    { name: "Our Vision", link: "/#vision" },
    { name: "About Us", link: "/#about" },
    { name: "Our Products", link: "/#product" },
    { name: "Our Machines", link: "/#machinesmain" },
    { name: "Contact Us", link: "/contact" },
  ];

  // State to manage the visibility of the mobile menu
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  return (
    <div>
      <div
        className={styles.mobileIcon}
        onClick={() => setMobileMenuVisible(!mobileMenuVisible)}
      >
        {mobileMenuVisible ? <FiX /> : <FiMenu />}
      </div>

      <div
        className={`${styles.navbar} ${
          mobileMenuVisible ? styles.mobileMenuVisible : ""
        }`}
      >
        {navigationOptions.map((option, index) => (
          <div
            className={`${styles.navbarOption} ${
              index === navigationOptions.length - 1 ? styles.lastOption : ""
            }`}
            key={index}
          >
            <Link
              href={option.link}
              onClick={() => setMobileMenuVisible(false)}
            >
              {option.name}
            </Link>
          </div>
        ))}

        {/* Cancel button for mobile */}
        <div
          className={styles.cancelButton}
          onClick={() => setMobileMenuVisible(false)}
        >
          <span>Cancel</span>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
