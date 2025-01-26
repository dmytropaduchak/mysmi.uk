import { useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion"
import { FC, memo, ReactNode } from "react";

interface Props {
  children: ReactNode;
  direction: "left" | "right";
}

const Animation: FC<Props> = memo(({ children, direction }) => {
  const theme = useTheme();
  const mdMatch = useMediaQuery(theme.breakpoints.down('md'));
  if (mdMatch) {
    return children;
  }
  return (
    <motion.div
      initial={{
        x: direction === "left" ? -200 : 200,
        opacity: 0,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      exit={{
        x: direction === "left" ? -200 : 200,
        opacity: 0,
      }}
      transition={{
        duration: 0.8,
      }}
      viewport={{
        once: false,
        amount: 0.5,
      }}
      style={{
        overflow: "hidden",
      }}
    >{children}</motion.div>
  )
});

Animation.displayName = "Animation";
export default Animation;