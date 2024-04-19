import { motion } from "framer-motion";

const upVar = {
  initial: {
    y: 30,
    opacity: 0,
  },
  animate: (del) => {
    return {
      y: 0,
      opacity: 1,
      transition: {
        delay: del,
        duration: 0.4,
        ease: "easeInOut",
      },
    };
  },
  exit: {
    x: 30,
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

export default function UpAnim({ children, del = 0, classes = "" }) {
  return (
    <motion.div
      initial="initial" // Use "initial" variant for initial state
      animate="animate" // Animate to "animate" variant
      exit="exit"
      variants={upVar}
      custom={del}
      className={classes}
    >
      {children}
    </motion.div>
  );
}
