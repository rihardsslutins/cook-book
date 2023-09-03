import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

export const buttonVariants = cva(
    "text-xl py-2 px-4 border-2 border-black font-quicksand font-black shadow-[-4px_4px_0] hover:shadow-[-2px_2px_0] hover:translate-y-[2px] hover:translate-x-[-2px] active:shadow-none active:translate-y-[4px] active:translate-x-[-4px]",
    {
        variants: {
            variant: {
                primary: "bg-orange-700",
                secondary: "bg-yellow-200"
                
            },
        },
        defaultVariants: {
            variant: "primary",
        },
    }
);

export interface ButtonProps
    // ComponentPropsWithoutRef extracts all html button props
    extends React.ComponentPropsWithoutRef<"button">,
    // VariantProps is a helper that extracts variant types
    VariantProps<typeof buttonVariants> {
    loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (props, ref) => {
        const {
            className,
            variant = "primary",
            loading = false,
            disabled = false,
            children,
            ...rest
        } = props;

        return (
            <button
                className={buttonVariants({ variant, className })}
                ref={ref}
                disabled={loading || disabled}
                {...rest}
            >
                {!loading && typeof children === "string" && children.toUpperCase()}
                {loading && "Loading.."}
            </button>
        );
    }
);
Button.displayName = "Button";

export default Button;