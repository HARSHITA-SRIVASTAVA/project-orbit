type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  const baseStyles =
  "inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-semibold transition-all duration-200";

  const variants = {
    primary:
        "bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-600/20 hover:shadow-xl hover:shadow-blue-600/25",
    secondary:
        "border border-slate-300 bg-white text-slate-900 hover:border-blue-300 hover:bg-blue-50",
    };

  return (
    <button className={`${baseStyles} ${variants[variant]}`}>
      {children}
    </button>
  );
}