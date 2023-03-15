import CardBooking from "@/Components/CardBooking";
import { useState } from "react";
import Navbar from "../Partials/Navbar";
import BreadCumbs from "./../Components/BreadCumbs";
import Button from "./../Components/Button";
import pisahkanStripSetiapKata from "@/function/pisahkanStripSetiapKata";
import { Head, Link } from "@inertiajs/react";

const DetailWisata = (props) => {
    let destinasi = {
        destinasi: props.tempat_wisata,
        auth: props.auth,
    };

    const [activeTab, setActiveTab] = useState("komentar");

    const handleActiveTab = (e) => {
        setActiveTab(e);
    };

    const handleBackground = (nama, item) => {
        return `../images/wisata/${pisahkanStripSetiapKata(nama)}/${item}.jpg`;
    };
    return (
        <div className="bg-[#fafafa]">
            <Navbar user={props.auth.user} />
            <Head title={props.tempat_wisata.nama} />
            {/* konten yang ada pada bawah foto */}
            <div className="container mx-auto pr-[20px] pl-[20px] md:pr-[50px] lg:pl-[100px] lg:pr-[100px] md:pl-[50px] flex flex-col gap-[48px]">
                <BreadCumbs nama={props.tempat_wisata.nama} active={"detail"} />
                {/* Layout Foto Galeri */}
                <div className="h-[300px] md:h-[612px] grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-5 overflow-hidden">
                    <div
                        style={{
                            backgroundImage: `url(${handleBackground(
                                props.tempat_wisata.nama,
                                1
                            )})`,
                        }}
                        className={`bg-slate-300 rounded-3xl bg-no-repeat bg-cover`}
                    ></div>
                    <div className="hidden md:grid  md:grid-cols-1 gap-5">
                        <div className="grid grid-cols-2 lg:grid-cols-[60%_auto] gap-5">
                            <div
                                style={{
                                    backgroundImage: `url(${handleBackground(
                                        props.tempat_wisata.nama,
                                        2
                                    )})`,
                                }}
                                className="bg-slate-300 rounded-3xl bg-no-repeat bg-cover"
                            ></div>
                            <div
                                style={{
                                    backgroundImage: `url(${handleBackground(
                                        props.tempat_wisata.nama,
                                        3
                                    )})`,
                                }}
                                className="bg-slate-300 rounded-3xl  bg-no-repeat bg-cover"
                            ></div>
                        </div>
                        <div className="hidden md:grid lg:grid-cols-[40%_auto]  gap-5">
                            <div
                                style={{
                                    backgroundImage: `url(${handleBackground(
                                        props.tempat_wisata.nama,
                                        4
                                    )})`,
                                }}
                                className="bg-slate-300 rounded-3xl  bg-no-repeat bg-cover"
                            ></div>
                            <div
                                style={{
                                    backgroundImage: `url(${handleBackground(
                                        props.tempat_wisata.nama,
                                        5
                                    )})`,
                                }}
                                className="bg-slate-300 rounded-3xl bg-no-repeat bg-cover"
                            ></div>
                        </div>
                    </div>
                </div>
                {/*end of Layout Foto Galeri */}
                <div
                    className="grid grid-cols-1 max-lg:place-items-center xl:grid-cols-[auto_511px] gap-[64px]"
                    id="data-detail-destinasi"
                >
                    <div className="flex flex-col gap-[32px]">
                        <div className="flex flex-col gap-[12px]">
                            <div className="heading-and-rating-detail-wisata flex flex-col md:flex-row justify-between md:items-center ">
                                <h1 className="text-[26px] md:text-[40px] leading-[120%] font-bold">
                                    {props.tempat_wisata.nama}
                                </h1>
                                <div className="flex md:flex-col md:justify-center md:items-end gap-1">
                                    <h1 className="text-gray-500">
                                        Harga Tiket
                                    </h1>
                                    <h1 className="text-2xl text-[#E10000] font-medium leading-[120%]">
                                        Rp. {props.tempat_wisata.harga}
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div
                            className="font-normal text-base text-gray-500 text-justify leading-[150%] "
                            dangerouslySetInnerHTML={{
                                __html: props.tempat_wisata.deskripsi,
                            }}
                        ></div>
                        <div className="flex flex-col justify-between rounded-xl">
                            {/* komentar */}
                            <div className="tabs">
                                <a
                                    className={`tab tab-lg tab-lifted ${
                                        activeTab == "komentar"
                                            ? "tab-active"
                                            : ""
                                    }`}
                                    onClick={() => handleActiveTab("komentar")}
                                >
                                    Komentar
                                </a>
                                <p
                                    className={`tab tab-lg tab-lifted ${
                                        activeTab == "maps" ? "tab-active" : ""
                                    }`}
                                    onClick={() => handleActiveTab("maps")}
                                >
                                    Maps
                                </p>
                            </div>
                            <div
                                className="bg-white rounded-tr-xl rounded-b-xl p-6 flex flex-col gap-6"
                                id="rekomendasi-detail-wisata"
                            >
                                {activeTab === "komentar" ? (
                                    props.komentar.map((item) => {
                                        return (
                                            <div key={item.id}>
                                                <div className="flex gap-4">
                                                    <div className="avatar">
                                                        <div className="w-10 h-10 rounded-full">
                                                            <img src="http://preinan.xxuz.com/images/wisata/Bukit-Sikunir/1.jpg" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="flex gap-4">
                                                            <div className="flex gap-2">
                                                                <h1 className="text-lg text-[#112211] font-normal">
                                                                    {
                                                                        item.rating
                                                                    }
                                                                </h1>{" "}
                                                                <div className="rating">
                                                                    <input
                                                                        type="radio"
                                                                        name="rating-1"
                                                                        className="mask mask-star bg-orange-400"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <h1>|</h1>
                                                            <h1>
                                                                {
                                                                    item.user
                                                                        .fullname
                                                                }
                                                            </h1>
                                                        </div>
                                                        <h1>{item.isi}</h1>
                                                    </div>
                                                </div>
                                                <div className="h-[1px] w-full bg-[#EAEAEA] mt-2"></div>
                                            </div>
                                        );
                                    })
                                ) : (
                                    <div className="flex gap-2">
                                        <img
                                            src="http://preinan.xxuz.com/images/icons/iconlokasi.svg"
                                            alt=""
                                        />
                                        <p className="cardhome-lokasi text-sm">
                                            {props.tempat_wisata.alamat}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        {props.auth.user ? (
                            <CardBooking booking={destinasi} page={2} />
                        ) : (
                            <div className="card lg:w-[511px] grid place-items-center bg-base-100 shadow-lg p-6">
                                <div className="flex flex-col w-full border-opacity-50">
                                    <h1>
                                        Login / Register Sebelum Melanjutkan
                                    </h1>
                                    <div className="grid h-20 card w-full rounded-box place-items-center">
                                        <Link
                                            href="/login"
                                            className={
                                                "btn btn-primary btn-block"
                                            }
                                        >
                                            <Button text="Login" />
                                        </Link>
                                    </div>
                                    <div className="divider">OR</div>
                                    <div className="grid h-20 rounded-box place-items-center">
                                        <Link
                                            className={
                                                "btn text-[#3258E8] btn-outline btn-block"
                                            }
                                            href="/register"
                                        >
                                            <Button text="Register" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div
                            className="card bg-[#ffffff] p-[24px] w-full flex gap-[24px] rounded-xl"
                            id="rekomendasi-detail-wisata"
                        >
                            <h1 className="text-[#232631] text-[20px] font-semibold leading-[30px]">
                                Rekomendasi Destinasi Sejenis
                            </h1>
                            <div className="h-[1px] w-full bg-[#EAEAEA]"></div>
                            {props.rekomendasi.map((item) => {
                                return (
                                    <div
                                        key={item.id}
                                        className="flex flex-start flex-col md:flex-row gap-[16px]"
                                    >
                                        <div
                                            style={{
                                                backgroundImage: `url(${handleBackground(
                                                    item.nama,
                                                    1
                                                )})`,
                                            }}
                                            className={`w-full md:w-[350px] h-[200px] bg-slate-300 rounded-xl bg-cover`}
                                        ></div>
                                        <div className="flex flex-col justify-center gap-2">
                                            <div className="flex gap-2">
                                                <img
                                                    src="http://preinan.xxuz.com/images/icons/loveicons.svg"
                                                    alt=""
                                                />
                                                <p className="text-sm">
                                                    1262 Menyukai Tempat Ini
                                                </p>
                                            </div>
                                            <h1 className="font-semibold text-[18px] text-[#232631] leading-[27px]">
                                                {item.nama}
                                            </h1>
                                            <div
                                                className="font-normal text-[14px] leading-[200%] text-[#9c9c9c]"
                                                dangerouslySetInnerHTML={{
                                                    __html:
                                                        item.deskripsi
                                                            .substring(0, 75)
                                                            .trim() + "...",
                                                }}
                                            ></div>
                                            <div className="flex gap-2">
                                                <Link
                                                    href={`/destinasi/${pisahkanStripSetiapKata(
                                                        item.nama
                                                    )}`}
                                                >
                                                    <h1 className="leading-[21px] text-[14px] font-normal text-[#3258E8]">
                                                        Lihat Destinasi
                                                    </h1>
                                                </Link>
                                                <img
                                                    src="http://preinan.xxuz.com/images/icons/vectorKanan.svg"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                {/* akhir konten yang ada pada bawah foto */}
            </div>
            <div className="btm-nav max-md:flex md:hidden">
                <button>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                    </svg>
                </button>
                <button className="active">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                </button>
                <button>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default DetailWisata;
