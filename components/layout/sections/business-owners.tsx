"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Timeline } from "@/components/ui/timeline";
import { Users, Briefcase, Wrench, Code } from "lucide-react";

interface BusinessOwnerProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const businessOwnerList: BusinessOwnerProps[] = [
  {
    icon: Users,
    title: "For Consultants & Coaches",
    description:
      "Never miss a lead while you're in client sessions. Your agent handles inquiries and books discovery calls automatically.",
  },
  {
    icon: Briefcase,
    title: "For Professional Services",
    description:
      "Answer common questions instantly (pricing, process, availability) without tying up your team's time.",
  },
  {
    icon: Wrench,
    title: "For Service Providers",
    description:
      "Turn your website from a digital brochure into an interactive experience that actually converts visitors.",
  },
  {
    icon: Code,
    title: "For Web Agencies",
    description:
      "White-label site agents for your clients and create a new recurring revenue stream with every website you build.",
  },
];

export const BusinessOwnersSection = () => {
  const timelineData = businessOwnerList.map(({ icon: Icon, title, description }) => ({
    title: (
      <div className="bg-primary/20 p-2 rounded-full">
        <Icon className="h-6 w-6 text-primary" />
      </div>
    ),
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
    <section id="business-owners" className="max-w-[1300px] mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider mb-2">Benefits</h2>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-snug mb-6">
            Why Business Owners Choose JibberLab?
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

