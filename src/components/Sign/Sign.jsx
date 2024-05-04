import React, { useEffect, useState } from "react";
import FormSignIn from "./FormSignIn/FormSignIn";
import { AnimatePresence, motion } from "framer-motion";
import { getUserPresp } from "../../hooks/useIdentity";
import { useNavigate } from "react-router-dom";
import { loginVariants } from "./variants";
import "./Sign.sass";

const Sign = () => {
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
      <div className="container_modal_sign">
        <motion.div id="sign_container" variants={loginVariants} initial="initial" animate="animate" exit="exit">
          <AnimatePresence>
            <FormSignIn handleSign={handleSign} /> :
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  );
};

export default Sign;
