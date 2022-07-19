import React from "react";
import Navbar from "../components/ProfilePage/Navbar/Navbar";
import LeftSideBottomDisplay from "../components/ProfilePage/Main/Leftside/LeftSideBottomDisplay";
import LeftSideTop from "../components/ProfilePage/Main/Leftside/LeftSideTop";
import RightSide from "../components/ProfilePage/Main/Rightside/RightSide";
import "./ProfilePage.css";

const ProfilePageDisplay = () => {
  return (
    <div className="profilepagebody">
      <Navbar />
      <section className="profilePageMain">
        <main className="leftSide">
          <LeftSideTop />
          <LeftSideBottomDisplay />
        </main>
        <RightSide />
      </section>
    </div>
  );
};

export default ProfilePageDisplay;