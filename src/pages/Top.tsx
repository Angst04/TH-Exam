import { Card } from "../components/Card";

export const Top = () => {
  const miners = [
    { username: "streaxz", btc: 40, thc: 0 },
    { username: "MikhailTra", btc: 20.0013, thc: 0 },
    { username: "Paulland", btc: 19.9995, thc: 0 },
    { username: "vyvozchenko", btc: 7, thc: 0 },
    { username: "kguzovskiy", btc: 7, thc: 0 },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6">
      <img src="/img/icons/hash2cash.png" className="h-40 w-40" alt="coin" />
      <h1 className="text-2xl!">Топ майнеров</h1>
      <Card className="flex flex-col  py-3">
        {miners.map((miner, index) => (
          <div key={index} className="flex items-center justify-between my-2">
            <img src="/img/avatar.svg" className="h-10 w-10 rounded-full"></img>
            <p className="text-lg ml-3 flex-grow">{miner.username}</p>
            <div className="flex gap-4 items-center ml-8">
              <p className="text-sm">{miner.btc} BTC</p>
              <p className="text-sm">{miner.thc} THC</p>
            </div>
          </div>
        ))}
      </Card>
    </div>
  );
};
