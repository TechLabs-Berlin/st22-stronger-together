import React from "react";
import ReactDOM from "react-dom";
import Navbar from "../components/ProfilePage/Navbar/Navbar";
import LeftSideBottom from "../components/ProfilePage/Main/Leftside/LeftSideBottom";
import LeftSideTop from "../components/ProfilePage/Main/Leftside/LeftSideTop";
import RightSide from "../components/ProfilePage/Main/Rightside/RightSide";

const ProfilePage = () => {
  return (
    <div className="profilepagebody">
      <Navbar />
      <section className="profilePageMain">
        <main className="leftSide">
          <LeftSideTop />
          <LeftSideBottom />
        </main>
        <RightSide />
      </section>
    </div>
  );
};

export default ProfilePage;
