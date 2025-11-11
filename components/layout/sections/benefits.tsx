import { Card, CardContent } from "@/components/ui/card";

interface ProblemProps {
  number: string;
  description: string;
}

const problemList: ProblemProps[] = [
  {
    number: "01",
    description: "They won't fill out contact forms (92% abandon them)",
  },
  {
    number: "02",
    description: "They leave before you can respond to their inquiry",
  },
  {
    number: "03",
    description: "They move on to competitors who answer faster",
  },
  {
    number: "04",
    description: "You never know what questions stopped them from reaching out",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="max-w-[1100px] mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider mb-2">Problem</h2>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-snug mb-6">
            Your Website Shouldn&apos;t Feel Like a Locked Door
          </h2>
          <p className="text-base md:text-lg lg:text-xl font-medium leading-[1.75] text-foreground/80 mb-10">
            Every day, potential clients visit your website with questions. They&apos;re interested, but:
          </p>
        </div>

        <div className="flex flex-col gap-6 w-full">
          {problemList.map(({ number, description }) => (
            <Card
              key={number}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
            >
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30 flex-shrink-0">
                    {number}
                  </span>
                  <p className="text-foreground pt-2">{description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
