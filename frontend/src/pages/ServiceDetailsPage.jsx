import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollTop from "../components/ScrollTop";
import Preloader from "../components/Preloader";
import ServiceDetails from "../components/ServiceDetails";

const ServiceDetailsPage = () => (
  <>
    <Header />
    <main className="main">
      <ServiceDetails />
    </main>
    <Footer />
    <ScrollTop />
    <Preloader />
  </>
);

export default ServiceDetailsPage;
