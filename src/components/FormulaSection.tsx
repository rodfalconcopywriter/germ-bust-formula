import { Ban, Target, Skull } from "lucide-react";

const FormulaSection = () => {
  const steps = [
    {
      icon: Ban,
      label: "P1 — Parar a Entrada",
      text: "Bloqueie ralos, frestas e pontos invisíveis.",
    },
    {
      icon: Target,
      label: "P2 — Punir o Esconderijo",
      text: "Ataque os abrigos quentes onde elas se reproduzem.",
    },
    {
      icon: Skull,
      label: "P3 — Propagar a Morte na Colônia",
      text: "Use a isca do jeito certo para eliminar o foco.",
    },
  ];

  return (
    <section className="section-alt">
      <div className="section-container">
        <h2 className="section-title">
          Por que as baratas francesinhas{" "}
          <span className="text-primary">sempre voltam?</span>
        </h2>

        <p className="text-center text-muted-foreground mb-8 text-lg">
          Porque a maioria das pessoas tenta matar as baratas que aparecem,<br />
          <strong className="text-foreground">mas não quebra o ciclo invisível da colônia.</strong>
        </p>

        <div className="formula-box">
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">
            A Fórmula 3P funciona assim:
          </h3>

          <div className="space-y-5">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-card p-4 rounded-xl"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">{step.label}</h4>
                  <p className="text-muted-foreground">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <a href="#comprar" className="cta-button">
            BAIXAR A FÓRMULA 3P
          </a>
        </div>
      </div>
    </section>
  );
};

export default FormulaSection;
