const roles = [
  {
    org: "Hiverra",
    title: "Product direction for developer tools, utilities, and practical software",
    type: "Building",
  },
  {
    org: "Flowbonds",
    title: "Lead Developer",
    type: "Current",
  },
  {
    org: "Fildtek",
    title: "Chief Technology Officer",
    type: "Current",
  },
  {
    org: "NAMTES FUOYE Chapter",
    title: "Special Advisor on Publicity and Media",
    type: "Past",
  },
  {
    org: "NUESA FUOYE Chapter Press Media",
    title: "Editor-in-Chief",
    type: "Past",
  },
];

export default function About() {
  return (
    <section className="py-20 px-6 md:px-12 max-w-5xl mx-auto" id="about">
      <div className="mb-10">
        <span className="font-mono text-xs tracking-[0.2em] text-gray-500 uppercase">About</span>
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-white mt-2 leading-tight">
          Work, roles, and context
        </h2>
      </div>

      <div className="grid gap-5">
        <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-3xl">
          I build unusual, useful software and tools across product work, web apps,
          and technical experiments. Hiverra is the direction I am shaping for practical
          software products, from developer tools to utilities and future hardware-adjacent work.
        </p>

        <div className="grid gap-3">
          {roles.map((role) => (
            <div
              key={`${role.org}-${role.title}`}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4"
            >
              <div>
                <div className="text-white font-medium">{role.title}</div>
                <div className="text-sm text-gray-400">{role.org}</div>
              </div>
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-gray-500">
                {role.type}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
