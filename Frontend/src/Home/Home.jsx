import React from "react";
import Banner from "../component/Banner";
import Navbar from "../component/Navbar";
import Bookcategory from "../component/Bookcategory";
import Footer from "../component/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Bookcategory />
      <Footer />
    </>
  );
}

export default Home;
