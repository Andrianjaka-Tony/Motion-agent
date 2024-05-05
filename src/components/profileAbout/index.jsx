import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { IoCheckmark } from "react-icons/io5";

import PlaneViewer from "../PlaneViewer";
import "./profileAbout.sass";

const ProfileAbout = () => {
  return (
    <>
      <div className="container-profile-about">
        <div className="user_profile">
          <div className="picture">
            <img src="/images/1.jpeg" alt="" />
          </div>
          <div className="user_info">
            <div className="block">
              <div className="label">Name</div>
              <div className="value">Mark</div>
            </div>
            <div className="block">
              <div className="label">Code Name</div>
              <div className="value"> 008</div>
            </div>
            <div className="block">
              <div className="label">Age</div>
              <div className="value">23</div>
            </div>{" "}
            <div className="block">
              <div className="label">From</div>
              <div className="value">Poland</div>
            </div>
          </div>
        </div>

        <div className="section_user">
          <div className="title">Mission done</div>
          <div className="list">
            {[...new Array(8).keys()].map((k) => (
              <div className="row" key={k}>
                <div className="name"> Sauvetage du fils de M </div>
                <div className="date"> 22-07-2020</div>
                <div className="icon">
                  <IoCheckmark />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="space"></div>
        <div className="section_user">
          <div className="title">Mission requested</div>
          <div className="list">
            {[...new Array(8).keys()].map((k) => (
              <div className="row" key={k}>
                <div className="name"> Sauvetage du fils de M </div>
                <div className="date"> 22-07-2020</div>
                <div className="icon">
                  <BsArrowUpRight />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="space"></div>
      </div>
    </>
  );
};

export default ProfileAbout;
