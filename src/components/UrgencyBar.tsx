import { AlertTriangle } from "lucide-react";

const UrgencyBar = () => {
  return (
    <div className="urgency-bar">
      <div className="flex items-center justify-center gap-2 max-w-2xl mx-auto">
        <AlertTriangle className="w-4 h-4 flex-shrink-0" />
        <span>
          <strong>Atenção:</strong> Infestação de baratas francesinhas se espalha rápido — agir cedo evita colônia.
        </span>
      </div>
    </div>
  );
};

export default UrgencyBar;
