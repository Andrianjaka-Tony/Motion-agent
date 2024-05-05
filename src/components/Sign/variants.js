export const loginVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      opacity: {
        delay: 0.18,
      },
      duration: 0.18,
      delayChildren: 1,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
  },
};

export const formSignVariants = {
  initial: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      opacity: {
        delay: 0.18,
      },
      duration: 0.18,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};
