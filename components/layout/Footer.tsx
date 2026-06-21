import Container from "@/components/layout/Container";

export default function Footer() {
  return (
    <footer className="mt-6 border-t border-slate-200 py-8">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mt-4 text-sm font-bold uppercase tracking-[0.35em] text-blue-600">
              Project Orbit
            </p>

            <h2 className="mt-4 text-3xl font-black text-slate-950">
              Ready for the next mission?
            </h2>

            <p className="mt-3 max-w-xl text-slate-600">
              Let&apos;s build reliable software, meaningful products, and
              impactful digital experiences.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm font-semibold">
            <a href="https://github.com/HARSHITA-SRIVASTAVA" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-600">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/harshita-srivastava-07b043292/" className="text-slate-600 hover:text-blue-600">
              LinkedIn
            </a>
            <a href="mailto:srivastavaharshita1704@gmail.com" className="text-slate-600 hover:text-blue-600">
              Email
            </a>
            <a href="/resume.pdf" className="text-slate-600 transition-colors hover:text-blue-600">
              Resume
            </a>
          </div>
        </div>

        <p className="mt-10 text-sm text-slate-500">
          © {new Date().getFullYear()} Project Orbit. Designed and developed by Harshita Srivastava.
        </p>
      </Container>
    </footer>
  );
}