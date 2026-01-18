import { Quote, Star, BadgeCheck } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "Não aguentava mais ver essas baratinhas no armário.",
      name: "Maria C.",
    },
    {
      text: "Depois que apliquei do jeito certo, sumiram.",
      name: "Ricardo S.",
    },
    {
      text: "Finalmente entendi onde estava errando.",
      name: "Juliana M.",
    },
    {
      text: "Era isso que ninguém explicava.",
      name: "Carlos A.",
    },
  ];

  return (
    <section className="section-container">
      <h2 className="section-title">
        Pessoas que estavam <span className="text-primary">desesperadas</span> como você
      </h2>

      <div className="grid gap-4 mb-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
            <div className="flex items-start gap-3">
              <Quote className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="text-foreground font-medium italic">"{testimonial.text}"</p>
                <p className="text-sm text-muted-foreground mt-2">— {testimonial.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
        <BadgeCheck className="w-5 h-5 text-success" />
        <span>Método baseado em orientações profissionais usadas no controle de pragas.</span>
      </div>
    </section>
  );
};

export default TestimonialsSection;
