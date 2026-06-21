export default function OrbitLogo() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative h-10 w-10">
        {/* Orbit Ring */}
        <div className="absolute inset-0 rounded-full border-2 border-blue-600" />

        {/* Satellite */}
        <div className="absolute -top-1 right-1 h-2.5 w-2.5 rounded-full bg-blue-600" />
      </div>

      <div>
        <p className="text-sm font-bold tracking-wide text-slate-900">
          PROJECT ORBIT
        </p>

        <p className="text-xs text-slate-500">
          Mission Control
        </p>
      </div>
    </div>
  );
}