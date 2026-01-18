import { FileText, CheckCircle2, Map, Droplets, AlertCircle } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: FileText,
      text: "Guia prático da Fórmula 3P (preparo + aplicação do gel)",
    },
    {
      icon: CheckCircle2,
      text: "Checklist de preparo e aplicação em 15 minutos",
    },
    {
      icon: Map,
      text: "Mapa dos esconderijos invisíveis",
    },
    {
      icon: Droplets,
      text: "Orientação correta da mistura (quantidade e pontos)",
    },
    {
      icon: AlertCircle,
      text: "Erros que fazem a infestação voltar mesmo com receita caseira",
    },
  ];

  return (
    <section className="section-container">
      <h2 className="section-title">
        O que você vai acessar <span className="text-primary">imediatamente</span>
      </h2>

      <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex items-center gap-3 sm:gap-4 bg-card border border-border rounded-lg sm:rounded-xl p-3 sm:p-4"
          >
            <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-success/10 flex items-center justify-center">
              <benefit.icon className="w-4 h-4 sm:w-5 sm:h-5 text-success" />
            </div>
            <span className="font-medium text-foreground text-sm sm:text-base">{benefit.text}</span>
          </div>
        ))}
      </div>

      <div className="text-center">
        <a href="#comprar" className="cta-button">
          QUERO RESOLVER ISSO AGORA
        </a>
      </div>
    </section>
  );
};

export default BenefitsSection;
