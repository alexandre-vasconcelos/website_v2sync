import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Carlos Mendes",
      role: "CTO, TechFinance",
      content: "A consultoria transformou nossa infraestrutura. A migração para a nuvem foi perfeita e o monitoramento 24/7 nos dá total tranquilidade.",
    },
    {
      name: "Amanda Silva",
      role: "Diretora de Operações, Logistix",
      content: "O time de segurança identificou vulnerabilidades críticas que nem sabíamos que existiam. Profissionalismo de alto nível.",
    },
    {
      name: "Roberto Santos",
      role: "CEO, InovaSoft",
      content: "As automações implementadas economizaram centenas de horas da nossa equipe. O ROI foi imediato. Recomendo fortemente.",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white text-center mb-16">
          O que dizem nossos <span className="text-primary">Clientes</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <Card key={i} className="bg-card border-white/5">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{t.content}"</p>
                <div>
                  <p className="font-bold text-white">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
