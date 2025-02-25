import { ChevronDown } from "lucide-react";
import { Button } from "../components/Button";
import { motion } from "framer-motion";
import { Particles } from "../components/Particles";
import { Header } from "../components/Header";
import { Input } from "../components/Input";

export const Buy = () => {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center gap-4 p-4 mb-20"
    >
      <Header>Покупка мощности</Header>

      <motion.div
        className="relative rounded-2xl w-full max-w-md p-6 flex flex-col gap-5 backdrop-blur-xl border"
        style={{
          backgroundColor: "rgba(38, 38, 38, 0.4)",
          borderColor: "rgba(255, 255, 255, 0.15)",
        }}
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4, type: "spring" }}
      >
        <motion.p
          className="text-xl font-semibold text-gray-100"
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          Получаете THC
        </motion.p>

        <motion.div className="relative">
          <Input placeholder="Введите количество" />
        </motion.div>

        <motion.p
          className="text-sm text-gray-400 leading-relaxed"
        >
          Вы получаете токен, который дает Вам возможность майнить Bitcoin
        </motion.p>

        <Particles />
      </motion.div>

      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <ChevronDown className="text-gray-400" size={28} />
      </motion.div>

      <motion.div
        className="relative w-full max-w-md p-6 rounded-2xl backdrop-blur-xl border"
        style={{
          backgroundColor: "rgba(38, 38, 38, 0.4)",
          borderColor: "rgba(255, 255, 255, 0.15)",
        }}
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, type: "spring" }}
      >
        <div className="flex flex-col gap-3">
          <motion.p
            className="text-lg text-gray-300 font-medium"
          >
            Отдаете
          </motion.p>

          <motion.p className="text-2xl font-bold text-gray-100">0</motion.p>

          <div className="space-y-2">
            <p className="text-xs text-gray-400">Ваш баланс: 0</p>
            <p className="text-xs text-gray-400/60 leading-relaxed">
              *Для проведения транзакции необходимо иметь минимум 0.05 TON на
              кошельке для оплаты комиссии сети
            </p>
          </div>
        </div>

        <Particles />
      </motion.div>

      <motion.div
        className="mt-6 w-full max-w-md"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <Button
          className="w-full bg-blue-600/80 hover:bg-blue-600/90 transition-[background]"
          text="Купить"
        />
      </motion.div>
    </motion.div>
  );
};
