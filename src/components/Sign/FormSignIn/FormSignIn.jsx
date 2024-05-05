import React, { useState } from "react";
import LogoDefault from "../../../assets/svg/LogoDefault";
import RowInput from "../RowInput/RowInput";
import Divider from "../Divider/Divider";
import ButtonLogo from "../ButtonLogo/ButtonLogo";
import useForm from "../../../hooks/useForm";
import { motion } from "framer-motion";
import { formSignVariants } from "../variants";
import WebCamModal from "../WebCam/WebCam";
import { RiVoiceRecognitionFill } from "react-icons/ri";
import { alaivoPost } from "../../../utils/Alaivo";

import "./FormSignIn.sass";

const FormSignIn = ({ handleSign = () => {} }) => {
  const { formData, handleInputForm } = useForm();
  const [openFacialRecognition, setOpenFacialRecognition] = useState(false);

  const [errorOn, setErrorOn] = useState(false);
  const [successOn, setSuccessOn] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await alaivoPost("auth/login/s", JSON.stringify({ code_name: formData.email, password: formData.password })).catch(
      () => {}
    );
    console.log(res);
    if (res)
      if (res.access_token === undefined) {
        setErrorOn(true);
        setTimeout(() => {
          setErrorOn(false);
        }, 2500);
      } else {
        // authetifier
        window.localStorage.setItem("motion-user", res.access_token);
        setSuccessOn(true);
        window.location.reload();
      }
    else {
      setErrorOn(true);
      setTimeout(() => {
        setErrorOn(false);
      }, 2500);
    }
  };
  const handleFacialRecognition = () => {
    setOpenFacialRecognition(!openFacialRecognition);
  };

  return (
    <motion.div className="sign_in_form" variants={formSignVariants} initial="initial" animate="animate" exit={"exit"}>
      <div className="logo">
        <LogoDefault />
      </div>
      <div className={`message ${errorOn ? "error" : successOn ? "good" : ""}`}>
        {successOn ? "Connecter !! " : "Nom de code ou mot de passe incorrect"}
      </div>
      <div className="title">Se connecter</div>
      <div className="subtitle">Let's dive with us in this incredible journey.</div>
      <form action="" method="post" onSubmit={handleSubmit}>
        <RowInput title="Nom de code" type="text" id="email" name="email" fullWidth onChange={handleInputForm} />
        <RowInput title="Password" type="password" id="password" name="password" fullWidth onChange={handleInputForm} />
        <div className="button">
          <button>Login</button>
        </div>
      </form>
      <Divider text={"OR"} className={"divider_form"} />

      <ButtonLogo icon={<RiVoiceRecognitionFill />} text={"Reconnaissance faciale"} onClick={handleFacialRecognition} />
      {openFacialRecognition && <WebCamModal closeModal={handleFacialRecognition} />}
    </motion.div>
  );
};

export default FormSignIn;
