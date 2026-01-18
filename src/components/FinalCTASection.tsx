import { ArrowRight, Clock } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section id="comprar" className="section-container text-center">
      <div className="bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/20 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-foreground leading-tight mb-3 sm:mb-4">
          Baratas francesinhas{" "}
          <span className="text-primary">não desaparecem sozinhas.</span>
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8">
          Acesse o método que ensina a preparar e aplicar o gel certo para eliminar pela raiz.
        </p>

        <a href="https://pay.kiwify.com.br/BiuAzOP" target="_blank" rel="noopener noreferrer" className="cta-button pulse-cta text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4">
          RESOLVER AGORA POR R$7
          <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2" />
        </a>

        <div className="flex items-center justify-center gap-2 text-muted-foreground text-xs sm:text-sm mt-3 sm:mt-4">
          <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          <span>Acesso imediato após o pagamento</span>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
