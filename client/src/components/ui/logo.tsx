import { cn } from "@/lib/utils";
import logoImage from "@assets/Pasted-20251129-172240_preview_rev_1_1764447795368.png";

interface LogoProps {
  className?: string;
  variant?: "default" | "footer";
}

export function Logo({ className, variant = "default" }: LogoProps) {
  return (
    <div className={cn("relative", className)}>
      <img 
        src={logoImage} 
        alt="V2 SYNC Logo" 
        className="h-[3.6rem] w-auto object-contain"
      />
    </div>
  );
}
