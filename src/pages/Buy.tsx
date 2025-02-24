import { ChevronDown } from "lucide-react";
import { Button } from "../components/Button";

export const Buy = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-2xl!">Покупка мощности</h1>

      <div
        style={{
          background: "linear-gradient(135deg, #262626, #5D6577)",
          backgroundSize: "200% 200%",
          animation: "gradientFlow 6s ease infinite",
        }}
        className="bg-white rounded-lg w-90 py-3 flex flex-col gap-4 pl-5"
      >
        <p className="text-lg">Получаете THC</p>
        <input
          placeholder="Введите количество"
        ></input>
        <p className="text-xs opacity-50">
          Вы получаете токен, который дает Вам возможность майнить Bitcoin
        </p>
      </div>

      <ChevronDown />

      <div
        style={{
          background: "linear-gradient(135deg, #262626, #5D6577)",
          backgroundSize: "200% 200%",
          animation: "gradientFlow 6s ease infinite",
        }}
        className="bg-white rounded-lg w-90 py-3 flex flex-col gap-4 pl-5"
      >
        <p className="text-lg">Отдаете</p>
        <p className="text-2xl">0</p>
        <p className="text-xs opacity-50">Ваш баланс: 0</p>
        <p className="text-xs opacity-50">
          *Для проведения транзакции необходимо иметь минимум 0.05 TON на
          кошельке для оплаты комиссии сети
        </p>
      </div>
      <Button className="bg-[#0061FF]!" text="Купить" />
    </div>
  );
};
