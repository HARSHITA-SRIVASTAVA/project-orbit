export default function OrbitLogo() {
  return (
<div className="flex items-center gap-3 group select-none cursor-pointer">
      {/* Responsive Wrapper: 
        Scales from h-10 w-10 on mobile (sm:) up to h-12 w-12 on desktop.
      */}
      

      <div className="leading-none">
        <p className="text-sm font-black tracking-[0.18em] text-slate-950">
          PROJECT <span className="text-blue-600">ORBIT</span>
        </p>

        <p className="mt-1 text-[11px] font-medium tracking-[0.25em] text-slate-500">
          MISSION CONTROL
        </p>
      </div>
    </div>
  );
}