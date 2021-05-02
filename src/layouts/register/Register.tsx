import React from "react";
import { Button } from "../../components/button/Button";
import { Checkbox } from "../../components/checkbox/Checkbox";
import { Input } from "../../components/input/Input";
import { InputErrorMsg } from "../../components/input_error_msg/InputErrorMsg";

export function Register() {
    return (
        <div className="max-w-md shadow-md p-6">
            <form>
                <div className="font-semibold mb-1">First Name</div>
                <Input className="" size="small" error="First name invalid" />
                <InputErrorMsg>First name invalid.</InputErrorMsg>

                <div className="font-semibold mb-1 mt-2">Last Name</div>
                <Input className="" size="small" error="First name invalid" />
                <InputErrorMsg>Last name invalid.</InputErrorMsg>

                <div className="font-semibold mb-1 mt-2">Phone Number</div>
                <Input className="" size="small" error="First name invalid" />
                <InputErrorMsg>Last name invalid.</InputErrorMsg>

                <div className="font-semibold mb-1 mt-2">Email</div>
                <Input className="" size="small" error="First name invalid" />
                <InputErrorMsg>Last name invalid.</InputErrorMsg>

                <div className="font-semibold mb-1 mt-2">Password</div>
                <Input className="" size="small" placeholder="Password" />
                <InputErrorMsg>Password invalid.</InputErrorMsg>

                <div className="font-semibold mb-1 mt-2">Confirm Password</div>
                <Input className="" size="small" error="First name invalid" />
                <InputErrorMsg>Last name invalid.</InputErrorMsg>
                <div className="mt-2">
                    <Checkbox>Yes, i want to receive emails</Checkbox>
                    <Checkbox>
                        I agree to all the Term, Privacy Policy and Fees
                    </Checkbox>
                </div>

                <Button type="submit" className="w-full text-white mt-6">
                    Create Account
                </Button>
            </form>
            <div className="border-b w-full mt-4 mb-4" />
            <div>
                Already have an account?
                <span className="text-primary-700 cursor-pointer">Log in</span>
            </div>
        </div>
    );
}
