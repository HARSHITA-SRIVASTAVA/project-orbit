export default function OrbitStatus() {
  return (
    <div className="rounded-3xl border border-slate-200 p-8">
      <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
        Orbit Status
      </p>

      <div className="mt-8 space-y-6">
        <div>
          <p className="text-sm text-slate-500">Status</p>
          <p className="font-medium text-green-600">Active</p>
        </div>

        <div>
          <p className="text-sm text-slate-500">Primary Focus</p>
          <p className="font-medium text-slate-900">
            Software Engineering
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-500">Current Orbit</p>
          <p className="font-medium text-slate-900">
            Backend Systems · MERN Development
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-500">Latest Mission</p>
          <p className="font-medium text-slate-900">
           Building Project Orbit
          </p>
        </div>
      </div>
    </div>
  );
}