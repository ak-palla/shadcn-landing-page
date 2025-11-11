import { Card, CardContent } from "@/components/ui/card";

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
  return (
    <section id="analytics" className="max-w-[1100px] mx-auto px-4 md:px-6 lg:px-8 py-24 sm:py-32">
      <div className="text-center mb-12">
        <h2 className="text-lg text-primary mb-2 tracking-wider">
          Analytics
        </h2>

        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Finally Understand What Your Visitors Actually Want
        </h2>

        <p className="max-w-3xl mx-auto text-xl text-muted-foreground mb-8">
          Your site agent doesn't just help visitors—it gives you intelligence.
        </p>

        <p className="text-lg font-semibold mb-6">See exactly:</p>
      </div>

      <div className="flex flex-col gap-4 max-w-5xl mx-auto mb-8">
        {analyticsItems.map(({ question }, index) => (
          <Card
            key={index}
            className="bg-muted/60 dark:bg-card"
          >
            <CardContent className="pt-6">
              <p className="text-foreground">{question}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <p className="max-w-3xl mx-auto text-center text-lg font-bold text-black dark:text-foreground">
        Access your conversation dashboard to review transcripts, identify trends, and improve your offerings based on real visitor needs.
      </p>
    </section>
  );
};

