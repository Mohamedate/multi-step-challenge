import { motion } from "framer-motion";

const circleVar = {
  initial: {
    scale: 0,
    rotate: "360deg",
  },
  animate: {
    scale: 1.2,
    rotate: 0,
    transition: {
      duration: 0.3,
      ease: [0, 0.71, 0.2, 1.01],
      scale: {
        type: "spring",
        damping: 5,
        stiffness: 100,
        restDelta: 0.001,
      },
    },
  },
};

export default function CircleAnim({ children }) {
  return (
    <motion.div
      initial="initial" // Use "initial" variant for initial state
      animate="animate" // Animate to "animate" variant
      variants={circleVar}
    >
      {children}
    </motion.div>
  );
}
