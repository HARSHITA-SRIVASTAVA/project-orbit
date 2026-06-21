import OrbitLogo from "./OrbitLogo";

export default function Navbar() {
  return (
    <header className="border-b border-slate-200">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <OrbitLogo />

        <nav className="hidden items-center gap-8 md:flex">
          <a href="/" className="text-sm text-slate-600 hover:text-slate-900">
            Home
          </a>

          <a
            href="/engineering"
            className="text-sm text-slate-600 hover:text-slate-900"
          >
            Engineering
          </a>

          <a
            href="/experience"
            className="text-sm text-slate-600 hover:text-slate-900"
          >
            Experience
          </a>

          <a
            href="/milestones"
            className="text-sm text-slate-600 hover:text-slate-900"
          >
            Milestones
          </a>

          <a
            href="/contact"
            className="text-sm text-slate-600 hover:text-slate-900"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}