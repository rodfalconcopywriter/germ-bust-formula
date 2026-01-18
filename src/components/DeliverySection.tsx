import { Mail, MessageCircle, Zap } from "lucide-react";

const DeliverySection = () => {
  return (
    <section className="section-alt">
      <div className="section-container">
        <h2 className="section-title">Como vou receber?</h2>

        <div className="bg-card border-2 border-success/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 text-center">
          <div className="flex justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-success/10 flex items-center justify-center">
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-success" />
            </div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-success/10 flex items-center justify-center">
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-success" />
            </div>
          </div>

          <p className="text-base sm:text-lg text-foreground font-medium mb-1 sm:mb-2">
            Após o pagamento, você recebe <strong>imediatamente</strong>
          </p>
          <p className="text-base sm:text-lg text-foreground font-medium mb-3 sm:mb-4">
            por e-mail e WhatsApp.
          </p>
          
          <div className="flex items-center justify-center gap-2 text-success font-semibold text-sm sm:text-base">
            <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Sem espera. Sem complicação.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;
