import { motion } from "framer-motion";
import { Wallet, ArrowUpRight } from "lucide-react";
import { Header } from "../components/Header";

export const Settings = () => {
  return (
    <motion.div className="min-h-screen flex flex-col items-center justify-center gap-8 p-4">
      <Header>Настройки аккаунта</Header>

      <motion.div
        className="relative w-full max-w-md rounded-2xl p-6 backdrop-blur-xl border border-gray-700/30"
        style={{
          background:
            "linear-gradient(145deg, rgba(38, 38, 38, 0.5), rgba(58, 58, 58, 0.3))",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.18)",
        }}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-blue-400/10 rounded-lg">
            <Wallet className="w-6 h-6 text-blue-400" />
          </div>
          <h2 className="text-xl font-semibold text-gray-100">
            BTC кошелек для выплат
          </h2>
        </div>

        <motion.div className="relative" whileHover={{ scale: 1.02 }}>
          <motion.input
            placeholder="Введите кошелек"
            className="w-full bg-gray-800/30 border border-gray-700/50 rounded-lg px-4 py-3 text-gray-100 placeholder-gray-400/60 focus:outline-none focus:ring-2 focus:ring-gray-500/50 transition-all"
            style={{ backdropFilter: "blur(12px)" }}
            whileFocus={{
              boxShadow: "0 0 25px -10px rgba(255,255,255,0.1)",
              scale: 1.02,
            }}
          />
        </motion.div>
      </motion.div>

      <motion.a
        href="#"
        className="flex items-center gap-2 text-gray-400 hover:text-gray-200 transition-colors group"
      >
        <span>Политика конфиденциальности</span>
        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
      </motion.a>

      <div className="fixed inset-0 -z-50 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" />
    </motion.div>
  );
};
