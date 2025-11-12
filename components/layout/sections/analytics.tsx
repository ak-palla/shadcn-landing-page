"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Timeline } from "@/components/ui/timeline";

interface AnalyticsItemProps {
  question: string;
}

const analyticsItems: AnalyticsItemProps[] = [
  {
    question: "What questions visitors ask most ?",
  },
  {
    question: "Which services generate the most interest ?",
  },
  {
    question: "Where visitors get confused or drop off ?",
  },
  {
    question: "Which conversations turn into qualified leads ?",
  },
];

export const AnalyticsSection = () => {
  const timelineData = analyticsItems.map(({ question }, index) => ({
    title: `Q${index + 1}`,
    content: (
      <Card
        key={index}
        className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75"
      >
        <CardContent className="pt-6">
          <p className="text-foreground">{question}</p>
        </CardContent>
      </Card>
    ),
  }));

  return (
    <section id="analytics" className="max-w-[1100px] mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider mb-2">
            Analytics
          </h2>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-snug mb-6">
            Finally Understand What Your Visitors Actually Want
          </h2>

          <p className="text-base md:text-lg lg:text-xl font-medium leading-[1.75] text-foreground/80 mb-10">
            Your site agent doesn&apos;t just help visitors—it gives you intelligence.
          </p>

          <p className="text-lg font-semibold mb-6">See exactly:</p>
        </div>

        <div className="w-full">
          <Timeline data={timelineData} />
        </div>
      </div>

      <p className="max-w-3xl mx-auto text-center text-lg font-bold text-black dark:text-foreground mt-12">
        Access your conversation dashboard to review transcripts, identify trends, and improve your offerings based on real visitor needs.
      </p>
    </section>
  );
};

