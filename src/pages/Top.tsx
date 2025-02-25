import { motion, AnimatePresence } from "framer-motion";
import { Card } from "../components/Card";
import { Medal, Bitcoin, Hash } from "lucide-react";
import { Header } from "../components/Header";

export const Top = () => {
  const miners = [
    { username: "streaxz", btc: 40, thc: 0 },
    { username: "MikhailTra", btc: 20.0013, thc: 0 },
    { username: "Paulland", btc: 19.9995, thc: 0 },
    { username: "vyvozchenko", btc: 7, thc: 0 },
    { username: "kguzovskiy", btc: 7, thc: 0 },
  ];

  return (
    <motion.div className="min-h-screen flex flex-col items-center justify-center gap-6 p-4">
      <motion.img
        src="/img/icons/hash2cash.png"
        className="h-32 w-32 mb-6 border-blue-400/20"
        alt="coin"
      />

      <Header>Топ майнеров</Header>

      <Card className="w-full max-w-md p-4 backdrop-blur-xl border border-gray-700/30">
        <AnimatePresence>
          {miners.map((miner, index) => (
            <motion.div
              key={miner.username}
              className="py-3 px-4 rounded-lg hover:bg-gray-800/30 transition-colors"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4">
                <div className="relative">
                  {index < 3 && (
                    <div className="absolute -top-2 -left-2">
                      <Medal
                        className={`w-5 h-5 ${
                          index === 0
                            ? "text-yellow-400"
                            : index === 1
                            ? "text-gray-300"
                            : "text-amber-600"
                        }`}
                      />
                    </div>
                  )}
                  <img
                    src="/img/avatar.svg"
                    className="h-10 w-10 rounded-full border-2 border-blue-400/30"
                    alt={miner.username}
                  />
                </div>

                <div>
                  <p className="font-medium text-gray-100">{miner.username}</p>
                  <p className="text-xs text-gray-400">Rank #{index + 1}</p>
                </div>

                <div className="flex flex-col items-end gap-1">
                  <div className="flex items-center gap-2">
                    <Bitcoin className="w-4 h-4 text-amber-400" />
                    <span className="text-sm font-medium text-amber-400">
                      {miner.btc.toFixed(4)} BTC
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Hash className="w-4 h-4 text-blue-400" />
                    <span className="text-sm font-medium text-blue-400">
                      {miner.thc} THC
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </Card>
    </motion.div>
  );
};
