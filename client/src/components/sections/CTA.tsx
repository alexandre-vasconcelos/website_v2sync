import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/40 to-background" />
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
          Pronto para evoluir sua <span className="text-primary">Infraestrutura?</span>
        </h2>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Fale com um de nossos especialistas agora mesmo e descubra como podemos otimizar sua tecnologia.
        </p>
        
        <Button 
          size="lg" 
          className="bg-primary hover:bg-primary/90 text-white rounded-full h-16 px-10 text-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:-translate-y-1"
          onClick={() => window.open("https://wa.me/1234567890", "_blank")}
        >
          <MessageCircle className="mr-3 w-6 h-6" />
          Falar com Consultor no WhatsApp
        </Button>
      </div>
    </section>
  );
}
