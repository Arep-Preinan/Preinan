import ButtonLoginRegister from "@/Components/ButtonLoginRegister";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import { useForm, Link, Head } from "@inertiajs/react";
import { useState, useEffect } from "react";
import Navbar from "@/Partials/Navbar";
import ButtonLoading from "@/Components/ButtonLoading";

const Register = ({ handleMode }) => {
    let [passwordSame, setPasswordSame] = useState(false);
    const [IsMobile, setIsMobile] = useState(false);
    let [isLoading, setLoading] = useState(false);

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
        } else {
            setPasswordSame(false);
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
        setLoading(true);
        post(route("register"), {
            preserveScroll: true,
            onSuccess: () => {
                setLoading(false);
            },
            onError: () => {},
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
        <div className="bg-[#fafafa]">
            <div className="grid xl:grid-cols-2">
                <Head title="Register" />
                <div
                    className="h-full w-full bg-blue-600 hidden xl:flex shrink"
                    id="login-onboarding"
                ></div>
                <div className="grid place-items-center h-screen lg:scale-95 xl:scale-75">
                    <div className="card  bg-base-100 max-w-3xl  w-full">
                        <div className="card-body md:p-[50px] flex flex-col gap-[20px] md:border-2 rounded-3xl">
                            <Link href="/">
                                <div className="flex justify-center">
                                    <img
                                        src="../images/preinannotblack.svg"
                                        alt=""
                                        className="w-[300px]"
                                    />
                                </div>
                            </Link>
                            <h1 className="text-[24px] text-[#2F3F4D] font-semibold">
                                Register
                            </h1>
                            <p className="text-[16px] text-[#2F3F4D]">
                                Daftar sekarang dan nikmati transaksi tanpa
                                batas
                            </p>
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
                                        text={"ex. johnsmilga@gmail.com"}
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
                                        text={"ex. John Smilga"}
                                    />
                                </div>
                                <div className="flex flex-col md:grid grid-cols-2 gap-4">
                                    <div className="flex flex-col gap-3 w-full">
                                        <Label text={"Kata Sandi"} />
                                        <Input
                                            type="password"
                                            name="password"
                                            value={data.password}
                                            onChange={(e) =>
                                                setData(
                                                    "password",
                                                    e.target.value
                                                )
                                            }
                                            clas
                                        />
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <Label
                                            text={"Ketik Ulang Kata Sandi"}
                                        />
                                        <Input
                                            type="password"
                                            name="confirm_password"
                                            onChange={(e) => handlePassword(e)}
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-4 flex-col md:grid grid-cols-2">
                                    <div className="flex flex-col gap-3">
                                        <Label text={"NIK"} />
                                        <Input
                                            type="number"
                                            name="nik"
                                            value={data.nik}
                                            onChange={(e) =>
                                                setData("nik", e.target.value)
                                            }
                                            text={"ex. 3323192292912"}
                                        />
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <Label text={"Nomor Telepon"} />
                                        <Input
                                            type="number"
                                            name="nomor_telepon"
                                            value={data.nomor_telepon}
                                            onChange={(e) =>
                                                setData(
                                                    "nomor_telepon",
                                                    e.target.value
                                                )
                                            }
                                            text={"ex. 0857623231"}
                                        />
                                    </div>
                                </div>
                            </div>
                            {isLoading ? (
                                <ButtonLoading />
                            ) : (
                                <ButtonLoginRegister
                                    text={"Register"}
                                    onClick={(e) => handleRegister(e)}
                                    disabled={buttonCheckComplete()}
                                />
                            )}
                            <div className="divider">
                                <p className="text-gray-600 text-sm">atau</p>
                            </div>
                            <div className="flex items-center justify-center">
                                <p className="text-[12px] md:text-[16px] flex justify-center">
                                    Sudah Punya Akun?{" "}
                                    <span
                                        onClick={() => handleMode("login")}
                                        className="text-center underline underline-offset-1  text-[#868B90] hover:cursor-pointer"
                                    >
                                        Login
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;