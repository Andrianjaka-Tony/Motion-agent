import React, { useEffect, useState } from "react";
import Webcam from "react-webcam";
import { IoMdClose } from "react-icons/io";
import Loader from "../../Loader/Loader";
import { alaivoPost } from "../../../utils/Alaivo";
import "./WebCam.sass";

const videoConstraints = {
  width: 450,
  height: 800,
  facingMode: "user",
};

const WebCamModal = ({ closeModal = () => {} }) => {
  const webcamRef = React.useRef(null);
  const [intervalId, setIntervalId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorOn, setErrorOn] = useState(false);
  const [successOn, setSuccessOn] = useState(false);

  const capture = async () => {
    const idInterval = setTimeout(async () => {
      if (webcamRef.current) {
        const imageSrc = webcamRef.current.getScreenshot();
        if (imageSrc + "".indexOf(",") === -1) return;
        const imgBase64 = imageSrc.split(",")[1];
        // sending //
        let res = await alaivoPost("auth/login/f", JSON.stringify({ photo: imgBase64 })).catch(() => {});
        if (res)
          if (res.access_token === undefined) {
            setErrorOn(true);
            setTimeout(() => {
              setErrorOn(false);
            }, 2500);
            capture();
          } else {
            // authetifier
            setSuccessOn(true);
          }
        else {
          setErrorOn(true);
          setTimeout(() => {
            setErrorOn(false);
            capture();
          }, 2500);
        }
      }
    }, 1000);
    setIntervalId(idInterval);
  };

  const stopLoading = () => {
    setLoading(false);
  };

  useEffect(() => {
    capture();
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div className="container_webCam" style={{ width: videoConstraints.width + "px", height: videoConstraints.height + "px" }}>
      <div className="inner_container" style={{ width: videoConstraints.width + "px", height: videoConstraints.height + "px" }}>
        <div className="closer icon_web" onClick={closeModal}>
          <IoMdClose />
        </div>
        {loading && (
          <div className="loader_Container_web">
            <Loader white size="6rem" weigth="0.4rem" />
          </div>
        )}

        <div className={`message ${errorOn ? "error" : successOn ? "good" : ""}`}>
          {successOn ? "Connecter !! " : "Photo invalide"}
        </div>
        <Webcam
          onUserMedia={stopLoading}
          audio={false}
          mirrored
          height={videoConstraints.height}
          screenshotFormat="image/jpeg"
          width={videoConstraints.width}
          ref={webcamRef}
          videoConstraints={videoConstraints}
        />
      </div>
      <div className="line_scanner"></div>
      <div className="text_helper">Veuillez montrer votre visage</div>
    </div>
  );
};

export default WebCamModal;
