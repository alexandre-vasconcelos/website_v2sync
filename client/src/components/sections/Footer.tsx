import { MessageCircle, Mail, MapPin } from "lucide-react";
import logo from "@assets/image_1764447408174.png";

export function Footer() {
  return (
    <footer className="bg-black/20 border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="mb-6">
              <img src={logo} alt="TechSync Solutions" className="h-10 w-auto object-contain" />
            </div>
            <p className="text-gray-400">
              Sincronizando sua infraestrutura com o futuro através de soluções inteligentes em nuvem e segurança.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {["Início", "Sobre", "Serviços", "Soluções", "Contato"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Serviços</h4>
            <ul className="space-y-3">
              {["Cloud Computing", "Monitoramento NOC", "Segurança SOC", "Automação"].map((item) => (
                <li key={item} className="text-gray-400 hover:text-primary transition-colors cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400">
                <MessageCircle className="w-5 h-5 text-primary" />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-primary" />
                <span>contato@techsync.com</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-primary" />
                <span>São Paulo, SP</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2025 TechSync Solutions. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-white text-sm">Privacidade</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
