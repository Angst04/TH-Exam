import { useState } from "react";
import { Card } from "./Card";
import { motion } from "framer-motion";

export const Calculator = () => {
  const tg_haptic = window.Telegram.WebApp.HapticFeedback;

  const [thcAmount, setThcAmount] = useState(28);
  const [btcRate, setBtcRate] = useState(911654);

  const usdtAmount = thcAmount * btcRate;
  const inAmount = thcAmount * btcRate * 12;
  const btcAmount = thcAmount / btcRate;

  return (
    <motion.div className="min-h-screen flex flex-col items-center justify-center gap-6">
      <p className="text-2xl">Калькулятор доходности</p>

      <div
        style={{
          background: "linear-gradient(135deg, #262626, #5D6577)",
          backgroundSize: "200% 200%",
          animation: "gradientFlow 8s ease infinite",
        }}
        className="bg-white rounded-lg w-80 py-3 flex flex-col gap-4 pl-5"
      >
        <p className="text-lg">Ежемесячная прибыль 40%</p>
        <p className="text-md">${usdtAmount}</p>
        <p className="text-md">{btcAmount} BTC</p>
      </div>

      <Card
        img={
          <img
            src="/img/icons/hash2cash.gif"
            className="h-10 w-10"
            alt="coin"
          />
        }
        className="w-80!"
      >
        <p className="text-lg">Сумма вложений в монету:</p>
        <p className="text-xl">${inAmount}</p>
      </Card>

      <div className="flex justify-between items-center flex-col gap-4 w-full">
        <p className="text-md">Количество монет: {thcAmount} THC</p>
        <input
          type="range"
          min={0}
          max={100}
          value={thcAmount}
          onChange={(e) => {
            setThcAmount(Number(e.target.value));
            tg_haptic.selectionChanged();
          }}
          className="custom-range"
        />

        <p className="text-md">Курс BTC: ${btcRate}</p>
        <input
          type="range"
          min={110000}
          max={1000000}
          value={btcRate}
          onChange={(e) => {
            setBtcRate(Number(e.target.value));
            tg_haptic.selectionChanged();
          }}
          className="custom-range"
        />

        <p>Электричество 0.08$/кВт</p>
      </div>
    </motion.div>
  );
};
