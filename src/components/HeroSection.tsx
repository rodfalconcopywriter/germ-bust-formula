import { Check, ShieldCheck } from "lucide-react";

const HeroSection = () => {
  const badges = [
    "Sem dedetização",
    "Sem veneno forte no ar",
    "Aplicação simples",
    "Resultados em poucos dias",
  ];

  return (
    <section className="section-container text-center">
      <div className="mb-6">
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm">
          <ShieldCheck className="w-4 h-4" />
          Método Comprovado
        </span>
      </div>

      <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground leading-tight mb-4">
        Fórmula 3P – Extermínio das{" "}
        <span className="text-primary">Baratas Francesinhas</span>
      </h1>

      <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
        O método doméstico que corta o ciclo invisível da barata germânica antes que ela tome sua casa.
      </p>

      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {badges.map((badge, index) => (
          <span key={index} className="badge-success">
            <Check className="w-4 h-4 mr-1.5" />
            {badge}
          </span>
        ))}
      </div>

      <a href="#comprar" className="cta-button pulse-cta text-xl">
        RESOLVER AGORA POR R$7
      </a>

      <p className="mt-4 text-sm text-muted-foreground">
        Acesso imediato após o pagamento
      </p>
    </section>
  );
};

export default HeroSection;
