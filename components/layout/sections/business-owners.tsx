import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
  return (
    <section id="business-owners" className="max-w-[1100px] mx-auto px-4 md:px-6 lg:px-8 py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Benefits
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Why Business Owners Choose JibberLab?
      </h2>
      <h3 className="max-w-3xl mx-auto text-xl text-center text-muted-foreground mb-8">
        Everything you need to deploy intelligent AI agents on your website. 
        From automatic content learning to multi-modal interactions.
      </h3>

      <div className="grid sm:grid-cols-2 gap-4 max-w-5xl mx-auto">
        {businessOwnerList.map(({ icon: Icon, title, description }) => (
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

