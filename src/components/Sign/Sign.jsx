import React, { useEffect, useState } from "react";
import FormSignIn from "./FormSignIn/FormSignIn";
import { AnimatePresence, motion } from "framer-motion";
import { getUserPresp } from "../../hooks/useIdentity";
import { useNavigate } from "react-router-dom";
import { loginVariants } from "./variants";
import Hider from "./Hider/Hider";
import { IoMdClose } from "react-icons/io";

import "./Sign.sass";

const Sign = ({ closer }) => {
  const [login, setLogin] = useState(true);
  const nav = useNavigate();

  useEffect(() => {
    if (getUserPresp() !== undefined) nav("/");
  }, []);

  const handleSign = () => {
    setLogin(!login);
  };

  return (
    <>
      <Hider classCss="glassy">
        <div className="container_modal_sign">
          <div className="closer" onClick={closer}>
            <IoMdClose />
          </div>
          <motion.div id="sign_container" variants={loginVariants} initial="initial" animate="animate" exit="exit">
            <AnimatePresence>
              <FormSignIn handleSign={handleSign} /> :
            </AnimatePresence>
          </motion.div>
        </div>
      </Hider>
    </>
  );
};

export default Sign;
