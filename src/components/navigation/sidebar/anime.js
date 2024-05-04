import { textEase } from "../../../helpers/ease-helper";

export const sidebarVariants = {
  initial: {
    clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
  },
  animate: {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    transition: {
      ease: textEase,
      duration: 1,
    },
  },
  exit: {
    clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
    transition: {
      ease: "easeOut",
      duration: 0.3,
    },
  },
};

export const itemsVariants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.95,
    },
  },
};

export const linksVariants = {
  animate: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.95,
    },
  },
};

export const linkVariants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};
