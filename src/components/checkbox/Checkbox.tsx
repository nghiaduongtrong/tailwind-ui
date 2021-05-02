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

type CheckboxProps = {
    size?: keyof typeof sizeClassnames;
    color?: keyof typeof colorClassnames;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "size">;

export function Checkbox({
    children,
    size = "big",
    color = "primary",
    className = "",
    ...props
}: CheckboxProps) {
    return (
        <label className="inline-flex items-center">
            <input
                type="checkbox"
                className={`form-checkbox rounded-sm border-${color}-700 focus:ring-0 focus:ring-offset-0 ${colorClassnames[color]} ${sizeClassnames[size]} ${className}`}
                {...props}
            />
            <span className={`${labelSizeClassnames[size]} ml-2`}>
                {children}
            </span>
        </label>
    );
}
