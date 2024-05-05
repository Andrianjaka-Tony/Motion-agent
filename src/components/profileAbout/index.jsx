import React, { useEffect, useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { IoCheckmark } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import PlaneViewer from "../PlaneViewer";
import Simulator from "./Simulator";
import "./profileAbout.sass";
import { alaivoGet } from "../../utils/Alaivo";

const ProfileAbout = () => {
  const [openMission, setOpenMission] = useState(false);
  const [openSimulator, setOpenSimulator] = useState(false);

  const [agent, setAgent] = useState(null);
  const [myMissions, setMyMissions] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  //

  const fetchData = async () => {
    let res = await alaivoGet("mymission", null, false);
    console.log(res);
    if (res) {
      if (res.agent) setAgent(res.agent);
      if (res.missions) setMyMissions(res.missions);
    } else {
      alert("Error on fetching data, please reload the page");
    }
  };

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
              <div className="value">{agent ? agent.nom : "XX"}</div>
            </div>
            <div className="block">
              <div className="label">Code Name</div>
              <div className="value"> {agent ? agent.code_name : "XXX"}</div>
            </div>

            <div className="block">
              <div className="label">Contact</div>
              <div className="value">{agent ? agent.contact : "XX-XX"}</div>
            </div>
          </div>
        </div>

        <div className="section_user">
          <div className="title">Mission requested</div>

          {myMissions.length > 0 && (
            <>
              <div className="list">
                <div className="row">
                  <div className="name">{myMissions[myMissions.length - 1].titre}</div>
                  <div className="date">AT - {myMissions[myMissions.length - 1].datedebut}</div>
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
              </div>
            </>
          )}
          {myMissions.length === 0 && <div className="empty"> No Data :/</div>}
        </div>
        <div className="space"></div>
        <div className="section_user">
          <div className="title">Mission done</div>

          <div className="list">
            {myMissions.length > 1 &&
              myMissions.map((k, index) => {
                return index !== myMissions.length - 1 ? (
                  <div className="row" key={index}>
                    <div className="name"> Sauvetage du fils de M </div>
                    <div className="date"> 22-07-2020</div>
                    <div className="icon">
                      <IoCheckmark />
                    </div>
                  </div>
                ) : (
                  ""
                );
              })}
            {myMissions.length <= 1 && <div className="empty"> No Data :/</div>}
          </div>
        </div>
        <div className="space"></div>
      </div>
    </>
  );
};

export default ProfileAbout;
