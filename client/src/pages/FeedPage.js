import React from "react";
import Navbar from "../components/ProfilePage/Navbar/Navbar";
import RightSide from "../components/ProfilePage/Main/Rightside/RightSide";
import FeedLeftTop from "../components/FeedPage/FeedLeftTop";
import "./FeedPage.css";


const FeedPage = () => {
  return (
    <div className="feedpage">
      <Navbar />
      <section className="feedPageMain">
        <FeedLeftTop />
        <RightSide />
      </section>
    </div>
  );
};

export default FeedPage;
