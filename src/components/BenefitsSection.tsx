import produtoPrincipal from "@/assets/produto_principal.webp";
import listaChecklist from "@/assets/lista.webp";
import mapaEsconderijos from "@/assets/mapa_esconderijos.png";
import orientacaoCorreta from "@/assets/orientacaocorreta.webp";
import errosImage from "@/assets/erros.webp";

const BenefitsSection = () => {
  const benefits = [
    {
      image: produtoPrincipal,
      title: "Guia Prático da Fórmula 3P",
      subtitle: "(preparo + aplicação do gel)",
      description: "Passo a passo simples e direto",
    },
    {
      image: listaChecklist,
      title: "Checklist de Preparo e Aplicação em 15 Minutos",
      subtitle: "",
      description: "Evite erros comuns logo na primeira aplicação",
    },
    {
      image: mapaEsconderijos,
      title: "Mapa dos Esconderijos Invisíveis",
      subtitle: "",
      description: "Descubra onde realmente aplicar o gel",
    },
    {
      image: orientacaoCorreta,
      title: "Orientação Correta da Mistura",
      subtitle: "(quantidade certa e pontos estratégicos)",
      description: "Mistura certa = resultado real",
    },
    {
      image: errosImage,
      title: "Erros que Fazem a Infestação Voltar",
      subtitle: "(mesmo usando receita caseira)",
      description: "O que NÃO fazer para não perder o efeito",
    },
  ];

  return (
    <section className="section-container">
      <h2 className="section-title">
        O que você vai acessar <span className="text-primary">imediatamente</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="bg-white border border-border/50 rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center"
          >
            <div className="w-24 h-24 sm:w-28 sm:h-28 mb-4 rounded-lg overflow-hidden bg-muted/30">
              <img 
                src={benefit.image} 
                alt={benefit.title} 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-bold text-foreground text-sm sm:text-base leading-tight mb-1">
              {benefit.title}
            </h3>
            {benefit.subtitle && (
              <span className="text-xs sm:text-sm text-primary font-medium mb-2">
                {benefit.subtitle}
              </span>
            )}
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>

      <p className="text-center text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 max-w-xl mx-auto">
        Tudo organizado para você preparar, aplicar e eliminar as baratas francesinhas sem erro.
      </p>

      <div className="text-center">
        <a href="https://pay.kiwify.com.br/BiuAzOP" target="_blank" rel="noopener noreferrer" className="cta-button">
          QUERO ACESSAR AGORA
        </a>
      </div>
    </section>
  );
};

export default BenefitsSection;
