import { Button } from "../components/Button";
import { CircleHelp, Calculator as CalcIcon } from "lucide-react";
import { Card } from "../components/Card";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ClickAwayListener from "react-click-away-listener";
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
    <div className="min-h-screen flex flex-col items-center justify-center gap-6">
      <div className="flex items-center">
        <img className="h-14 w-14 rounded-full" src={user?.img} />
        <p className="ml-3 text-2xl">
          {user?.name} {user?.last_name}
        </p>
      </div>
      <Card
        img={
          <img
            src="/img/icons/hash2cash.gif"
            className="h-10 w-10"
            alt="coin"
          />
        }
      >
        <p className="text-lg">0 THС</p>
        <p className="text-sm">Ваш баланс</p>
      </Card>
      <Card>
        <p className="text-lg">$94023.89</p>
        <p className="text-sm">КУРС BITCOIN</p>
      </Card>
      <Card>
        <p className="text-lg">0.0000000000 BTC</p>
        <p className="text-sm opacity-50">Прибыль за 24 часа</p>
        <a href="#" className="text-sm underline!">
          Подробнее
        </a>
      </Card>
      <div
        onClick={() => {
          setIsCalculatorOpen(true);
          tg_haptic.impactOccurred("medium");
        }}
        className="bg-[#262626] w-90 py-3 rounded-full text-white text-xl cursor-pointer flex items-center justify-center gap-3 hover:brightness-90 transition duration-300"
      >
        <CalcIcon size={20} />
        Калькулятор
      </div>
      <Button
        className="bg-[#0061FF]!"
        icon={
          <img src="/img/icons/ton-icon.svg" alt="TON" className="w-6 h-6" />
        }
        text="Connect Wallet"
      />
      <a
        className="underline! flex align-center justify-center gap-2"
        href="https://hash2cash.io/"
      >
        <CircleHelp size={14} /> Как это работает?
      </a>

      <AnimatePresence>
        {isCalculatorOpen && (
          <ClickAwayListener onClickAway={() => setIsCalculatorOpen(false)}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="rounded-lg bg-[#262626] flex flex-col items-center justify-center gap-4"
              style={{
                position: "absolute",
                top: "10%",
                width: "80%",
                height: "65%",
              }}
            >
              <Calculator />
            </motion.div>
          </ClickAwayListener>
        )}
      </AnimatePresence>
    </div>
  );
};
