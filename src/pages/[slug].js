import React, { useEffect, useState } from "react";
import styles from "./ProductCards.module.css";
import Header from "@/Components/Header/Header";
import NavigationBar from "@/Components/Navigation/NavigationBar";
import Footer from "@/Components/Footer/Footer";
import { usePathname } from "next/navigation";

import {
  Stainlesssteelcanister,
  Stainlesssteelstrainers,
  StainlessSteelSinkStrainers,
  MildSteelAccessories,
  CocoNutScraper,
  ModalStainer,
} from "@/productsData";
import { CasserolefiltersAccessories } from "@/productsData";
import ModalGallery from "@/Components/Modal";
const Product = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [modalImg, setModalImg] = useState([]);

  const hanldeImageClick = (title) => {
    console.log("hanldeImageClick", title);
    setSelectedImg(title);
    setModalIsOpen(true);
  };

  // @@@@@
  const pathname = usePathname();

  console.log("pathname", pathname);

  const [data, setData] = useState([]);

  const getData = (url) => {
    if (url === "/Stainlesssteelstrainers") {
      setData(Stainlesssteelstrainers);
    } else if (url === "/CasserolefiltersAccessories") {
      setData(CasserolefiltersAccessories);
    } else if (url === "/stainlesssteelcanister") {
      setData(Stainlesssteelcanister);
    } else if (url === "/stainlesssteelsinkstrainers") {
      setData(StainlessSteelSinkStrainers);
    } else if (url === "/mildsteelaccessories") {
      setData(MildSteelAccessories);
    } else if (url === "/CoconutScraper") {
      setData(CocoNutScraper);
    }
  };

  useEffect(() => {
    getData(pathname);
  }, [pathname]);

  useEffect(() => {
    if (selectedImg === "Belly Side Braket") {
      setModalImg(ModalStainer);
    }
    if (modalImg.length > 0) {
      openModal();
    }
  }, [selectedImg]);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  console.log("data", data);

  const parameters = "crop=edges&cs=tinysrgb&fit=crop&fm=jpg&w=600&h=450";

  return (
    <>
      <section className={styles.main}>
        {/* Header */}
        <Header />
        {/* Navigation */}
        <NavigationBar />
        {/* Cards */}

        <h1 className={styles.HeadingPrimary}>{data.heading}</h1>
        <div className={styles.Container}>
          {data?.products?.map((entry, index) => (
            <div
              className={styles.ProductCard}
              key={index}
              onClick={() => hanldeImageClick(entry.title)}
            >
              {/* <a
                href={entry.src}
                target="_self"
                className={styles.ProductCardImage}
              > */}
              <img
                src={`${entry.src}?${parameters}`}
                className={styles.ProductImg}
                alt="Product List Card UI"
              />
              {/* </a> */}
              <div className={styles.ProductCardBody}>
                <div className={styles.ProductCardTitle}>
                  <a href="#">{entry.title}</a>
                </div>
                <div className={styles.ProductCardDesc}>{entry.desc}</div>
              </div>
              <span className={styles.ProductMaterial}>{entry.material}</span>
              <span className={styles.ProductCardStock}>{entry.size}</span>
            </div>
          ))}
        </div>
        <Footer />
      </section>
      {modalIsOpen && (
        <div style={{ position: "absolute", inset: 0 }}>
          <ModalGallery
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            images={modalImg}
          ></ModalGallery>
        </div>
      )}
    </>
  );
};

export default Product;
