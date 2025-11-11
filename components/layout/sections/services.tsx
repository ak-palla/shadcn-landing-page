import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ServiceProps {
  step: string;
  title: string;
  description: string;
}
const serviceList: ServiceProps[] = [
  {
    step: "S1",
    title: "Connect Your Website",
    description:
      "Tell us which pages contain your services and information. Our AI learns everything about what you offer.",
  },
  {
    step: "S2",
    title: "Customize Your Agent",
    description: "Choose your agent's voice, personality, and availability. Make it sound like you—or your ideal team member.",
  },
  {
    step: "S3",
    title: "Embed & Launch",
    description: "Copy one line of code onto your website. Your digital office is now open 24/7.",
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="max-w-[1100px] mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
      <h2 className="text-sm font-semibold uppercase tracking-wider text-center mb-2">
        How it works?
      </h2>

      <h2 className="text-4xl md:text-5xl lg:text-6xl text-center font-bold leading-tight mb-6">
        Run your Site Agent in 3 Simple Steps
      </h2>
      <h3 className="max-w-3xl mx-auto text-lg md:text-xl font-normal leading-relaxed text-center text-muted-foreground mb-10">
        Everything you need to deploy intelligent AI agents on your website. 
        From automatic content learning to multi-modal interactions.
      </h3>

      <div className="flex flex-col gap-6 max-w-5xl mx-auto">
        {serviceList.map(({ step, title, description }) => (
          <Card
            key={title}
            className="bg-muted/60 dark:bg-card"
          >
            <CardHeader className="text-left">
              <CardTitle className="text-left">{step}: {title}</CardTitle>
              <CardDescription className="text-left">{description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
};
