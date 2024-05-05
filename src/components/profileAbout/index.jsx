import React, { useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { IoCheckmark } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

import PlaneViewer from "../PlaneViewer";
import "./profileAbout.sass";
import Simulator from "./Simulator";

const ProfileAbout = () => {
  const [openMission, setOpenMission] = useState(false);
  const [openSimulator, setOpenSimulator] = useState(false);

  //

  return (
    <>
      {openMission && <PlaneViewer />}
      {openMission && (
        <div
          className="closer_open_mission"
          onClick={() => {
            setOpenMission(false);
          }}
        >
          <IoMdClose />
        </div>
      )}

      {openSimulator && <Simulator />}
      {openSimulator && (
        <div
          className="closer_open_mission"
          onClick={() => {
            setOpenSimulator(false);
          }}
        >
          <IoMdClose />
        </div>
      )}

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
          <div className="title">Mission requested</div>
          <div className="list">
            {[...new Array(1).keys()].map((k) => (
              <div className="row" key={k}>
                <div className="name"> Sauvetage du fils de M </div>
                <div className="date"> 22-07-2020</div>
                <div
                  className="icon"
                  onClick={() => {
                    setOpenMission(true);
                  }}
                >
                  <div className="text">View details</div>
                  <BsArrowUpRight />
                </div>
                <div
                  className="icon white"
                  onClick={() => {
                    setOpenSimulator(true);
                  }}
                >
                  <div className="text">Go to simulation</div>
                  <BsArrowUpRight />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="space"></div>
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
      </div>
    </>
  );
};

export default ProfileAbout;
