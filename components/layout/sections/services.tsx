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
    <section id="services" className="max-w-[1100px] mx-auto px-4 md:px-6 lg:px-8 py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        How it works?
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Run your Site Agent in 3 Simple Steps
      </h2>
      <h3 className="max-w-3xl mx-auto text-xl text-center text-muted-foreground mb-8">
        Everything you need to deploy intelligent AI agents on your website. 
        From automatic content learning to multi-modal interactions.
      </h3>

      <div className="flex flex-col gap-4 max-w-5xl mx-auto">
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
