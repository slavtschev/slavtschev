import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  isInView: boolean;
}

export function AnimatedText({
  children,
  className = "",
  delay = 0,
  isInView,
}: AnimatedTextProps) {
  // Handle string children
  if (typeof children === "string") {
    const lines = children.split("\n").filter((line) => line.length > 0);

    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
          delayChildren: delay,
        },
      },
    };

    const lineVariants = {
      hidden: { opacity: 0, y: 10 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          ease: [0.25, 0.46, 0.45, 0.94],
        },
      },
    };

    return (
      <motion.div
        className={className}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {lines.map((line, index) => (
          <motion.div key={index} variants={lineVariants}>
            {line}
          </motion.div>
        ))}
      </motion.div>
    );
  }

  // Handle JSX children (like text with <br /> tags)
  if (Array.isArray(children)) {
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
          delayChildren: delay,
        },
      },
    };

    const itemVariants = {
      hidden: { opacity: 0, y: 10 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          ease: [0.25, 0.46, 0.45, 0.94],
        },
      },
    };

    return (
      <motion.div
        className={className}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {children.map((child, index) => {
          if (child?.type === "br") {
            return <br key={index} />;
          }
          return (
            <motion.span key={index} variants={itemVariants} className="block">
              {child}
            </motion.span>
          );
        })}
      </motion.div>
    );
  }

  // Fallback for other React elements
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay }}
    >
      {children}
    </motion.div>
  );
}
