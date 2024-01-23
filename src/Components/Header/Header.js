import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Logo from "public/img/Logo2.png";

const Header = () => {
  return (
    <>
      <div className={styles.hg}>
        <span className={styles.blue}></span>
        <span className={styles.grey}></span>
      </div>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <Image
            src={Logo}
            alt="logo"
            width={112}
            height={96}
            className={styles.logohd}
          />
        </div>

        <div className={styles.headerRight}>
          <div>
            <span className={`${styles.headerIconPara} `}>
              TejasEngineeringWorks
            </span>
          </div>

          <p className={`${styles.headerRightInfo} mb-1`}>
            Connect Via Whatsapp
          </p>
          <p className={`${styles.headerRightInfo2} mt-0 mb-2`}>
            For latest offers and prices
          </p>
          <p className={`${styles.headerRightContact} mb-0 h2`}>
            +91 89 282 84 735
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
