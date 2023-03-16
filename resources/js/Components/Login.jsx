import ButtonLoginRegister from "@/Components/ButtonLoginRegister";
import Label from "@/Components/Label";
import Input from "./Input";
import { Head, Link, useForm } from "@inertiajs/react";
import Navbar from "@/Partials/Navbar";
import { useEffect, useState } from "react";
import ButtonLoading from "@/Components/ButtonLoading";
import { Button } from "@material-tailwind/react";

const Login = ({ props, handleMode }) => {
    const { data, setData, post } = useForm({
        email: "",
        password: "",
    });
    console.log(props);
    const [IsMobile, setIsMobile] = useState(false);
    let [isLoading, setLoading] = useState(false);

    const submit = (e) => {
        e.preventDefault();
        setLoading(true);
        post(route("login.auth"), {
            preserveScroll: true,
            onSuccess: () => {
                setLoading(false);
            },
            onError: () => {
                setLoading(false);
            },
        });
    };

    useEffect(() => {
        if (window.innerWidth <= 768) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    }, []);

    return (
        <div className="md:bg-[#fafafa]">
            <form>
                <Head title="Login" />
                {/* {IsMobile && <Navbar />} */}
                <div className="grid lg:grid-cols-2 ">
                    <div className="grid place-items-center h-screen lg:scale-95 xl:scale-90">
                        <div className="card bg-base-100 max-w-lg w-full">
                            <div className="card-body md:p-[50px] flex flex-col gap-[20px] md:border-2 rounded-3xl">
                                <Link href="/">
                                    <div className="flex justify-center">
                                        <img
                                            src="../images/preinannotblack.svg"
                                            alt=""
                                            className="scale-150"
                                        />
                                    </div>
                                </Link>
                                <h1 className="text-[24px] text-[#2F3F4D] font-semibold">
                                    Login
                                </h1>
                                <p className="text-[16px]">
                                    Masuk ke akun anda untuk memulai transaksi
                                </p>
                                {props.errors.status && (
                                    <div className="alert alert-error">
                                        {props.errors.status}
                                    </div>
                                )}
                                <div className="email flex flex-col gap-[12px]">
                                    <Label text={"Alamat Email"} />
                                    <Input
                                        text={"e.g. johnsmilga@gmail.com"}
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                    />
                                </div>
                                <div>
                                    <div className="password">
                                        <div className="flex flex-col gap-[12px]">
                                            <div className="flex">
                                                <Label text={"Kata Sandi"} />
                                                <a href="">
                                                    <p className="text-[#868B90] underline underline-offset-1 text-[12px] md:text-[14px]">
                                                        Lupa Kata Sandi?
                                                    </p>
                                                </a>
                                            </div>
                                            <Input
                                                name="password"
                                                type="password"
                                                value={data.password}
                                                onChange={(e) =>
                                                    setData(
                                                        "password",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <div className="form-control">
                                            <label className="label cursor-pointer flex gap-3">
                                                <input
                                                    type="checkbox"
                                                    className="checkbox checkbox-sm"
                                                />
                                                <span className="label-text text-[#868B90] text-[12px] md:text-[14px]">
                                                    ingat saya
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                {isLoading ? (
                                    <ButtonLoading />
                                ) : (
                                    <ButtonLoginRegister
                                        text={"Login"}
                                        onClick={(e) => submit(e)}
                                        disabled={
                                            data.email && data.password
                                                ? false
                                                : true
                                        }
                                    />
                                )}
                                <div className="divider">
                                    <p className="text-gray-600 text-sm">
                                        atau
                                    </p>
                                </div>
                                <div
                                    onClick={() => handleMode("register")}
                                    className="text-center text-[#868B90] hover:cursor-pointer"
                                >
                                    <p className=" text-[12px] md:text-[16px]">
                                        Belum Punya Akun?
                                        <span className="underline underline-offset-1">
                                            Buat Akun
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className=" bg-blue-600 hidden lg:flex justify-start items-start"
                        id="login-onboarding"
                    ></div>
                </div>
            </form>
        </div>
    );
};

export default Login;
