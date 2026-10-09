import {
  Reveal,
  Section,
  SectionHead,
} from "@/components/reveal";

const deliverables = [
  {
    number: "01",
    title: "Know what is exposed",
    description:
      "A simple overview of your systems, entry points, and areas that need to be checked.",
    tag: "Scope",
  },
  {
    number: "02",
    title: "Real proof of the issue",
    description:
      "Every problem comes with clear evidence, its real impact, and how an attacker could use it.",
    tag: "Evidence",
  },
  {
    number: "03",
    title: "Clear steps to fix it",
    description:
      "Practical fixes your developers can understand and use without confusing security terms.",
    tag: "Remediation",
  },
  {
    number: "04",
    title: "Check that it is fixed",
    description:
      "A follow-up test confirms the important issues are fixed and your security is stronger.",
    tag: "Verification",
  },
];

export function Terminal() {
  return (
    <Section id="lab">
      <SectionHead
        title="What you get after the test"
        sub="You get clear answers, real proof, and practical steps your team can use to improve security."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {deliverables.map((item, index) => (
          <Reveal
            key={item.number}
            delay={index * 90}
          >
            <article
              className="
                group flex h-full gap-5
                rounded-xl border border-border
                bg-card p-6
                transition-colors duration-300
                hover:border-teal/60
                max-sm:p-5
              "
            >
              <span className="font-display t-body font-bold text-teal">
                {item.number}
              </span>

              <div className="min-w-0">
                <div
                  className="
                    mb-4 flex flex-wrap
                    items-center gap-3
                  "
                >
                  <h3 className="t-h4">
                    {item.title}
                  </h3>

                  <span
                    className="
                      rounded-full border border-border
                      px-2.5 py-1
                      t-eyebrow text-mute
                    "
                  >
                    {item.tag}
                  </span>
                </div>

                <p className="max-w-md text-mute">
                  {item.description}
                </p>

                <div
                  aria-hidden="true"
                  className="
                    mt-6 h-px w-10
                    bg-teal
                    transition-all duration-300
                    group-hover:w-20
                  "
                />
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export { Terminal as Deliverables };