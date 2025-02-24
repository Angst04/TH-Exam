interface CardProps {
  children: React.ReactNode;
  className?: string;
  img?: React.ReactNode;
}

export const Card = ({ children, className, img }: CardProps) => {
  return (
    <div
      className={`pl-3 bg-[#262626] w-90 py-2 rounded-lg text-white text-xl flex items-center ${className}`}
      style={{
        background: "rgba(38, 38, 38, 0.3)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
      }}
    >
      {img}
      <div className="pl-2 flex flex-col justify-start gap-1">{children}</div>
    </div>
  );
};
