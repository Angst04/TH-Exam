import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  img?: React.ReactNode;
}

export const Card = ({ children, className, img }: CardProps) => {
  return (
    <motion.div
      className={`p-4 w-full max-w-2xl rounded-2xl flex items-center gap-4 ${className}`}
      style={{
        background: "rgba(38, 38, 38, 0.4)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(255, 255, 255, 0.15)",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.18)"
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <motion.div whileHover={{ scale: 1.05 }}>
        {img}
      </motion.div>
      <div className="flex flex-col gap-2">{children}</div>
    </motion.div>
  );
};