import produtoPrincipal from "@/assets/produto_principal.webp";
import listaChecklist from "@/assets/lista.webp";
import mapaEsconderijos from "@/assets/mapa_esconderijos.png";
import orientacaoCorreta from "@/assets/orientacaocorreta.webp";
import errosImage from "@/assets/erros.webp";

const BenefitsSection = () => {
  const benefits = [
    {
      image: produtoPrincipal,
      text: "Guia prático da Fórmula 3P (preparo + aplicação do gel)",
    },
    {
      image: listaChecklist,
      text: "Checklist de preparo e aplicação em 15 minutos",
    },
    {
      image: mapaEsconderijos,
      text: "Mapa dos esconderijos invisíveis",
    },
    {
      image: orientacaoCorreta,
      text: "Orientação correta da mistura (quantidade e pontos)",
    },
    {
      image: errosImage,
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
            <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-lg overflow-hidden bg-muted">
              <img 
                src={benefit.image} 
                alt={benefit.text} 
                className="w-full h-full object-cover"
              />
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
