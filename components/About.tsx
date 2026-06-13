const roleGroups = [
  {
    label: "Building",
    items: [
      {
        org: "Hiverra",
        title:
          "Product direction for developer tools, utilities, and practical software",
      },
    ],
  },
  {
    label: "Current",
    items: [
      {
        org: "Flowbonds",
        title: "Lead Developer",
      },
      {
        org: "Fildtek",
        title: "Chief Technology Officer",
      },
    ],
  },
  {
    label: "Past",
    items: [
      {
        org: "NAMTES FUOYE Chapter",
        title: "Special Advisor on Publicity and Media",
      },
      {
        org: "NUESA FUOYE Chapter Press Media",
        title: "Editor-in-Chief",
      },
    ],
  },
];

export default function About() {
  return (
    <section className="py-20 px-6 md:px-12 max-w-5xl mx-auto" id="about">
      <div className="mb-10">
        <span className="font-mono text-xs tracking-[0.2em] text-gray-500 uppercase">
          About
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-white mt-2 leading-tight">
          Work, roles, and context
        </h2>
      </div>

      <div className="grid gap-5">
        <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-3xl">
          I build unusual, useful software and tools across product work, web
          apps, and technical experiments. Hiverra is the direction I am shaping
          for practical software products, from developer tools to utilities and
          future hardware-adjacent work.
        </p>

        <div className="grid gap-7 border-l border-white/10 pl-5">
          {roleGroups.map((group) => (
            <div
              key={group.label}
              className="relative grid gap-3 md:grid-cols-[120px_1fr] md:gap-6"
            >
              <div className="absolute -left-[25px] top-1.5 h-2.5 w-2.5 rounded-full border border-white/20 bg-background" />
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-gray-500">
                {group.label}
              </div>
              <div className="grid gap-3">
                {group.items.map((role) => (
                  <div
                    key={`${group.label}-${role.org}-${role.title}`}
                    className="grid gap-1 border-b border-white/5 pb-3 last:border-b-0 last:pb-0"
                  >
                    <div className="text-white font-medium">{role.title}</div>
                    <div className="text-sm text-gray-400">{role.org}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
