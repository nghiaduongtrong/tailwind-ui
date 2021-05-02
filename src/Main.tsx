import React, { useState } from "react";
import { Button } from "./components/button/Button";
import { Checkbox } from "./components/checkbox/Checkbox";
import { Input } from "./components/input/Input";
import { InputErrorMsg } from "./components/input_error_msg/InputErrorMsg";
import { Radio } from "./components/radio/Radio";
import { Spinner } from "./components/spinner/Spinner";
import { Modal } from "./components/modal/Modal";
import { ModalConfirm } from "./components/modal_confirm/ModalConfirm";
import { Toast } from "./components/toast/Toast";
import { Login } from "./layouts/login/Login";
import { Register } from "./layouts/register/Register";

export function Main() {
    const [openToast, setOpenToast] = useState(false);
    
    return (
        <div className="container mx-auto py-4">
            {/* <Button color="primary" onClick={() => setOpenToast(!openToast)}>Example button</Button>
            <Button color="primary" size="small" className="mt-2">
                Example button
            </Button>
            <Button color="primary" size="tiny" className="mt-2">
                Example button
            </Button>

            <Spinner className="text-blue-700" />
            <div className="flex flex-col">
                <Checkbox>Example checkbox</Checkbox>
                <Checkbox size="small">Example checkbox</Checkbox>
                <Checkbox size="tiny">Example checkbox</Checkbox>
            </div>
            <div className="flex flex-col">
                <Radio id="radio-example">Radio example</Radio>
                <Radio id="radio-example-2" size="small">
                    Radio example
                </Radio>
                <Radio id="radio-example-3" size="tiny">
                    Radio example
                </Radio>
            </div>
            <Input placeholder="input placeholder" />

            <Input
                placeholder="input placeholder"
                error="error message"
                className="mt-2"
            />
            <InputErrorMsg>Error message.</InputErrorMsg>
            <Input textarea placeholder="input placeholder" className="mt-2" />
            <Modal open={false}>
                Modal content example
            </Modal>
            <ModalConfirm open={false}/>
            <Toast position="center" open={openToast} onClose={() => setOpenToast(false)}>
                Example toast
            </Toast> */}
            <div className="flex gap-4">
                <Login />
            <Register />
            </div>
            
        </div>
    );
}
