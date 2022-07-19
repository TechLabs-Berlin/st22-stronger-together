import React from "react";
import Navbar from "../components/ProfilePage/Navbar/Navbar";
import LeftSideBottom from "../components/ProfilePage/Main/Leftside/LeftSideBottomUpdate";
import LeftSideTop from "../components/ProfilePage/Main/Leftside/LeftSideTop";
import RightSide from "../components/ProfilePage/Main/Rightside/RightSide";
import "./ProfilePage.css";

const ProfilePageUpdate = () => {
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

export default ProfilePageUpdate;
