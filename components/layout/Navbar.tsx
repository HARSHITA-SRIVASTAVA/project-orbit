import OrbitLogo from "./OrbitLogo";
import Container from "./Container";

export default function Navbar() {
  return (
    <header className="border-b border-slate-200">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <OrbitLogo />

          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="/"
              className="text-sm text-slate-600 hover:text-slate-900"
            >
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
      </Container>
    </header>
  );
}