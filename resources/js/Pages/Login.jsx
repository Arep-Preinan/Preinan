import ButtonLoginRegister from "@/Components/ButtonLoginRegister";
import Label from "@/Components/Label";
import Input from "./../Components/Input";
import { useState } from "react";

const Login = () => {
    const [formData, setFormData] = useState({
        name: "",
        password: "",
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="grid place-items-center h-screen">
                <div className="card bg-base-100 md:shadow-md max-w-lg w-full">
                    <div className="card-body p-[50px] flex flex-col gap-[20px]">
                        <h1 className="text-[32px] font-semibold">Login</h1>
                        <div className="email flex flex-col gap-[12px]">
                            <Label text={"Alamat Email"} />
                            <Input
                                type="email"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <div className="password">
                                <div className="flex flex-col gap-[12px]">
                                    <Label text={"Password"} />
                                    <Input
                                        name="password"
                                        value={formData.password}
                                        type="password"
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="flex justify-end">
                                {" "}
                                <a href="">
                                    <p className="text-[#868B90] underline underline-offset-1 text-[12px] md:text-[16px] mt-3">
                                        Forgot my password
                                    </p>
                                </a>
                            </div>
                        </div>
                        <ButtonLoginRegister
                            text={"Login"}
                            disabled={
                                formData.name.length > 0 &&
                                formData.password.length > 0
                                    ? false
                                    : true
                            }
                        />
                        <a href="" className="text-center text-[#868B90]">
                            <p className="underline underline-offset-1 text-[12px] md:text-[16px]">
                                Create New Account
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Login;
