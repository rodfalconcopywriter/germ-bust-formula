import { Mail, MessageCircle, Zap } from "lucide-react";

const DeliverySection = () => {
  return (
    <section className="section-alt">
      <div className="section-container">
        <h2 className="section-title">Como vou receber?</h2>

        <div className="bg-card border-2 border-success/30 rounded-2xl p-6 md:p-8 text-center">
          <div className="flex justify-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center">
              <Mail className="w-6 h-6 text-success" />
            </div>
            <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-success" />
            </div>
          </div>

          <p className="text-lg text-foreground font-medium mb-2">
            Após o pagamento, você recebe o acesso <strong>imediatamente</strong>
          </p>
          <p className="text-lg text-foreground font-medium mb-4">
            por e-mail e WhatsApp.
          </p>
          
          <div className="flex items-center justify-center gap-2 text-success font-semibold">
            <Zap className="w-5 h-5" />
            <span>Sem espera. Sem complicação.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;
