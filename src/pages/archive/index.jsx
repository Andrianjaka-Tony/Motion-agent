import React from "react";
import useScrollToTop from "../../hooks/useScrollToTop";
import BookArchive from "../../components/Book";
import ReactLenis from "lenis/react";
import Transition from "../../components/transition";

const Archive = () => {
  useScrollToTop();

  return (
    <>
      <ReactLenis root options={{ duration: 2.4 }}>
        <Transition />

        <div className="archive-container">
          <BookArchive />
        </div>
      </ReactLenis>
    </>
  );
};

export default Archive;
