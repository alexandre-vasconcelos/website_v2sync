import { Cloud, Monitor, ShieldCheck, Database, Bot, MessageSquareText, ShoppingCart, TabletSmartphone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Cloud,
    title: "Cloud & Infraestrutura",
    description: "Migração, arquitetura e gestão de servidores em nuvem de alta performance.",
  },
  {
    icon: Monitor,
    title: "Monitoramento NOC",
    description: "Vigilância 24/7 da sua infraestrutura para garantir disponibilidade total.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança SOC",
    description: "Monitoramento avançado de ameaças e proteção de dados sensíveis.",
  },
  {
    icon: Database,
    title: "Banco de Dados",
    description: "Otimização, backup e administração especializada de DBs SQL e NoSQL.",
  },
  {
    icon: Bot,
    title: "Automação de Processos",
    description: "Automatize tarefas repetitivas e aumente a eficiência operacional.",
  },
  {
    icon: MessageSquareText,
    title: "Agente WhatsApp",
    description: "Chatbots inteligentes para atendimento e suporte automatizado.",
  },
  {
    icon: ShoppingCart,
    title: "Sistema PDV",
    description: "Software completo para gestão de vendas e frente de caixa moderno.",
  },
  {
    icon: TabletSmartphone,
    title: "Autoatendimento",
    description: "Soluções de totens e quiosques digitais para otimizar o atendimento.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Nossos <span className="text-primary">Serviços</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Soluções tecnológicas completas para impulsionar seu negócio
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-white/5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 group">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl text-white">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
