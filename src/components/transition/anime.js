export const transitionVariants = {
  initial: { scale: 1 },
  animate: {
    scale: 0,
    transition: {
      delay: 1,
    },
  },
  exit: {
    scale: 1,
    transition: {
      duration: 0,
    },
  },
};

export const cellVariants = () => ({
  initial: { scale: 1 },
  animate: (custom) => ({
    scale: 0,
    transition: {
      delay: Math.random() * 0.5 + (20 - custom) * 0.02,
      duration: 0,
    },
  }),
  exit: (custom) => ({
    scale: 1,
    transition: {
      delay: Math.random() * 0.5 + custom * 0.02,
      duration: 0,
    },
  }),
});
