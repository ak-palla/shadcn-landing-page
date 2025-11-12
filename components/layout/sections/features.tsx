"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { Timeline } from "@/components/ui/timeline";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "MessageSquare",
    title: "Real-Time Conversations",
    description:
      "Natural voice and text conversations Your site agent engages visitors instantly, answering questions about your services in real-time—just like having a team member on your site 24/7.",
  },
  {
    icon: "Zap",
    title: "Books Appointments",
    description:
      "Direct calendar integration No more back-and-forth emails. Your agent schedules consultations directly into your Google or Outlook calendar while you sleep.",
  },
  {
    icon: "BarChart3",
    title: "Captures Every Lead",
    description:
      "Never lose a visitor again. Even when visitors don't book immediately, your agent captures their questions and contact info—giving you valuable insights and follow-up opportunities.",
  },
];

export const FeaturesSection = () => {
  const timelineData = featureList.map(({ icon, title, description }) => ({
    title: (
      <div className="bg-primary/20 p-2 rounded-full">
        <Icon
          name={icon as keyof typeof icons}
          size={24}
          color="hsl(var(--primary))"
          className="text-primary"
        />
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
    <section id="features" className="max-w-[1300px] mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider mb-2">Solution</h2>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-snug mb-6">
            Meet Your New Site Agent
          </h2>

          <p className="text-base md:text-lg lg:text-xl font-medium leading-[1.75] text-foreground/80 mb-10">
            An intelligent AI assistant embedded on your website that works around the clock.
          </p>
        </div>

        <div className="w-full">
          <Timeline data={timelineData} />
        </div>
      </div>
    </section>
  );
};
