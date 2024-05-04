import React, { useState } from "react";
import ClientNav from "../client-nav";
import SOS from "../../sos";

function ClientNavigation() {
  const [isSos, setSos] = useState(false);

  return (
    <>
      <ClientNav setSos={setSos} />
      {isSos && <SOS />}
    </>
  );
}

export default ClientNavigation;
