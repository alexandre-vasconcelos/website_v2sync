import { cn } from "@/lib/utils";
import logoImage from "@assets/image-removebg-preview (1)_1764448287489.png";

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
        className="h-28 w-auto object-contain"
      />
    </div>
  );
}
