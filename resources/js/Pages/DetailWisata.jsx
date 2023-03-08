import CardBooking from "@/Components/CardBooking";
import { useState } from "react";
import Navbar from "./../Partials/Navbar";
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
                <BreadCumbs nama={props.tempat_wisata.nama}/>
                {/* Layout Foto Galeri */}
                <div className="h-[612px] grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-5 overflow-hidden">
                    <div
                        style={{
                            backgroundImage: `url(${handleBackground(
                                props.tempat_wisata.nama,
                                1
                            )})`,
                        }}
                        className={`bg-slate-300 rounded-3xl bg-no-repeat bg-cover`}
                    ></div>
                    <div className="grid  md:grid-cols-1 gap-5">
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
                            <div className="heading-and-rating-detail-wisata flex ">
                                <h1 className="text-[26px] md:text-[40px] leading-[120%] font-bold">
                                    {props.tempat_wisata.nama}
                                </h1>
                            </div>
                        </div>
                        <div
                            className="font-normal text-base text-justify leading-[150%] "
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
                                                            <img src="../images/wisata/Bukit-Sikunir/1.jpg" />
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
                                            src="../images/icons/iconlokasi.svg"
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
                                            <Button
                                            
                                            text="Login"
                                        />
                                        </Link>
                                    </div>
                                    <div className="divider">OR</div>
                                    <div className="grid h-20 rounded-box place-items-center">
                                       <Link className={
                                                    "btn text-[#3258E8] btn-outline btn-block"
                                                } href="/register">
                                            <Button
                                                
                                                text="Register"
                                            />
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
                                        className={`w-full md:w-[350px] h-[200px] bg-slate-300 rounded-xl bg-cover`}></div>
                                        <div className="flex flex-col justify-center gap-2">
                                            <div className="flex gap-2">
                                                <img
                                                    src="../images/icons/loveicons.svg"
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
                                                <Link href={`/destinasi/${pisahkanStripSetiapKata(item.nama)}`}>
                                                    <h1 className="leading-[21px] text-[14px] font-normal text-[#3258E8]">
                                                        Lihat Destinasi
                                                    </h1>
                                                </Link>
                                                <img
                                                    src="../images/icons/vectorKanan.svg"
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
        </div>
    );
};

export default DetailWisata;
