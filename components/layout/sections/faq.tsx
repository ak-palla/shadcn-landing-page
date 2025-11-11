import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "How long does setup take?",
    answer: "About 10 minutes. You'll paste one script onto your website and configure your agent's knowledge base. No technical skills required.",
    value: "item-1",
  },
  {
    question: "What if my agent doesn't know an answer?",
    answer: "Your agent will politely let the visitor know and capture their question for you. You'll see this in your dashboard and can follow up directly.",
    value: "item-2",
  },
  {
    question: "Does it work on mobile?",
    answer: "Absolutely. Your site agent works seamlessly on desktop, tablet, and mobile devices.",
    value: "item-3",
  },
  {
    question: "Can I see conversations before responding?",
    answer: "Yes. Every conversation is saved in your dashboard. You can review, analyze, and follow up on any interaction.",
    value: "item-4",
  },
  {
    question: "What languages are supported?",
    answer: "Currently English, with Spanish and French coming in Q2 2026.",
    value: "item-5",
  },
  {
    question: "Can I turn it off during certain hours?",
    answer: "Yes. Set your agent's availability schedule to match your preferences.",
    value: "item-6",
  },
  {
    question: "Is there a contract?",
    answer: "No. All plans are month-to-month. Cancel anytime.",
    value: "item-7",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="max-w-[1100px] mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
      <div className="text-center mb-8">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-center mb-2">
          FAQS
        </h2>

        <h2 className="text-4xl md:text-5xl lg:text-6xl text-center font-bold leading-tight">
          Frequently Asked Questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
