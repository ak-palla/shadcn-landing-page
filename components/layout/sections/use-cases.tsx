"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Timeline } from "@/components/ui/timeline";
import { MessageSquare, Calendar, UserCheck, MessageSquarePlus, TrendingDown } from "lucide-react";

interface UseCaseProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const useCaseList: UseCaseProps[] = [
  {
    icon: MessageSquare,
    title: "Answer FAQs",
    description:
      "Stop answering the same questions via email. Let your agent handle it instantly.",
  },
  {
    icon: Calendar,
    title: "Book Consultations",
    description:
      "Schedule discovery calls, demos, or appointments without the calendar ping-pong.",
  },
  {
    icon: UserCheck,
    title: "Qualify Leads",
    description:
      "Your agent asks the right questions to understand visitor needs before they reach you.",
  },
  {
    icon: MessageSquarePlus,
    title: "Capture Feedback",
    description:
      "Learn what visitors think about your services through natural conversations.",
  },
  {
    icon: TrendingDown,
    title: "Reduce Bounce Rate",
    description:
      "Engage visitors the moment they're confused or about to leave.",
  },
];

export const UseCasesSection = () => {
  const timelineData = useCaseList.map(({ icon: Icon, title, description }) => ({
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
    <section id="use-cases" className="max-w-[1300px] mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider mb-2">Use Cases</h2>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-snug mb-6">
            One Site Agent, Countless Possibilities
          </h2>
        </div>
        <div className="w-full">
          <Timeline data={timelineData} />
        </div>
      </div>
    </section>
  );
};

