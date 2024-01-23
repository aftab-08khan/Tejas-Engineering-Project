import Customer from "@/Components/Customers/Customer";
import Header from "@/Components/Header/Header";
import Hero from "@/Components/Hero/Hero";
import Mission from "@/Components/Mission/Mission";
import NavigationBar from "@/Components/Navigation/NavigationBar";
import Product from "@/Components/Products/Product";
import Value from "@/Components/Values/Value";
import Vision from "@/Components/Vision.js/Vision";
import Footer from "@/Components/Footer/Footer.js";
import MachinesMain from "@/Components/MachinesMain/MachinesMain";
import Design from "@/Components/Design/design";
export default function Home() {
  return (
    <>
      <Header />
      <NavigationBar />
      <Hero />
      <Value />
      <Vision />
      <Mission />
      <Product />
      <MachinesMain />
      <Design />
      <Customer />

      <Footer />

      {/* <CategoryCard /> */}
      {/* <Form /> */}
    </>
  );
}
