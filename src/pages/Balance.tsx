import { motion } from "framer-motion";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { ClockIcon, CurrencyIcon, InfoIcon, TrendingUp } from "lucide-react";
import { Particles } from "../components/Particles";
import { Header } from "../components/Header";

export const Balance = () => {
  const tg_haptic = window.Telegram.WebApp.HapticFeedback;

  return (
    <motion.div className="min-h-screen flex flex-col items-center justify-center gap-4 p-4 mb-10">
      <motion.div
        className="relative rounded-2xl w-full max-w-2xl p-6 flex flex-col backdrop-blur-xl border"
        style={{
          backgroundColor: "rgba(38, 38, 38, 0.5)",
          borderColor: "rgba(255, 255, 255, 0.15)",
        }}
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <motion.div className="flex justify-between items-center mb-4">
          <Header>Доходность</Header>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {[
            { icon: <ClockIcon />, color: "green", title: "24 часа" },
            { icon: <TrendingUp />, color: "blue", title: "Всего" },
            { icon: <CurrencyIcon />, color: "purple", title: "В USDT" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="p-4 rounded-xl bg-gray-800/20 backdrop-blur-sm border border-gray-700/30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <motion.div
                  className={`w-6 h-6 flex items-center justify-center text-${item.color}-400`}
                >
                  {item.icon}
                </motion.div>
                <span className="text-sm text-gray-400">{item.title}</span>
              </div>
              <p
                className={`text-2xl font-semibold text-${item.color}-400 mb-1`}
              >
                {index === 2 ? "0 USDT" : "0.000 BTC"}
              </p>
              <p className="text-xs text-gray-400/80">
                {index === 2 ? "Курс: 94023.89 BTC/$" : "≈ 0.00 USD"}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex justify-end gap-4 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.button
            className="px-5 py-2.5 rounded-xl bg-gray-700/40 hover:bg-gray-700/60 transition-all text-gray-300 flex items-center gap-2 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.8 }}
            onClick={() => {
              tg_haptic.impactOccurred("soft");
            }}
          >
            <InfoIcon className="w-4 h-4 group-hover:rotate-180 transition-transform" />
            Подробнее
          </motion.button>

          <motion.button
            className="px-5 py-2.5 rounded-xl bg-blue-600/50 hover:bg-blue-600/70 transition-all text-blue-100 flex items-center gap-2"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px -5px rgba(0, 123, 255, 0.3)",
            }}
            whileTap={{ scale: 0.8 }}
            onClick={() => {
              tg_haptic.impactOccurred("soft");
            }}
          >
            Вывести
          </motion.button>
        </motion.div>

        <Particles />
      </motion.div>

      <Card
        img={
          <motion.img
            src="/img/icons/hash2cash.gif"
            className="h-12 w-12 rounded-lg"
            alt="coin"
          />
        }
      >
        <motion.p className="text-lg font-medium text-gray-100">
          Ваш хешрейт: <span className="text-red-300">0.0000 TH</span>
        </motion.p>
        <motion.p className="text-sm text-gray-400/80">
          1 токен hash2cash дает 1TH
        </motion.p>
      </Card>

      <motion.div className="w-full max-w-2xl">
        <Button
          className="bg-blue-600/80 hover:bg-blue-600/90 transition-[background]"
          text="Увеличить хешрейт"
        />
      </motion.div>
    </motion.div>
  );
};
