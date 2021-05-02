import React, { forwardRef, InputHTMLAttributes } from "react";

const sizeClassnames = {
    big: "py-2 px-4",
    small: "py-1 px-4",
    tiny: "px-4",
};

type InputProps = {
    textarea?: boolean;
    rows?: number;
    error?: string;
    transparent?: boolean;
    size?: keyof typeof sizeClassnames;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "size">;

export const Input = forwardRef<HTMLInputElement, InputProps>(
    (
        { className, textarea, error, transparent, size = "big", ...props },
        ref
    ) => {
        const bg = transparent ? `bg-transparent` : `border border-primary-300`;
        const ring = error
            ? `ring ring-error-300 focus:ring focus:ring-error-300 border-error-400`
            : "";
        const cn = `w-full rounded text-primary-700 placeholder-primary-300 focus:outline-none focus:ring focus:ring-primary-200 ${bg} ${ring} ${sizeClassnames[size]} ${className}`;
        return textarea ? (
            <textarea
                ref={ref as any}
                className={cn}
                data-testid="textarea"
                {...(props as any)}
            />
        ) : (
            <input ref={ref} className={cn} data-testid="input" {...props} />
        );
    }
);
