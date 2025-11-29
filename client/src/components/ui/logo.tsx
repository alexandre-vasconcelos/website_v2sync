import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "default" | "footer";
}

export function Logo({ className, variant = "default" }: LogoProps) {
  return (
    <div className={cn("flex flex-col", className)}>
      <div className="flex items-center gap-3">
        {/* Icon / V2 Badge */}
        <div className="relative w-12 h-12 bg-[#FFB703] rounded-tl-2xl rounded-tr-2xl rounded-br-2xl rounded-bl-none flex items-center justify-center shrink-0 shadow-lg transform rotate-[-10deg] hover:rotate-0 transition-transform">
          <span className="font-display font-black text-2xl text-transparent" style={{ WebkitTextStroke: "1px #000" }}>
            v2
          </span>
          <span className="absolute font-display font-black text-2xl text-[#FFB703] translate-x-[2px] translate-y-[2px]" style={{ WebkitTextStroke: "1px #000" }}>
            v2
          </span>
        </div>

        {/* Text Content */}
        <div className="flex flex-col -space-y-1">
          <span className="text-3xl md:text-4xl font-black text-white tracking-tighter leading-none font-display">
            SYNC
          </span>
          <span className="text-[8px] md:text-[10px] text-white/90 tracking-[0.2em] uppercase font-medium">
            Sincronizada com o futuro
          </span>
        </div>
      </div>
      
      {/* Underline */}
      <div className="h-0.5 w-full bg-white mt-1 rounded-full opacity-80" />
    </div>
  );
}
