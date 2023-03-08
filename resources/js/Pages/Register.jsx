import ButtonLoginRegister from "@/Components/ButtonLoginRegister";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import { useForm, Link } from "@inertiajs/react";
import { useState, useEffect } from "react";
import Navbar from "@/Partials/Navbar";

const Register = () => {
    let [passwordSame, setPasswordSame] = useState(false);
    const [IsMobile, setIsMobile] = useState(false);

    const { data, setData, post } = useForm({
        fullname: "",
        email: "",
        password: "",
        nik: "",
        nomor_telepon: "",
    });

    const handlePassword = (e) => {
        if (e.target.value === data.password) {
            setPasswordSame(true);
            console.log("passwordSame");
        } else {
            setPasswordSame(false);
            console.log("passwordNotSame");
        }
    };

    const buttonCheckComplete = () => {
        if (
            data.fullname &&
            data.email &&
            data.password &&
            data.nik &&
            data.nomor_telepon
        ) {
            if (passwordSame) {
                return false;
            } else {
                return true;
            }
        } else {
            return true;
        }
    };

    const handleRegister = (e) => {
        e.preventDefault();
        post(route("register"));
    };

    useEffect(() => {
        if (window.innerWidth <= 768) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    }, []);

    return (
        <div className="grid lg:grid-cols-2">
            {IsMobile && <Navbar />}

            <div
                className="h-full w-full bg-blue-600 hidden lg:flex shrink"
                id="login-onboarding"
            ></div>
            <div className="grid place-items-center h-screen">
                <div className="card  bg-base-100 max-w-lg w-full">
                    <div className="card-body p-[50px] flex flex-col gap-[20px]">
                        <h1 className="text-[32px] font-semibold">Register</h1>
                        <div className="grid grid-cols-1 gap-4">
                            <div className="flex flex-col gap-3">
                                <Label text={"Alamat Email"} />
                                <Input
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                />
                            </div>
                            <div className="flex flex-col gap-3">
                                <Label text={"Nama Lengkap"} />
                                <Input
                                    type="fullname"
                                    name="fullname"
                                    value={data.fullname}
                                    onChange={(e) =>
                                        setData("fullname", e.target.value)
                                    }
                                />
                            </div>
                            <div className="flex flex-col gap-3">
                                <Label text={"Password"} />
                                <Input
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                />
                            </div>
                            <div className="flex flex-col gap-3">
                                <Label text={"NIK"} />
                                <Input
                                    type="number"
                                    name="nik"
                                    value={data.nik}
                                    onChange={(e) =>
                                        setData("nik", e.target.value)
                                    }
                                />
                            </div>
                            <div className="flex flex-col gap-3">
                                <Label text={"Konfirmasi Password"} />
                                <Input
                                    type="password"
                                    name="confirm_password"
                                    onChange={(e) => handlePassword(e)}
                                />
                            </div>
                            <div className="flex flex-col gap-3">
                                <Label text={"Nomor Telepon"} />
                                <Input
                                    type="number"
                                    name="nomor_telepon"
                                    value={data.nomor_telepon}
                                    onChange={(e) =>
                                        setData("nomor_telepon", e.target.value)
                                    }
                                />
                            </div>
                        </div>
                        <ButtonLoginRegister
                            text={"Register"}
                            onClick={(e) => handleRegister(e)}
                            disabled={buttonCheckComplete()}
                        />

                        <p className="text-[12px] md:text-[16px]">
                            Sudah Punya Akun?{" "}
                            <Link
                                href="/login"
                                className="text-center underline underline-offset-1  text-[#868B90]"
                            >
                                Login
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
