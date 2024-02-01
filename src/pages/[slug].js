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
  ModalOilCan,
  ModalBellySideBraket,
  ModalJugChach,
  ModalMangoSideBracket,
  ModalPipeHandle,
  ModalStripHandle,
  ModalRoyalHandle,
  ModalRegularBracket,
  ModalWireBracketHandle,
  ModalSideStripsLock,
  ModalSmashCup,
  ModalSSHawthorne,
  ModalApplecutter,
  ModalCheeseGrater,
  ModalMashersoilStrainer,
  ModalLimejuicer,
  ModalOvalShapeFrame,
  ModalSixShapeFrame,
  ModalSSFloorDrainRectangular,
  ModalSSsinkstrainer,
  ModalSSflowersinkstrainer,
  ModalSSantiblockingfloorDrain,
  ModalSSSpilBox,
  ModalFloorDrain,
  ModalSquareShapeFrame,
  ModalSSCanisterDabba,
  ModalMSSeals,
  ModalMSCornerS,
  ModalMSLockerHinges,
  ModalMSfoldingHinges,
  ModalMSCClamp,
  ModalSSHandle,
  ModalCocoNutScraper,
  ModalCoconutmeatslicer,
  Fabrications,
  ModalLatterbox,
  ModalMSAirVentgrill,
  ModalConcreteFormWorkPVCcone,
  ModalSSHBurner,
  ModalMeteringBox,
  ModalLocker,
  ModalSSFalafelMaker,
  Accessories,
  ModalCutleryHolder,
  ModalKnife,
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
    } else if (url === "/fabrications") {
      setData(Fabrications);
    } else if (url === "/Accessories") {
      setData(Accessories);
    }
  };

  useEffect(() => {
    getData(pathname);
  }, [pathname]);
  //
  useEffect(() => {
    if (selectedImg === "Oil Can Handle") {
      setModalImg(ModalOilCan);
    } else if (selectedImg === "Belly Side Braket") {
      setModalImg(ModalBellySideBraket);
    } else if (selectedImg === "Jug Chach") {
      setModalImg(ModalJugChach);
    } else if (selectedImg === "Mango Side Bracket") {
      setModalImg(ModalMangoSideBracket);
    } else if (selectedImg === "Pipe Handle") {
      setModalImg(ModalPipeHandle);
    } else if (selectedImg === "Strip Handle") {
      setModalImg(ModalStripHandle);
    } else if (selectedImg === "Regular Side Bracket") {
      setModalImg(ModalRegularBracket);
    } else if (selectedImg === "Royal Handle") {
      setModalImg(ModalRoyalHandle);
    } else if (selectedImg === "Wire Bracket Handle") {
      setModalImg(ModalWireBracketHandle);
    } else if (selectedImg === "Side Strips Lock") {
      setModalImg(ModalSideStripsLock);
    } else if (selectedImg === "Smash Cup") {
      setModalImg(ModalSmashCup);
    } else if (selectedImg === "SS Hawthorne") {
      setModalImg(ModalSSHawthorne);
    } else if (selectedImg === "Apple cutter") {
      setModalImg(ModalApplecutter);
    } else if (selectedImg === "Cheese Grater") {
      setModalImg(ModalCheeseGrater);
    } else if (selectedImg === "Mashers & oil Strainer") {
      setModalImg(ModalMashersoilStrainer);
    } else if (selectedImg === "Lime juicer") {
      setModalImg(ModalLimejuicer);
    } else if (selectedImg === "Oval Shape Frame") {
      setModalImg(ModalOvalShapeFrame);
    } else if (selectedImg === "Six Shape Frame") {
      setModalImg(ModalSixShapeFrame);
    } else if (selectedImg === "SS Floor Drain Rectangular") {
      setModalImg(ModalSSFloorDrainRectangular);
    } else if (selectedImg === "SS sink strainer") {
      setModalImg(ModalSSsinkstrainer);
    } else if (selectedImg === "SS flower sink strainer") {
      setModalImg(ModalSSflowersinkstrainer);
    } else if (selectedImg === "SS anti blocking floor Drain") {
      setModalImg(ModalSSantiblockingfloorDrain);
    } else if (selectedImg === "SS Spil Box") {
      setModalImg(ModalSSSpilBox);
    } else if (selectedImg === "Floor Drain") {
      setModalImg(ModalFloorDrain);
    } else if (selectedImg === "Square Shape Frame") {
      setModalImg(ModalSquareShapeFrame);
    } else if (selectedImg === "SS Canister Dabba") {
      setModalImg(ModalSSCanisterDabba);
    } else if (selectedImg === "MS Seals") {
      setModalImg(ModalMSSeals);
    } else if (selectedImg === "MS Corner S") {
      setModalImg(ModalMSCornerS);
    } else if (selectedImg === "MS Locker Hinges") {
      setModalImg(ModalMSLockerHinges);
    } else if (selectedImg === "MS folding Hinges") {
      setModalImg(ModalMSfoldingHinges);
    } else if (selectedImg === "MS C Clamp") {
      setModalImg(ModalMSCClamp);
    } else if (selectedImg === "SS Handle") {
      setModalImg(ModalSSHandle);
    } else if (selectedImg === "CocoNut Scraper") {
      setModalImg(ModalCocoNutScraper);
    } else if (selectedImg === "Coconut meat slicer") {
      setModalImg(ModalCoconutmeatslicer);
    } else if (selectedImg === "Latter box") {
      setModalImg(ModalLatterbox);
    } else if (selectedImg === "MS Air Vent grill") {
      setModalImg(ModalMSAirVentgrill);
    } else if (selectedImg === "Concrete Form Work PVC cone") {
      setModalImg(ModalConcreteFormWorkPVCcone);
    } else if (selectedImg === "SS H Burner") {
      setModalImg(ModalSSHBurner);
    } else if (selectedImg === "Metering Box") {
      setModalImg(ModalMeteringBox);
    } else if (selectedImg === "Locker") {
      setModalImg(ModalLocker);
    } else if (selectedImg === "SS Falafel Maker") {
      setModalImg(ModalSSFalafelMaker);
    } else if (selectedImg === "Cutlery Holder") {
      setModalImg(ModalCutleryHolder);
    } else if (selectedImg === "Knife") {
      setModalImg(ModalKnife);
    } else if (selectedImg === "") {
      setModalImg();
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

  // console.log("data", data);

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
              <img
                src={`${entry.src}?${parameters}`}
                className={styles.ProductImg}
                alt="Product List Card UI"
              />
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
