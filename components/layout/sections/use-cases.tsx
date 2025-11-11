import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MessageSquare, Calendar, UserCheck, Headphones, MessageSquarePlus, TrendingDown } from "lucide-react";

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
    icon: Headphones,
    title: "Provide Support",
    description:
      "Help existing clients find resources, documentation, or next steps—24/7.",
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
  return (
    <section id="use-cases" className="max-w-[1100px] mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
      <h2 className="text-sm font-semibold uppercase tracking-wider text-center mb-2">
        Use Cases
      </h2>

      <h2 className="text-4xl md:text-5xl lg:text-6xl text-center font-bold leading-tight mb-8">
        One Site Agent, Countless Possibilities
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {useCaseList.map(({ icon: Icon, title, description }) => (
          <Card
            key={title}
            className="bg-muted/60 dark:bg-card h-full"
          >
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-primary/20 dark:bg-primary/30 p-2 rounded-full">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>{title}</CardTitle>
              </div>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
};

