import { Button } from "../components/Button";
import { CircleHelp, Calculator as CalcIcon } from "lucide-react";
import { Card } from "../components/Card";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Calculator } from "../components/Calculator";

interface User {
  name: string;
  last_name: string;
  img: string;
}

export const Home = () => {
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const tg = window.Telegram.WebApp;
  const tg_haptic = tg.HapticFeedback;

  useEffect(() => {
    tg.ready();
    if (tg.initDataUnsafe.user) {
      const { first_name, last_name, photo_url } = tg.initDataUnsafe.user;
      setUser({ name: first_name, last_name: last_name || "", img: photo_url });
    }
  }, []);

  return (
    <motion.div className="min-h-screen flex flex-col items-center justify-center gap-6 p-4 pt-8">
      <motion.div
        className="flex items-center gap-4"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
      >
        <motion.img
          className="h-14 w-14 rounded-full border-2 border-gray-600/50"
          src={user?.img}
        />
        <p className="text-2xl font-medium text-gray-100">
          {user?.name} {user?.last_name}
        </p>
      </motion.div>

      <div className="w-full max-w-md space-y-4">
        <Card
          img={
            <motion.img
              src="/img/icons/hash2cash.gif"
              className="h-12 w-12 rounded-lg"
              alt="coin"
            />
          }
        >
          <motion.p className="text-xl font-bold text-gray-100">0 THC</motion.p>
          <motion.p className="text-sm text-gray-400">Ваш баланс</motion.p>
        </Card>

        <Card>
          <motion.p className="text-xl font-bold text-blue-400">
            $94023.89
          </motion.p>
          <motion.p className="text-sm text-gray-400">КУРС BITCOIN</motion.p>
        </Card>

        <Card>
          <motion.p className="text-xl font-bold text-green-400">
            0.0000000000 BTC
          </motion.p>
          <motion.p className="text-sm text-gray-400 mb-2">
            Прибыль за 24 часа
          </motion.p>
          <motion.a
            href="#"
            className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
          >
            Подробнее
          </motion.a>
        </Card>
      </div>

      <motion.div className="w-full max-w-md" whileHover={{ scale: 1.02 }}>
        <div
          onClick={() => {
            setIsCalculatorOpen(true);
            tg_haptic.impactOccurred("medium");
          }}
          className="bg-gray-800/50 backdrop-blur-sm py-4 rounded-xl text-gray-100 text-lg cursor-pointer flex items-center justify-center gap-3 hover:bg-gray-800/70 transition-colors border border-gray-700/30"
        >
          <CalcIcon size={20} className="text-blue-400" />
          <span>Калькулятор</span>
        </div>
      </motion.div>

      <motion.div className="w-full max-w-md">
        <Button
          className="w-full bg-blue-600/80 hover:bg-blue-600/90"
          icon={
            <motion.img
              src="/img/icons/ton-icon.svg"
              alt="TON"
              className="w-6 h-6"
            />
          }
          text="Connect Wallet"
        />
      </motion.div>

      <motion.a
        className="text-gray-400 hover:text-gray-300 transition-colors flex items-center gap-2"
        href="https://hash2cash.io/"
      >
        <CircleHelp size={16} />
        <span className="text-sm">Как это работает?</span>
      </motion.a>

      <AnimatePresence>
        {isCalculatorOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed inset-0 bg-gray-900/80 backdrop-blur-xl flex items-center justify-center p-4"
          >
            <Calculator onClose={() => setIsCalculatorOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
