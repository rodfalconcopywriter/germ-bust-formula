import { Ban, Target, Skull } from "lucide-react";

const FormulaSection = () => {
  const steps = [
    {
      icon: Ban,
      label: "P1 — Parar a Entrada",
      text: "Bloqueie ralos, frestas e pontos invisíveis onde elas entram.",
    },
    {
      icon: Target,
      label: "P2 — Punir o Esconderijo",
      text: "Ataque os abrigos quentes onde elas se reproduzem com o preparo certo.",
    },
    {
      icon: Skull,
      label: "P3 — Propagar a Morte",
      text: "Aprenda a preparar o gel e aplicar nos pontos estratégicos para eliminar a colônia.",
    },
  ];

  return (
    <section className="section-alt">
      <div className="section-container">
        <h2 className="section-title">
          Por que as baratas francesinhas{" "}
          <span className="text-primary">sempre voltam?</span>
        </h2>

        <p className="text-center text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed">
          Porque a maioria usa receita solta, mistura errada e aplica no lugar errado.{" "}
          <strong className="text-foreground">Receita solta não funciona sem o método.</strong>
        </p>

        <div className="formula-box">
          <h3 className="text-base sm:text-xl font-bold text-foreground mb-4 sm:mb-6 text-center">
            A Fórmula 3P funciona assim:
          </h3>

          <div className="space-y-3 sm:space-y-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex items-start gap-3 sm:gap-4 bg-card p-3 sm:p-4 rounded-lg sm:rounded-xl"
              >
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <step.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-bold text-foreground text-sm sm:text-base">{step.label}</h4>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-6 sm:mt-8">
          <a href="https://pay.kiwify.com.br/BiuAzOP" target="_blank" rel="noopener noreferrer" className="cta-button">
            BAIXAR A FÓRMULA 3P
          </a>
        </div>
      </div>
    </section>
  );
};

export default FormulaSection;
