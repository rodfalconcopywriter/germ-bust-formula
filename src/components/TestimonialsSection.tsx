import { Quote, Star, BadgeCheck } from "lucide-react";
import mariaImage from "@/assets/testimonial-maria.jpg";
import ricardoImage from "@/assets/testimonial-ricardo.jpg";
import julianaImage from "@/assets/testimonial-juliana.jpg";
import carlosImage from "@/assets/testimonial-carlos.jpg";

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "Finalmente entendi o preparo certo. Ninguém explicava isso.",
      name: "Maria C.",
      image: mariaImage,
    },
    {
      text: "Depois que fiz o gel do jeito certo, sumiram em dias.",
      name: "Ricardo S.",
      image: ricardoImage,
    },
    {
      text: "Já tinha testado várias receitas. Essa foi a única que funcionou.",
      name: "Juliana M.",
      image: julianaImage,
    },
    {
      text: "Agora sei exatamente onde e como aplicar.",
      name: "Carlos A.",
      image: carlosImage,
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
            <div className="flex items-start gap-3 sm:gap-4">
              {/* Foto do usuário */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-primary/20 shadow-sm">
                  <img 
                    src={testimonial.image} 
                    alt={`Foto de ${testimonial.name}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex items-start gap-2">
                  <Quote className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-foreground font-medium italic text-sm sm:text-base">"{testimonial.text}"</p>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-1.5 sm:mt-2">— {testimonial.name}</p>
                  </div>
                </div>
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
