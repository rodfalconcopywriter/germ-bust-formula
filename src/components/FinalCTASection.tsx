import { ArrowRight, Clock } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section id="comprar" className="section-container text-center">
      <div className="bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/20 rounded-3xl p-8 md:p-12">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-foreground leading-tight mb-4">
          Baratas francesinhas{" "}
          <span className="text-primary">não desaparecem sozinhas.</span>
        </h2>

        <p className="text-lg md:text-xl text-muted-foreground mb-8">
          Ou você quebra o ciclo agora, ou elas se multiplicam.
        </p>

        <a href="#" className="cta-button pulse-cta text-xl md:text-2xl mb-4 inline-flex">
          RESOLVER AGORA POR R$7
          <ArrowRight className="w-6 h-6 ml-2" />
        </a>

        <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm mt-4">
          <Clock className="w-4 h-4" />
          <span>Acesso imediato após o pagamento</span>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
