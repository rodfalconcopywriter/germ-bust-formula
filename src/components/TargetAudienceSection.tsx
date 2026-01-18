import { Check } from "lucide-react";

const TargetAudienceSection = () => {
  const targets = [
    "Está lidando com baratas pequenas (francesinhas)",
    "Já testou receitas da internet e não funcionou",
    "Quer entender o porquê funciona",
    "Quer fazer o gel certo uma única vez",
    "Quer eliminar sem dedetizar a casa inteira",
  ];

  return (
    <section className="section-alt">
      <div className="section-container">
        <h2 className="section-title">
          A Fórmula 3P é <span className="text-primary">para você que:</span>
        </h2>

        <div className="bg-card border border-border rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8">
          <ul className="space-y-3 sm:space-y-4">
            {targets.map((target, index) => (
              <li key={index} className="flex items-start gap-2.5 sm:gap-3">
                <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-success flex items-center justify-center mt-0.5">
                  <Check className="w-3 h-3 sm:w-4 sm:h-4 text-success-foreground" />
                </div>
                <span className="text-foreground font-medium text-sm sm:text-base">{target}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
