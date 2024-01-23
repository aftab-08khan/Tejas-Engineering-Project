import React from "react";
import styles from "./Customer.module.css";
// import mp from "../../../public/images/Logo/download.png";
import { IoPeopleSharp } from "react-icons/io5";

const Customer = () => {
  return (
    <>
      <section className={styles.customer} id="client">
        <div>
          {/* <img className={styles.goldenBox} src="/value.png" alt="" /> */}
          <IoPeopleSharp className={styles.iconsStyle} />
          <h1>Our Clients</h1>
          <p>
            Our clients, the heartbeat of our success story. Building lasting
            relationships through quality service. Join our community of
            satisfied partners and thrive.Partnering with top-tier businesses
            for impactful solutions. Collaborating with industry pioneers to
            drive success. Grateful for the trust our clients place in our
            expertise.
          </p>
          {/* <IoMdContact className={styles.icons} />
          {/* <img className={styles.goldenBox} src="/value.png" alt="jjf" /> */}
          {/* <h1>
            <strong>Contact Us</strong>
          </h1>
          <p>
            At Tejas Engineering Works , We have an expert Design team with
            Knowledge of design tools which work in close association with the
            product team for cimplex product parameters.We also have expertise
            to develop jigs and fixture for prototype Development to get 'Right
            time product'
          </p> */}
        </div>
        <section className={styles.testimonialsContainer}>
          {/* <h2>What Our Fans Are Saying</h2> */}
          <div className={styles.testimonials}>
            <div className={styles.testimonial}>
              <h3>"Unmatched Precision "</h3>
              <p>
                Exceptional Quality! Tejas Engineering Work's Steel products and
                dye machines exceeded my expectations.
                <span className={styles.testimonialAuthor}>Rakesh K.</span>
              </p>
            </div>
            <div className={styles.testimonial}>
              <h3>"Efficiency Redefined"</h3>
              <p>
                Efficient Solutions! Tejas Engineering Work's delivered
                top-notch dye machines that significantly improved our
                production processes.
                <span className={styles.testimonialAuthor}>Alam Khan.</span>
              </p>
            </div>
            <div className={styles.testimonial}>
              <h3> "Seamless Experience"</h3>
              <p>
                Exceptional Service! From expert advice to prompt delivery,Tejas
                Engineering Work's provided a seamless experience.
                <span className={styles.testimonialAuthor}>Jennifer T.</span>
              </p>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Customer;
