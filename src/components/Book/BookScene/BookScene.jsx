import { Canvas } from "@react-three/fiber";
import { CameraController } from "../CameraController";
import { Suspense, useRef, useState } from "react";
import { Book } from "../../../../public/models/Livre/Book";
import { Background } from "../Background";
import { PiArrowFatRightDuotone } from "react-icons/pi";
import { PiArrowFatLeftDuotone } from "react-icons/pi";

import "./BookScene.sass";

function BookScene() {
  const camera = useRef(null);
  const backgroundColors = useRef({
    colorA: "#d95430",
    colorB: "#333",
  });
  const begin = 2;
  const [currentPage, setCurrentPage] = useState(begin);
  const [playing, setPlaying] = useState(false);
  const pageNumber = 5; // with couv front & back

  const next = () => {
    if (!playing && currentPage + 1 <= pageNumber) setCurrentPage(currentPage + 1);
  };

  const previous = () => {
    if (!playing && currentPage - 1 >= begin) setCurrentPage(currentPage - 1);
  };

  return (
    <>
      <div id="canvas-container">
        <Suspense fallback={null}>
          <Canvas shadows camera={[100, window.innerWidth / window.innerHeight, 0.1, 100]}>
            <Background backgroundColors={backgroundColors} />
            <Book
              cameraControlRef={camera}
              countPage={pageNumber}
              targetPage={currentPage}
              setTargetPage={setCurrentPage}
              setPlaying={setPlaying}
            />
            <CameraController camera={camera} />
            <ambientLight />
          </Canvas>
        </Suspense>
        <div className="btn_container">
          <div className={`btn before ${currentPage !== begin ? "" : "disabled"}`} onClick={previous}>
            <PiArrowFatLeftDuotone />
          </div>
          <div className={`btn next ${currentPage !== pageNumber ? "" : "disabled"}`} onClick={next}>
            <PiArrowFatRightDuotone />
          </div>
        </div>
      </div>
    </>
  );
}

export default BookScene;
