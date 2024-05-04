import { textEase } from "../../helpers/ease-helper";

export const containerVariants = {
  animate: ({ delayChildren, staggerChildren, staggerDirection }) => ({
    transition: {
      delayChildren,
      staggerChildren,
      staggerDirection,
    },
  }),
};

export const wordVariants = {
  initial: {
    y: "100%",
  },
  animate: ({ duration }) => ({
    y: 0,
    transition: {
      duration,
      ease: textEase,
    },
  }),
};
