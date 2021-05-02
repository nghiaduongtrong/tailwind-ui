import React from "react";
import { Button } from "../../components/button/Button";
import { Checkbox } from "../../components/checkbox/Checkbox";
import { Input } from "../../components/input/Input";
import { InputErrorMsg } from "../../components/input_error_msg/InputErrorMsg";

export function Login() {
    return (
        <div className="max-w-md shadow-md p-6">
            <form>
                <div className="font-semibold mb-1">Email</div>
                <Input
                    type="email"
                    size="small"
                    error="Email invalid"
                    placeholder="Email or Phone Number"
                />
                <InputErrorMsg>Email invalid.</InputErrorMsg>
                <div className="font-semibold mb-1 mt-2">Password</div>
                <Input className="" size="small" placeholder="Password" />
                <InputErrorMsg>Password invalid.</InputErrorMsg>
                <div className="flex justify-between mt-1">
                    <Checkbox>Remember me</Checkbox>
                    <div className="text-primary-700 cursor-pointer font-semibold">
                        Forgot Password?
                    </div>
                </div>
                <Button type="submit" className="w-full text-white mt-6">
                    Sign in
                </Button>
            </form>
            <div className="border-b w-full mt-4 mb-4" />
            <div>
                Don't you have an account yet?
                <span className="text-primary-700 cursor-pointer">
                    Register now
                </span>
            </div>
        </div>
    );
}
