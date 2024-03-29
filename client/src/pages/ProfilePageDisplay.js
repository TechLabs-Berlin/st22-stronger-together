import React from "react";
import Navbar from "../components/ProfilePage/Navbar/Navbar";
import LeftSideBottomDisplay from "../components/ProfilePage/Main/Leftside/LeftSideBottomDisplay";
import LeftSideTop from "../components/ProfilePage/Main/Leftside/LeftSideTop";
import RightSide from "../components/ProfilePage/Main/Rightside/RightSide";
import "./ProfilePage.css";
import Footer from "../components/Footer";

const ProfilePageDisplay = () => {
  return (
    <div>
      <Navbar />
      <section className="profilePageMain">
        <main className="leftSide">
          <LeftSideTop />
          <LeftSideBottomDisplay />
        </main>
        <RightSide />
      </section>
      <Footer />
    </div>
  );
};

export default ProfilePageDisplay;