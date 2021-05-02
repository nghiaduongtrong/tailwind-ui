import React, {
    ButtonHTMLAttributes,
    DetailedHTMLProps,
    ReactNode,
} from "react";
import { Spinner } from "../spinner/Spinner";

const sizeClassnames = {
    big: "py-2 px-6 text-sm",
    small: "px-2 py-1 text-sm",
    tiny: "px-1 text-sm",
};

const colorClassnames = {
    primary:
        "bg-primary-700 hover:bg-primary-600 disabled:text-primary-disabled disabled:bg-primary-hover",
    transparent: "bg-transparent border"
};

type ButtonProps = DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
> & {
    size?: keyof typeof sizeClassnames;
    color?: keyof typeof colorClassnames;
    loading?: boolean;
    icon?: ReactNode;
};

export function Button({
    children,
    size = "big",
    color = "primary",
    disabled,
    loading,
    icon,
    className = "",
    ...props
}: ButtonProps) {
    return (
        <button
            disabled={disabled || loading}
            className={`flex rounded outline-none focus:outline-none focus:ring focus:ring-${color}-300 ${sizeClassnames[size]} ${colorClassnames[color]} font-bold flex items-center justify-center ${className}`}
            data-testid="button"
            {...props}
        >
            <span className={loading ? "opacity-0" : `flex items-center`}>
                {icon ? (
                    <span className={`mr-2 items-center`}>{icon}</span>
                ) : null}
                {children}
            </span>
            {loading ? (
                <span className={`absolute`}>
                    <Spinner size={size === "small" ? "2" : "4"} />
                </span>
            ) : null}
        </button>
    );
}
