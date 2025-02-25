import { motion } from "framer-motion";

export const Input = ({ placeholder }: { placeholder?: string }) => {
  return (
    <motion.input
      placeholder={placeholder || ''}
      className="w-full bg-gray-800/30 border border-gray-700/50 rounded-lg px-4 py-3 text-gray-100 placeholder-gray-400/60 focus:outline-none focus:ring-2 focus:ring-gray-500/50 transition-all"
      style={{ backdropFilter: "blur(12px)" }}
      whileFocus={{
        boxShadow: "0 0 25px -10px rgba(255,255,255,0.1)",
        scale: 1.02,
      }}
    />
  );
};
