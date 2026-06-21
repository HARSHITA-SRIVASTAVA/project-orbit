import OrbitLogo from "./OrbitLogo";
import Container from "./Container";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl">
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

          <MobileMenu />

        </div>
      </Container>
    </header>
  );
}