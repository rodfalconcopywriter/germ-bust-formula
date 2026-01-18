import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Isso funciona em apartamento?",
      answer: "Sim. Inclusive em casos onde as baratas vêm do esgoto ou vizinhos.",
    },
    {
      question: "Preciso usar produtos caros?",
      answer: "Não. A Fórmula 3P usa soluções simples e acessíveis.",
    },
    {
      question: "É seguro para casa com pets?",
      answer: "Sim. O método ensina aplicação segura e correta.",
    },
    {
      question: "Em quanto tempo vejo resultado?",
      answer: "Muitas pessoas relatam redução em poucos dias.",
    },
  ];

  return (
    <section className="section-container">
      <h2 className="section-title">Perguntas Rápidas</h2>

      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border border-border rounded-xl mb-3 px-4 bg-card overflow-hidden"
          >
            <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-4">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-4">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FAQSection;
