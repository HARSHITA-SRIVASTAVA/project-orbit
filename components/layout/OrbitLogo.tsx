export default function OrbitLogo() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative h-8 w-8">
        <div className="absolute inset-0 rounded-full border-2 border-blue-600" />

        <div className="absolute top-1/2 left-0 h-2 w-2 -translate-y-1/2 rounded-full bg-blue-600" />
      </div>

      <div>
        <p className="text-sm font-semibold tracking-wide text-slate-900">
          PROJECT ORBIT
        </p>

        <p className="text-xs text-slate-500">
          by Harshita Srivastava
        </p>
      </div>
    </div>
  );
}