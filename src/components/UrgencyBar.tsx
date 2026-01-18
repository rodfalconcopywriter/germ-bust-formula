import { AlertTriangle } from "lucide-react";

const UrgencyBar = () => {
  return (
    <div className="urgency-bar">
      <div className="flex items-center justify-center gap-1.5 sm:gap-2 max-w-2xl mx-auto">
        <AlertTriangle className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
        <span className="text-xs sm:text-sm font-medium">
          <strong>Atenção:</strong> Não é o gel que falha. É o preparo errado.
        </span>
      </div>
    </div>
  );
};

export default UrgencyBar;
