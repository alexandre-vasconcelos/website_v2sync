import { SiAmazon, SiGooglecloud, SiAnsible, SiDocker, SiKubernetes, SiPostgresql, SiMongodb, SiPython, SiOracle, SiMysql, SiN8N } from "react-icons/si";

export function Technologies() {
  const techs = [
    { icon: SiAmazon, name: "AWS" },
    { icon: SiGooglecloud, name: "Google Cloud" },
    { icon: SiOracle, name: "Oracle" },
    { icon: SiMysql, name: "SQL" },
    { icon: SiN8N, name: "n8n" },
    { icon: SiAnsible, name: "Ansible" },
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

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 max-w-5xl mx-auto">
          {techs.map((tech, index) => (
            <div key={index} className="group flex flex-col items-center gap-4 w-24 md:w-32 relative">
              <div className="absolute inset-0 bg-primary/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <tech.icon className="relative w-12 h-12 md:w-14 md:h-14 text-gray-500 group-hover:text-white transition-all duration-300 transform group-hover:scale-110" />
              <span className="relative text-sm font-medium text-gray-500 group-hover:text-primary transition-colors duration-300">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
