import { Button } from "../components/Button";
import { Card } from "../components/Card";

export const Balance = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="text-2xl!">Доход с майнинга</h1>

      <div
        style={{
          background: "linear-gradient(135deg, #262626, #5D6577, #262626)",
          backgroundSize: "200% 200%",
          animation: "gradientFlow 10s ease infinite",
        }}
        className="bg-white rounded-lg w-90 py-3 flex flex-col gap-4 pl-5"
      >
        <div>
          <p className="text-lg">0.0000000000 BTC</p>
          <p className="text-sm opacity-50">Прибыль за 24 часа</p>
        </div>

        <div>
          <p className="text-lg">0.0000000000 BTC</p>
          <p className="text-sm opacity-50">Общий совокупный доход</p>
        </div>

        <div>
          <p className="text-lg">0 USDT</p>
          <p className="text-sm opacity-50">Доход по курсу 94023.89 BTC/$</p>
        </div>

        <div className="underline flex justify-between">
          <a className="block" href="#">
            Подробнее
          </a>
          <a className="block mr-5" href="#">
            Вывести
          </a>
        </div>
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
        <p className="text-lg">Ваш хешрейт: 0.0000 TH в BTC</p>
        <p className="text-sm opacity-50">1 токен hash2cash дает 1TH</p>
      </Card>

      <Button className="bg-[#0061FF]!" text="Увеличить хешрейт" />
    </div>
  );
};
