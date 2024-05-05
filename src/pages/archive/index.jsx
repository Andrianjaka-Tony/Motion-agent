import React from "react";
import useScrollToTop from "../../hooks/useScrollToTop";
import BookArchive from "../../components/Book";

const Archive = () => {
  useScrollToTop();

  return (
    <div className="archive-container">
      <BookArchive />
    </div>
  );
};

export default Archive;
