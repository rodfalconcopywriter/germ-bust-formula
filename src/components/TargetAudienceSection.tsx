import { Check } from "lucide-react";

const TargetAudienceSection = () => {
  const targets = [
    "Está lidando com baratas pequenas (francesinhas)",
    "Já limpou, passou veneno e não resolveu",
    "Mora em casa ou apartamento",
    "Quer eliminar sem dedetizar tudo",
    "Quer resolver antes que vire infestação",
  ];

  return (
    <section className="section-alt">
      <div className="section-container">
        <h2 className="section-title">
          A Fórmula 3P é <span className="text-primary">para você que:</span>
        </h2>

        <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
          <ul className="space-y-4">
            {targets.map((target, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-success flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-success-foreground" />
                </div>
                <span className="text-foreground font-medium">{target}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
