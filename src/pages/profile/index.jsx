import React from "react";
import ProfileAbout from "../../components/profileAbout";
import useScrollToTop from "../../hooks/useScrollToTop";
import Transition from "../../components/transition";
import Footer from "../../components/footer";

const Profile = () => {
  useScrollToTop();
  return (
    <>
      <Transition />
      <ProfileAbout />
      <Footer />
    </>
  );
};

export default Profile;
