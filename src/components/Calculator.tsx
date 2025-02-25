import { useState } from "react";
import { Card } from "./Card";
import { motion } from "framer-motion";
import { Header } from "./Header";

export const Calculator = ({ onClose }: { onClose: () => void }) => {
  const tg_haptic = window.Telegram.WebApp.HapticFeedback;

  const [thcAmount, setThcAmount] = useState(28);
  const [btcRate, setBtcRate] = useState(911654);

  const usdtAmount = thcAmount * btcRate;
  const inAmount = thcAmount * btcRate * 12;
  const btcAmount = (thcAmount / btcRate).toFixed(8);

  const handleChange = (value: number, type: "thc" | "btc") => {
    tg_haptic.selectionChanged();
    if (type === "thc") setThcAmount(value);
    else setBtcRate(value);
  };

  return (
    <motion.div
      className="w-full max-w-md bg-gray-800/80 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/30"
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
    >
      <div className="flex justify-between items-center mb-6">
        <Header>Калькулятор доходности</Header>

        <motion.button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-200 text-4xl"
        >
          ✕
        </motion.button>
      </div>

      <motion.div
        className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl p-4 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <p className="text-gray-400 mb-2">Ежемесячная прибыль 40%</p>
        <div className="flex justify-between items-center">
          <p className="text-xl font-bold text-green-400">${usdtAmount}</p>
          <p className="text-xl font-bold text-blue-400">{btcAmount} BTC</p>
        </div>
      </motion.div>

      <Card className="mb-6">
        <div className="space-y-2">
          <p className="text-gray-400">Сумма вложений в монету:</p>
          <motion.p
            className="text-2xl font-bold text-purple-400"
            key={inAmount}
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
          >
            ${inAmount}
          </motion.p>
        </div>
      </Card>

      <div className="space-y-6">
        <div className="space-y-4">
          <div className="flex justify-between text-gray-400">
            <span>Количество монет:</span>
            <motion.span
              className="font-medium text-gray-100"
              key={thcAmount}
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
            >
              {thcAmount} THC
            </motion.span>
          </div>
          <motion.input
            type="range"
            min={0}
            max={100}
            value={thcAmount}
            onChange={(e) => handleChange(Number(e.target.value), "thc")}
            className="w-full range-thumb"
            whileHover={{ scale: 1.02 }}
          />
        </div>

        <div className="space-y-4">
          <div className="flex justify-between text-gray-400">
            <span>Курс BTC:</span>
            <motion.span
              className="font-medium text-gray-100"
              key={btcRate}
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
            >
              ${btcRate.toLocaleString()}
            </motion.span>
          </div>
          <motion.input
            type="range"
            min={110000}
            max={1000000}
            value={btcRate}
            onChange={(e) => handleChange(Number(e.target.value), "btc")}
            className="w-full range-thumb"
            whileHover={{ scale: 1.02 }}
          />
        </div>

        <div className="text-center text-gray-400">
          <p>Электричество 0.08$/кВт</p>
        </div>
      </div>
    </motion.div>
  );
};
