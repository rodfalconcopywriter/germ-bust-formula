import { Shield } from "lucide-react";

const GuaranteeSection = () => {
  return (
    <section className="section-alt">
      <div className="section-container">
        <h2 className="section-title">Teste sem risco</h2>

        <div className="bg-card border-2 border-success rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 text-center">
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4 sm:mb-6">
            <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-success" />
          </div>

          <p className="text-sm sm:text-lg text-foreground mb-1 sm:mb-2">
            Se você aplicar a Fórmula 3P e não entender o método,
          </p>
          <p className="text-sm sm:text-lg font-bold text-foreground">
            solicite reembolso em até <span className="text-success">7 dias</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
