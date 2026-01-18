import { Zap, FileText, Home } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-2xl mx-auto px-5">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Zap className="w-4 h-4" />
            Acesso imediato
          </span>
          <span className="flex items-center gap-1.5">
            <FileText className="w-4 h-4" />
            Método passo a passo
          </span>
          <span className="flex items-center gap-1.5">
            <Home className="w-4 h-4" />
            Método doméstico
          </span>
        </div>
        <p className="text-center text-xs text-muted-foreground mt-6">
          © 2025 Fórmula 3P. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
