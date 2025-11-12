"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Timeline } from "@/components/ui/timeline";

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
  const timelineData = serviceList.map(({ step, title, description }) => ({
    title: step,
    content: (
      <Card
        key={title}
        className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75"
      >
        <CardContent className="pt-6">
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-foreground">{description}</p>
        </CardContent>
      </Card>
    ),
  }));

  return (
    <section id="services" className="max-w-[1300px] mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider mb-2">
            How it works?
          </h2>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-snug mb-6">
            Run your Site Agent in 3 Simple Steps
          </h2>
          <p className="text-base md:text-lg lg:text-xl font-medium leading-[1.75] text-foreground/80 mb-10">
            Everything you need to deploy intelligent AI agents on your website. 
            From automatic content learning to multi-modal interactions.
          </p>
        </div>

        <div className="w-full">
          <Timeline data={timelineData} />
        </div>
      </div>
    </section>
  );
};
