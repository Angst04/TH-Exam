import { ReactNode } from "react";

interface ButtonProps {
  text: string;
  icon?: ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Button = ({ text, icon, className }: ButtonProps) => {
  const tg_haptic = window.Telegram.WebApp.HapticFeedback;

  return (
    <button onClick={() => tg_haptic.impactOccurred("soft")} className={`bg-[#262626] w-90 py-3 rounded-full text-white text-xl cursor-pointer flex items-center justify-center gap-3 hover:brightness-90 transition duration-300 ${className}`}>
      {icon} {text}
    </button>
  );
};
