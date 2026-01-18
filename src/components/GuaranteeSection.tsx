import { Shield } from "lucide-react";

const GuaranteeSection = () => {
  return (
    <section className="section-alt">
      <div className="section-container">
        <h2 className="section-title">Teste sem risco</h2>

        <div className="bg-card border-2 border-success rounded-2xl p-6 md:p-8 text-center">
          <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-success" />
          </div>

          <p className="text-lg text-foreground mb-2">
            Se você aplicar a Fórmula 3P e não entender o método,
          </p>
          <p className="text-lg font-bold text-foreground">
            você pode solicitar reembolso em até <span className="text-success">7 dias</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
