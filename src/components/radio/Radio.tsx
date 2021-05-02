import React, { InputHTMLAttributes } from "react";

const sizeClassnames = {
    big: "h-4 w-4",
    small: "h-3 w-3",
    tiny: "h-2 w-2",
};

const labelSizeClassnames = {
    big: "text-md",
    small: "text-sm",
    tiny: "text-xs",
};

const colorClassnames = {
    primary: "text-primary-700",
};

type RadioProps = {
    size?: keyof typeof sizeClassnames;
    color?: keyof typeof colorClassnames;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "size">;

export function Radio({
    children,
    size = "big",
    color = "primary",
    id,
    className = "",
    ...props
}: RadioProps) {
    return (
        <label className="inline-flex items-center">
            <input
                type="radio"
                className={`form-radio focus:ring-0 focus:ring-offset-0 border-${color}-700 ${colorClassnames[color]} ${sizeClassnames[size]} ${className}`}
                id={id}
                {...props}
            />
            <label className={`ml-2 ${labelSizeClassnames[size]}`} htmlFor={id}>
                {children}
            </label>
        </label>
    );
}
