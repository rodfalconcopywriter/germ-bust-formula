import { Quote, Star, BadgeCheck } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "Finalmente entendi o preparo certo. Ninguém explicava isso.",
      name: "Maria C.",
    },
    {
      text: "Depois que fiz o gel do jeito certo, sumiram em dias.",
      name: "Ricardo S.",
    },
    {
      text: "Já tinha testado várias receitas. Essa foi a única que funcionou.",
      name: "Juliana M.",
    },
    {
      text: "Agora sei exatamente onde e como aplicar.",
      name: "Carlos A.",
    },
  ];

  return (
    <section className="section-container">
      <h2 className="section-title">
        Pessoas <span className="text-primary">desesperadas</span> como você
      </h2>

      <div className="grid gap-3 sm:gap-4 mb-6 sm:mb-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="flex gap-0.5 sm:gap-1 mb-2 sm:mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-accent text-accent" />
              ))}
            </div>
            <div className="flex items-start gap-2 sm:gap-3">
              <Quote className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-foreground font-medium italic text-sm sm:text-base">"{testimonial.text}"</p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1.5 sm:mt-2">— {testimonial.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-start sm:items-center justify-center gap-2 text-muted-foreground text-xs sm:text-sm text-center">
        <BadgeCheck className="w-4 h-4 sm:w-5 sm:h-5 text-success flex-shrink-0 mt-0.5 sm:mt-0" />
        <span>Método baseado em práticas reais de controle de pragas, adaptadas para preparo e uso doméstico seguro.</span>
      </div>
    </section>
  );
};

export default TestimonialsSection;
