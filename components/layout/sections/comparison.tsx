import { Check, X } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface ComparisonRow {
  feature: string;
  traditionalChatbots: "check" | "x" | "limited";
  contactForms: "check" | "x";
  jibberlab: "check" | "x";
}

const comparisonData: ComparisonRow[] = [
  {
    feature: "Available 24/7",
    traditionalChatbots: "check",
    contactForms: "check",
    jibberlab: "check",
  },
  {
    feature: "Natural conversation",
    traditionalChatbots: "x",
    contactForms: "x",
    jibberlab: "check",
  },
  {
    feature: "Voice interaction",
    traditionalChatbots: "x",
    contactForms: "x",
    jibberlab: "check",
  },
  {
    feature: "Books appointments",
    traditionalChatbots: "x",
    contactForms: "x",
    jibberlab: "check",
  },
  {
    feature: "Captures context",
    traditionalChatbots: "limited",
    contactForms: "x",
    jibberlab: "check",
  },
  {
    feature: "Visitor insights",
    traditionalChatbots: "x",
    contactForms: "x",
    jibberlab: "check",
  },
  {
    feature: "Easy setup",
    traditionalChatbots: "x",
    contactForms: "check",
    jibberlab: "check",
  },
];

export const ComparisonSection = () => {
  const renderCell = (value: "check" | "x" | "limited") => {
    if (value === "check") {
      return <Check className="h-5 w-5 text-green-600 mx-auto" />;
    }
    if (value === "x") {
      return <X className="h-5 w-5 text-red-600 mx-auto" />;
    }
    return <span className="text-muted-foreground">Limited</span>;
  };

  return (
    <section id="comparison" className="max-w-[1100px] mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
      <h2 className="text-sm font-semibold uppercase tracking-wider text-center mb-2">
        Comparison
      </h2>

      <h2 className="text-4xl md:text-5xl lg:text-6xl text-center font-extrabold leading-snug mb-8">
        JibberLab Agents vs Traditional Solutions
      </h2>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold text-black dark:text-foreground text-base md:text-lg">Feature</TableHead>
              <TableHead className="text-center font-bold text-black dark:text-foreground text-base md:text-lg">Traditional Chatbots</TableHead>
              <TableHead className="text-center font-bold text-black dark:text-foreground text-base md:text-lg">Contact Forms</TableHead>
              <TableHead className="text-center font-bold text-black dark:text-foreground text-base md:text-lg">JibberLab Site Agents</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {comparisonData.map((row, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{row.feature}</TableCell>
                <TableCell className="text-center">
                  {renderCell(row.traditionalChatbots)}
                </TableCell>
                <TableCell className="text-center">
                  {renderCell(row.contactForms)}
                </TableCell>
                <TableCell className="text-center">
                  {renderCell(row.jibberlab)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

