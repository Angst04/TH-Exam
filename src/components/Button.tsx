import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  text: string;
  icon?: ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Button = ({ text, icon, className, onClick }: ButtonProps) => {
  const tg_haptic = window.Telegram.WebApp.HapticFeedback;

  return (
    <motion.button
      onClick={() => {
        tg_haptic.impactOccurred("medium");
        onClick?.();
      }}
      className={`relative w-full overflow-hidden w-90 py-3 rounded-lg text-xl cursor-pointer flex items-center justify-center gap-3 ${className}`}
      style={{
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        background: "linear-gradient(120deg, rgba(38, 38, 38, 0.3), rgba(38, 38, 38, 0.1))",
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 25px -5px rgba(255, 255, 255, 0.1)",
      }}
      whileTap={{
        scale: 0.95,
        background: "linear-gradient(120deg, rgba(38, 38, 38, 0.4), rgba(38, 38, 38, 0.2))",
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
    >
      <motion.div
        className="absolute inset-0 -z-10 opacity-50"
        initial={{ x: -100 }}
        animate={{ x: "100%" }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "linear",
        }}
        style={{
          background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.05), transparent)",
        }}
      />

      <motion.span className="text-white/90 flex items-center gap-2">
        {icon && (
          <motion.span
            className="inline-block"
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {icon}
          </motion.span>
        )}
        {text}
      </motion.span>
    </motion.button>
  );
};