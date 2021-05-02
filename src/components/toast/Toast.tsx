import React, { Fragment, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { Transition } from "@headlessui/react";

const positionClassnames = {
    "top-left": "top-2 left-2",
    "top-right": "top-2 right-2",
    "bottom-left": "bottom-2 left-2",
    "bottom-right": "bottom-2 right-2",
    center: "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
};

type ToastDurations = "default" | "sticky";

type ToastProps = {
    position?: keyof typeof positionClassnames;
    duration?: ToastDurations;
    open?: boolean;
    onClose?: () => void;
    className?: string;
    children?: any;
};

export function Toast({
    position = "center",
    duration = "default",
    open = false,
    onClose,
    className = "",
    children,
}: ToastProps) {
    const onCloseRef = useRef(onClose);
    onCloseRef.current = onClose;

    useEffect(() => {
        if (duration === "sticky") {
            return;
        }

        const timer = setTimeout(() => {
            onCloseRef.current?.();
        }, 7000);

        return () => {
            clearTimeout(timer);
        };
    }, [duration, open]);

    return ReactDOM.createPortal(
        <div
            className={`absolute ${positionClassnames[position]} transition duration-300 ease-in-out`}
        >
            <Transition
                as={Fragment}
                show={open}
                enter="transform transition duration-[400ms]"
                enterFrom="opacity-0 rotate-[-120deg] scale-50"
                enterTo="opacity-100 rotate-0 scale-100"
                leave="transform duration-200 transition ease-in-out"
                leaveFrom="opacity-100 rotate-0 scale-100 "
                leaveTo="opacity-0 scale-95 "
            >
                <div className="relative">
                    <div
                        className={`backdrop-blur-sm backdrop-filter bg-gray-900 bg-opacity-50 rounded p-2 inline-flex text-gray-50 ${className}`}
                    >
                        {children}
                    </div>
                    <div
                        className="absolute -top-2 -right-2 cursor-pointer bg-coolGray-50 rounded-full"
                        onClick={onClose}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                </div>
            </Transition>
        </div>,

        document.body
    );
}
