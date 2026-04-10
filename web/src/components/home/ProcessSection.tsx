import type { ComponentType } from "react";
import {
  IconCheck,
  IconFileText,
  IconMail,
  IconScale,
} from "@/components/icons";
import { Container } from "@/components/ui/Container";

const phases: {
  label: string;
  Icon: ComponentType<{ className?: string }>;
}[] = [
  { label: "Enquiry", Icon: IconMail },
  { label: "Scoping", Icon: IconFileText },
  { label: "Execution", Icon: IconScale },
  { label: "Closure", Icon: IconCheck },
];

export function ProcessSection() {
  return (
    <section
      aria-label="Our process at a glance"
      className="relative z-0 w-full border-b border-slate-200/90 bg-slate-100 py-2.5 landscape:max-md:py-2 sm:py-4 md:py-5 lg:py-6"
    >
      <Container className="!px-3 sm:!px-6 lg:!px-8">
        <div className="flex w-full min-w-0 flex-col gap-2.5 sm:gap-3 lg:flex-row lg:items-center lg:justify-between lg:gap-5">
          <div className="flex w-full shrink-0 justify-center lg:w-auto lg:justify-start">
            <h2 className="max-w-[12rem] border-l-[3px] border-gold pl-3 text-left font-serif text-lg font-semibold leading-snug tracking-tight text-navy-900 sm:max-w-none sm:pl-4 sm:text-xl md:text-2xl md:leading-tight">
              Our process
            </h2>
          </div>

          <ol className="flex w-full min-w-0 flex-1 list-none justify-between gap-1 sm:gap-2 md:gap-4 lg:max-w-4xl lg:gap-6 xl:max-w-none">
            {phases.map((phase) => {
              const Icon = phase.Icon;
              return (
                <li
                  key={phase.label}
                  className="flex min-w-0 flex-[1_1_0%] basis-0 flex-col items-center justify-start text-center"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-gold/30 bg-navy-900 text-gold shadow-sm sm:h-11 sm:w-11 sm:rounded-xl md:h-12 md:w-12 lg:rounded-2xl">
                    <Icon className="h-[1.125rem] w-[1.125rem] sm:h-5 sm:w-5 md:h-6 md:w-6" />
                  </div>
                  <span className="mt-1 max-w-[4.25rem] font-serif text-[0.65rem] font-semibold leading-snug tracking-tight text-navy-900 sm:mt-1.5 sm:max-w-none sm:text-xs md:text-sm">
                    {phase.label}
                  </span>
                </li>
              );
            })}
          </ol>
        </div>
      </Container>
    </section>
  );
}
