import React from "react";
import Navbar from "../components/ProfilePage/Navbar/Navbar";
import RightSide from "../components/ProfilePage/Main/Rightside/RightSide";
import FeedLeftTop from "../components/FeedPage/FeedLeftTop";
import "./FeedPage.css";
import Footer from "../components/Footer";

const FeedPage = () => {
  return (
    <div>
      <Navbar />
      <section className="feedPageMain">
        <FeedLeftTop />
        <RightSide />
      </section>
      <Footer />
    </div>
  );
};

export default FeedPage;
