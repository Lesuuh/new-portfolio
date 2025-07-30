import { useInView } from "react-intersection-observer";
import { motion } from "motion/react";

type AnimateCardProps = {
  children: React.ReactNode;
};
const AnimateCard = ({ children }: AnimateCardProps) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default AnimateCard;
