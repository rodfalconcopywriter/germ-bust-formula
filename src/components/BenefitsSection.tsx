import { FileText, CheckCircle2, Map, Droplets, AlertCircle } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: FileText,
      text: "Guia prático da Fórmula 3P (passo a passo)",
    },
    {
      icon: CheckCircle2,
      text: "Checklist de aplicação em 15 minutos",
    },
    {
      icon: Map,
      text: "Mapa dos esconderijos invisíveis",
    },
    {
      icon: Droplets,
      text: "Orientação correta de uso do gel isca",
    },
    {
      icon: AlertCircle,
      text: "Erros que fazem a infestação voltar",
    },
  ];

  return (
    <section className="section-container">
      <h2 className="section-title">
        O que você vai acessar <span className="text-primary">imediatamente</span>
      </h2>

      <div className="space-y-4 mb-10">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex items-center gap-4 bg-card border border-border rounded-xl p-4"
          >
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-success/10 flex items-center justify-center">
              <benefit.icon className="w-5 h-5 text-success" />
            </div>
            <span className="font-medium text-foreground">{benefit.text}</span>
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
