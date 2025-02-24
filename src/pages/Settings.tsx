export const Settings = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="text-2xl!">Настройки аккаунта</h1>
      <div
        style={{
          background: "linear-gradient(135deg, #262626, #5D6577)",
          backgroundSize: "200% 200%",
          animation: "gradientFlow 8s ease infinite",
        }}
        className="bg-white rounded-lg w-90 py-8 flex flex-col gap-4 pl-5"
      >
        <p className="text-lg">BTC кошелек для выплат</p>
        <input placeholder="Введите кошелек"></input>
      </div>

      <a href="#" className="text-md underline!">
        Политика конфиденциальности
      </a>
    </div>
  );
};
