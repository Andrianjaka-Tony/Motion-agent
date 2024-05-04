import { useLenis } from "lenis/react";
import { useEffect, useState } from "react";

function useScrollToTop() {
  const [lenis, setLenis] = useState();

  useLenis((l) => {
    setLenis(l);
  });

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 0 });
    }

    const handleRefresh = () => {
      lenis.scrollTo(0, { duration: 0 });
    };
    window.addEventListener("beforeunload", handleRefresh);

    return () => {
      window.removeEventListener("beforeunload", handleRefresh);
    };
  }, [lenis]);
}

export default useScrollToTop;
