const statusItems = [
  {
    label: "Status",
    value: "Active",
    accent: "text-green-600",
    icon: "↯",
  },
  {
    label: "Primary Focus",
    value: "Software Engineering",
    accent: "text-purple-600",
    icon: "◎",
  },
  {
    label: "Current Orbit",
    value: "Backend Systems · MERN Development",
    accent: "text-blue-600",
    icon: "</>",
  },
  {
    label: "Latest Mission",
    value: "Building Project Orbit",
    accent: "text-orange-500",
    icon: "↗",
  },
];

export default function OrbitStatus() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-blue-100 bg-white p-6 shadow-[0_24px_80px_rgba(37,99,235,0.08)]">
      <div className="absolute -right-16 top-10 h-48 w-48 rounded-full bg-blue-100/60 blur-3xl" />
      <div className="absolute -right-10 top-14 h-40 w-40 rounded-full border border-dashed border-blue-200" />
      <div className="absolute -right-2 top-24 h-24 w-24 rounded-full bg-purple-100/70 blur-xl" />

      <div className="relative">
        <p className="text-sm font-bold uppercase tracking-[0.35em] text-blue-600">
          Orbit Status
        </p>

        <div className="mt-3 divide-y divide-slate-100">
          {statusItems.map((item) => (
            <div key={item.label} className="flex gap-5 py-3 first:pt-0 last:pb-0">
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-slate-50 text-base font-bold ${item.accent}`}
              >
                {item.icon}
              </div>

              <div>
                <p className="text-sm text-slate-500">{item.label}</p>
                <p className={`mt-1 text-lg font-semibold ${item.label === "Status" ? item.accent : "text-slate-900"}`}>
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}