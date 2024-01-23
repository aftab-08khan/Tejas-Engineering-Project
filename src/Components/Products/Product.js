import React from "react";
import styles from "./Product.module.css";
import Image from "next/image";
import { BsCartCheckFill } from "react-icons/bs";
import Logo from "public/img/logo.png";

const ProductData = [
  {
    link: "/Product",
    ImgSrc: "/img/Product1.jpg",
    title: "Casserole filters Accessories",
    status: "Discover Now",
    description:
      "Use for Hotpot Accessories. Explore our high-quality stainless steel products designed for durability.",
  },
  {
    link: "/Product",
    ImgSrc: "/Stainless Steel Strainers/Lime Juicer/Lime Juicer.jpg",
    title: "Stainless steel strainers",
    status: "Discover Now",
    description: "Made Of Heavy Gauge Stainless Steel.",
  },
  {
    link: "/Product",
    ImgSrc: "/img/Product2.jpg",
    title: "cutlery holder",
    status: "Discover Now",
    description:
      "Explore our high-quality stainless steel products designed for durability and precision in engineering applications.",
  },
  {
    link: "/Product",
    ImgSrc: "/Stainless Steel Canister/SS Canister Dabba.jpg",
    title: "stainless steel canister",
    status: "Discover Now",
    description:
      "It consist of Smash Cup, SS Hawthorne, Apple cutter, Cheese Grater.",
  },
  {
    link: "/Product",
    ImgSrc: "/Stainless Steel Sink Strainers/SS Kitchen Drain/SS Sink S.jpg",
    title: "stainless steel sink strainers",
    status: "Discover Now",
    description:
      "It consist of SS Floor Drain Rectangular,SS sink strainer,SS anti blocking floor Drain etc.",
  },
  {
    link: "/Product",
    ImgSrc: "/Mild Steel Accessories/MS Corner Struts/MS Corner S2.jpg",
    title: "mild steel accessories",
    status: "Discover Now",
    description:
      "Mild Steel products, It consist of MS Seals, MS corner,MS locker etc. ",
  },
  {
    link: "/Product",
    ImgSrc: "/img/Product4.jpg",
    title: "fabrications",
    status: "Discover Now",
    description:
      "Explore our high-quality stainless steel products designed for durability and precision in engineering applications.",
  },
  {
    link: "/Product",
    ImgSrc: "/CocoNut Scraper/COCONUT SCRAPER/COCONUT1.jpg",
    title: "Coconut Scraper",
    status: "Discover Now",
    description:
      "The coconut grater is made of food grade stainless steel, safe and sturdy, 5 knife edges for quick cutting of coconut meat into silk.",
  },
];
const Product = () => {
  return (
    <>
      <section className={styles.productSection}>
        <div className={styles.product} id="product">
          <div className={styles.productTop}>
            <BsCartCheckFill className={styles.productIcon} />
            <h1>Our Products</h1>
            <p></p>
          </div>
        </div>
        {/* Product Cards */}
        <section>
          <div>
            <div className={styles.Cards}>
              {ProductData.map((data, index) => {
                return (
                  <div key={index}>
                    <a
                      href={data.title.replaceAll(" ", "")}
                      class={styles.Card}
                    >
                      <Image
                        src={data.ImgSrc}
                        class={styles.CardImage}
                        alt=""
                        width={500}
                        height={350}
                      />
                      <div class={styles.CardOverlay}>
                        <div class={styles.CardHeader}>
                          <svg
                            class={styles.CardArc}
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path />
                          </svg>
                          <Image class={styles.CardThumb} src={Logo} alt="" />
                          <div class={styles.CardHeaderText}>
                            <h3 class={styles.CardTitle}>{data.title}</h3>
                            <span class={styles.CardStatus}>{data.status}</span>
                          </div>
                        </div>
                        <p class={styles.CardDescription}>{data.description}</p>
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Product;
