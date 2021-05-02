import React from "react";

type InputErrorMsgProps = {
    children?: any;
};

export function InputErrorMsg({ children }: InputErrorMsgProps) {
    return <div className="flex text-error-600 text-sm">{children}</div>;
}
