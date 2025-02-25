import { motion } from "framer-motion";

export const Header = ({children} : {children: React.ReactNode}) => {
  return (
    <motion.h1
      className="text-3xl! font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
      initial={{ y: -20 }}
      animate={{ y: 0 }}
    >
      {children}
    </motion.h1>
  );
};
