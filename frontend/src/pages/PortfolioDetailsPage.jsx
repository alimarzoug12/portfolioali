import React from "react";
import Header from "../components/Header";
import PortfolioDetails from "../components/PortfolioDetails";
import Footer from "../components/Footer";
import ScrollTop from "../components/ScrollTop";
import Preloader from "../components/Preloader";

const PortfolioDetailsPage = () => (
  <>
    <Header />
    <main className="main">
      <PortfolioDetails />
    </main>
    <Footer />
    <ScrollTop />
    <Preloader />
  </>
);

export default PortfolioDetailsPage;
