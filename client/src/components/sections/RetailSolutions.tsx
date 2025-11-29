import pdvImage from "@assets/generated_images/modern_point_of_sale_interface_mockup.png";
import totemImage from "@assets/generated_images/self_service_kiosk_totem.png";
import { Check } from "lucide-react";

export function RetailSolutions() {
  return (
    <section className="py-24 bg-secondary/10 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">Soluções para Varejo</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mt-2">
            Modernize seu <span className="text-primary">Ponto de Venda</span>
          </h2>
        </div>

        <div className="space-y-32">
          {/* PDV Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative group">
                <div className="absolute -inset-4 bg-primary/20 blur-2xl rounded-xl opacity-30 group-hover:opacity-50 transition-opacity" />
                <img 
                  src={pdvImage} 
                  alt="Sistema PDV Interface" 
                  className="relative rounded-xl shadow-2xl border border-white/10 transform group-hover:scale-[1.01] transition-transform duration-500"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-white">Sistema PDV Completo</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Um sistema de frente de caixa robusto, intuitivo e integrado. Gerencie vendas, estoque e clientes em uma única interface moderna e rápida.
              </p>
              <ul className="space-y-3">
                {["Controle de Estoque em Tempo Real", "Emissão de Notas Fiscais (NFC-e/SAT)", "Gestão Financeira Integrada", "Relatórios de Vendas Detalhados"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-300">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-primary" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Totem Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-white">Totem de Autoatendimento</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Reduza filas e aumente o ticket médio com nossos totens de autoatendimento. Uma experiência de compra autônoma e fluida para seus clientes.
              </p>
              <ul className="space-y-3">
                {["Interface Touch Intuitiva", "Pagamento Integrado (TEF)", "Personalização Visual da Marca", "Cardápio Digital Interativo"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-300">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-primary" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center">
              <div className="relative group max-w-md">
                <div className="absolute -inset-4 bg-blue-500/20 blur-3xl rounded-full opacity-30 group-hover:opacity-50 transition-opacity" />
                <img 
                  src={totemImage} 
                  alt="Totem de Autoatendimento" 
                  className="relative rounded-2xl shadow-2xl border border-white/10 transform group-hover:translate-y-2 transition-transform duration-500"
                  style={{ maxHeight: "600px", width: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
