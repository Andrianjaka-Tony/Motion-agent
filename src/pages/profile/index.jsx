import React from "react";
import ProfileAbout from "../../components/profileAbout";
import useScrollToTop from "../../hooks/useScrollToTop";
import Transition from "../../components/transition";

const Profile = () => {
  useScrollToTop();
  return (
    <>
      <Transition />
      <ProfileAbout />
    </>
  );
};

export default Profile;
