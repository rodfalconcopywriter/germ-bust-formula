import { Check, ShieldCheck } from "lucide-react";
import bannerImage from "@/assets/banner.webp";

const HeroSection = () => {
  const badges = [
    "Sem dedetização",
    "Sem veneno forte",
    "Aplicação simples",
    "Resultado rápido",
  ];

  return (
    <section className="section-container text-center">
      <div className="mb-4 sm:mb-6">
        <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 text-primary font-semibold text-xs sm:text-sm">
          <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          Método Comprovado
        </span>
      </div>

      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-foreground leading-tight mb-3 sm:mb-4">
        Descubra a Fórmula 3P – Extermínio das{" "}
        <span className="text-primary">Baratas Francesinhas</span> em até 7 dias.
      </h1>

      <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-xl mx-auto leading-relaxed">
        Aprenda a preparar e aplicar o gel certo para cortar o ciclo da infestação antes que vire colônia.
      </p>

      <div className="mb-6 sm:mb-8">
        <img 
          src={bannerImage} 
          alt="Fórmula 3P - Método de extermínio de baratas francesinhas" 
          className="w-full max-w-2xl mx-auto rounded-lg sm:rounded-xl shadow-lg"
        />
      </div>

      <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:justify-center sm:gap-2 mb-8 sm:mb-10">
        {badges.map((badge, index) => (
          <span key={index} className="badge-success justify-center">
            <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1" />
            {badge}
          </span>
        ))}
      </div>

      <a href="https://pay.kiwify.com.br/BiuAzOP" target="_blank" rel="noopener noreferrer" className="cta-button pulse-cta text-lg sm:text-xl">
        RESOLVER AGORA POR R$7
      </a>

      <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-muted-foreground">
        Acesso imediato após o pagamento
      </p>
    </section>
  );
};

export default HeroSection;
