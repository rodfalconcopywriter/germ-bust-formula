import { CheckCircle, Award } from "lucide-react";

const AuthoritySection = () => {
  const credentials = [
    "Experiência prática em controle de baratas germânicas",
    "Atuação direta em ambientes residenciais",
    "Métodos focados em causa, não paliativo",
  ];

  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <h2 className="section-title">
          Método baseado em <span className="text-primary">experiência real</span> em controle de pragas
        </h2>
        <p className="text-center text-muted-foreground text-sm sm:text-base mb-6 sm:mb-8">
          Conheça o especialista por trás da Fórmula 3P
        </p>

        <div className="bg-white border border-border/50 rounded-xl sm:rounded-2xl p-5 sm:p-8 shadow-sm max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-8">
            {/* Foto do especialista */}
            <div className="flex-shrink-0">
              <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border-2 border-primary/30">
                <Award className="w-12 h-12 sm:w-16 sm:h-16 text-primary" />
              </div>
            </div>

            {/* Conteúdo */}
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1">
                Richard Floriani
              </h3>
              <p className="text-sm sm:text-base text-primary font-medium mb-1">
                Especialista em Controle de Pragas
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground mb-4">
                Mais de uma década lidando com infestações reais em residências
              </p>

              <p className="text-sm sm:text-base text-foreground leading-relaxed mb-4">
                A Fórmula 3P é baseada em práticas reais usadas no controle de baratas francesinhas, adaptadas para aplicação doméstica simples e segura.
                <br className="hidden sm:block" />
                <span className="font-medium"> O foco não é matar baratas isoladas, mas quebrar o ciclo da colônia.</span>
              </p>

              {/* Bullet points */}
              <ul className="space-y-2 mb-4">
                {credentials.map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-xs sm:text-sm text-muted-foreground italic">
                Aqui você aprende o método certo, não apenas receitas soltas da internet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
