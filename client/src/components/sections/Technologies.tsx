import tuxLogo from "@assets/generated_images/linux_tux_mascot_3d_render.png";
import { SiAmazon, SiGooglecloud, SiAnsible, SiDocker, SiKubernetes, SiPostgresql, SiMongodb, SiPython } from "react-icons/si";

export function Technologies() {
  const techs = [
    { icon: SiAmazon, name: "AWS" },
    { icon: SiGooglecloud, name: "Google Cloud" },
    { icon: SiAnsible, name: "Ansible" }, // Automation focus
    { icon: SiDocker, name: "Docker" },
    { icon: SiKubernetes, name: "Kubernetes" },
    { icon: SiPostgresql, name: "PostgreSQL" },
    { icon: SiMongodb, name: "MongoDB" },
    { icon: SiPython, name: "Python" },
  ];

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-16">
          Tecnologias que <span className="text-primary">Utilizamos</span>
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
          {/* Main Linux Tux Feature */}
          <div className="w-32 h-32 md:w-40 md:h-40 relative group">
            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full group-hover:bg-primary/40 transition-all duration-500" />
            <img 
              src={tuxLogo} 
              alt="Linux" 
              className="relative w-full h-full object-contain drop-shadow-2xl hover:scale-110 transition-transform duration-300"
            />
          </div>

          {/* Other Tech Logos */}
          {techs.map((tech, index) => (
            <div key={index} className="group flex flex-col items-center gap-2">
              <tech.icon className="w-12 h-12 md:w-16 md:h-16 text-gray-500 group-hover:text-white transition-colors duration-300" />
              <span className="text-sm text-gray-600 group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100 absolute -bottom-6">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
