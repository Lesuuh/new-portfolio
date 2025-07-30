import { motion, useAnimation } from "motion/react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

type ScrollProps = {
  children: React.ReactNode;
};

const ScrollReveal = ({ children }: ScrollProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay: 0.2 },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
