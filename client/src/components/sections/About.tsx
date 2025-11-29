import { Database, Shield, Cloud, Bot } from "lucide-react";
import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
            Sobre a <span className="text-primary">Consultoria</span>
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            Somos especialistas em transformar infraestruturas complexas em sistemas eficientes, seguros e escaláveis. 
            Nossa missão é garantir que sua empresa opere com máxima performance e segurança no ambiente digital.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: Cloud, label: "Cloud Expert" },
            { icon: Database, label: "Gestão de Dados" },
            { icon: Shield, label: "Segurança (SOC)" },
            { icon: Bot, label: "Automação" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center gap-4 p-6 bg-card rounded-xl border border-white/5 hover:border-primary/50 transition-colors"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <item.icon className="w-8 h-8" />
              </div>
              <span className="font-bold text-white text-lg">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
