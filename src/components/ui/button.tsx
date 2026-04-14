import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    isLoading?: boolean;
}

export const buttonVariants = ({
    variant = "primary",
    size = "md",
    className
}: {
    variant?: "primary" | "secondary" | "outline" | "ghost",
    size?: "sm" | "md" | "lg",
    className?: string
}) => {
    const variants = {
        primary: "bg-accent text-primary hover:bg-accent-hover shadow-lg shadow-accent/20 uppercase tracking-wider font-bold transition-all duration-300 hover:shadow-accent/30",
        secondary: "bg-white/10 text-white border border-white/10 hover:bg-white/15 hover:border-accent/30 backdrop-blur-sm uppercase tracking-wider font-bold transition-all duration-300",
        outline: "border border-accent/40 text-accent hover:bg-accent/10 hover:border-accent uppercase tracking-wider font-bold transition-all duration-300",
        ghost: "text-white/80 hover:text-white hover:bg-white/5 transition-all duration-300",
    };

    const sizes = {
        sm: "h-9 px-4 text-xs",
        md: "h-11 px-6 text-sm",
        lg: "h-14 px-10 text-base",
    };

    return cn(
        "inline-flex items-center justify-center rounded-none transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent/50 disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        sizes[size],
        className
    );
};


const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", isLoading, children, ...props }, ref) => {
        return (
            <button
                ref={ref}
                disabled={isLoading || props.disabled}
                className={buttonVariants({ variant, size, className })}
                {...props}
            >
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {children}
            </button>
        );
    }
);
Button.displayName = "Button";

export { Button };
