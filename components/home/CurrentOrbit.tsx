import Container from "@/components/layout/Container";

const missionItems = [
  {
    label: "Current Mission",
    value: "Building Project Orbit",
  },
  {
    label: "Status",
    value: "Active Development",
  },
  {
    label: "Next Launch",
    value: "Engineering Showcase",
  },
  {
    label: "Upcoming Mission",
    value: "New Flagship Project",
  },
];

export default function CurrentOrbit() {
  return (
    <section className="pb-20">
      <Container>
        <div className="border-y border-slate-200 py-10">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-blue-600">
            Mission Control
          </p>

          <div className="mt-8 grid gap-8 md:grid-cols-4">
            {missionItems.map((item) => (
              <div key={item.label}>
                <p className="text-sm text-slate-500">{item.label}</p>
                <p className="mt-2 font-semibold text-slate-950">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}