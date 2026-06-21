import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        <Container>
          <p className="mt-6 text-sm font-bold uppercase tracking-[0.35em] text-blue-600">
            Contact
          </p>

          <h1 className="mt-5 text-5xl font-black text-slate-950">
            Ready for the next mission?
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-600">
            Open to Software Engineering, Backend, and Full Stack opportunities.
            Currently building Project Orbit while continuously improving my
            engineering and problem-solving skills.
          </p>

          <div className="mt-16 grid gap-6 md:grid-cols-2">

            {/* Email */}
            <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:border-blue-200 hover:shadow-lg hover:shadow-blue-600/10">
              <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                Email
              </p>

              <h2 className="mt-4 text-2xl font-black text-slate-950">
                Let's Connect
              </h2>

              <a
                href="mailto:srivastavaharshita1704@gmail.com"
                className="mt-5 inline-block text-lg font-semibold text-slate-700 hover:text-blue-600"
              >
                srivastavaharshita1704@gmail.com
              </a>
            </article>

            {/* GitHub */}
            <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:border-blue-200 hover:shadow-lg hover:shadow-blue-600/10">
              <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                GitHub
              </p>

              <h2 className="mt-4 text-2xl font-black text-slate-950">
                Project Orbit Repository
              </h2>

              <a
                href="https://github.com/HARSHITA-SRIVASTAVA"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block text-lg font-semibold text-slate-700 hover:text-blue-600"
              >
                github.com/HARSHITA-SRIVASTAVA ↗
              </a>
            </article>

            {/* LinkedIn */}
            <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:border-blue-200 hover:shadow-lg hover:shadow-blue-600/10">
              <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                LinkedIn
              </p>

              <h2 className="mt-4 text-2xl font-black text-slate-950">
                Professional Network
              </h2>

              <a
                href="https://www.linkedin.com/in/harshita-srivastava-07b043292/"
                className="mt-5 inline-block text-lg font-semibold text-slate-700 hover:text-blue-600"
              >
                Add LinkedIn Profile ↗
              </a>
            </article>

            {/* Resume */}
            <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:border-blue-200 hover:shadow-lg hover:shadow-blue-600/10">
              <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                Resume
              </p>

              <h2 className="mt-4 text-2xl font-black text-slate-950">
                Resume
              </h2>

              <a
                href="/resume.pdf"
                className="mt-5 inline-block text-lg font-semibold text-slate-700 hover:text-blue-600"
              >
                View Resume ↗
              </a>
            </article>
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}