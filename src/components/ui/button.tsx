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
        primary: "bg-secondary text-primary hover:bg-secondary/90 shadow-sm uppercase tracking-wider font-bold",
        secondary: "bg-accent text-primary hover:bg-accent/90 shadow-sm uppercase tracking-wider font-bold",
        outline: "border-2 border-secondary text-secondary hover:bg-secondary hover:text-primary uppercase tracking-wider font-bold",
        ghost: "text-secondary hover:bg-secondary/5 hover:text-secondary",
    };

    const sizes = {
        sm: "h-9 px-4 text-xs",
        md: "h-11 px-6 text-sm",
        lg: "h-14 px-10 text-base",
    };

    return cn(
        "inline-flex items-center justify-center rounded-none transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-secondary disabled:pointer-events-none disabled:opacity-50",
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
