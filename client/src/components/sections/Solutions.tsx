import { CheckCircle2 } from "lucide-react";

export function Solutions() {
  const benefits = [
    "Redução de custos operacionais",
    "Maior segurança de dados",
    "Monitoramento proativo 24/7",
    "Automação de processos manuais",
    "Suporte ágil via WhatsApp",
    "Escalabilidade sob demanda",
  ];

  return (
    <section id="solutions" className="py-24 bg-blue-950/30">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-8">
            Por que escolher nossa <span className="text-primary">Consultoria?</span>
          </h2>
          <div className="grid gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                <span className="text-lg text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="order-1 md:order-2 relative">
          <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
          <div className="relative bg-card border border-white/5 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">Resultados Reais</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-sm text-gray-400 mb-2">
                  <span>Uptime Garantido</span>
                  <span className="text-primary">99.9%</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[99.9%]" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm text-gray-400 mb-2">
                  <span>Redução de Incidentes</span>
                  <span className="text-primary">85%</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[85%]" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm text-gray-400 mb-2">
                  <span>ROI Médio</span>
                  <span className="text-primary">300%</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[75%]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
