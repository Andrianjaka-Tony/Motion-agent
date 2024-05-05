import React, { useState } from "react";
import ClientNav from "../client-nav";
import SOS from "../../sos";
import Sign from "../../Sign/Sign";

function ClientNavigation() {
  const [isSos, setSos] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      {isLogin && (
        <Sign
          closer={() => {
            setIsLogin(false);
          }}
        />
      )}
      <ClientNav setSos={setSos} setIsLogin={setIsLogin} />
      {isSos && <SOS setSos={setSos} />}
    </>
  );
}

export default ClientNavigation;
