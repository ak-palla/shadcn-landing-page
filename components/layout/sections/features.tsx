import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
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
  return (
    <section id="features" className="max-w-[1100px] mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
      <h2 className="text-sm font-semibold uppercase tracking-wider text-center mb-2">
        Solution
      </h2>

      <h2 className="text-4xl md:text-5xl lg:text-6xl text-center font-bold leading-tight mb-6">
        Meet Your New Site Agent
      </h2>

      <h3 className="md:w-1/2 mx-auto text-lg md:text-xl font-normal leading-relaxed text-center text-muted-foreground mb-10">
        An intelligent AI assistant embedded on your website that works around the clock.
      </h3>

      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
