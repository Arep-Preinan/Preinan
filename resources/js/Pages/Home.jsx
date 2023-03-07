import ModalBooking from "@/Components/ModalBooking";
import { Head, Link } from "@inertiajs/react";
import Navbar from "../Partials/Navbar";
import { useState } from "react";
import OverviewData from "@/Components/OverviewData";
import Button from "./../Components/Button";
import Heading from "./../Components/Heading";
import CardHome from "@/Components/CardHome";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { SliderDanau, SliderGunung } from "@/Components/Slider";

export default function Home(props) {
    const [shoModal, setShowModal] = useState(false);
    const [data, setData] = useState({});

    const Modal = (item) => {
        setData(item);
        setShowModal(true);
    };

    return (
        <div className="bg-[#fafafa]">
            <Navbar user={props.auth.user} />
            <div className="grid text-center place-items-center h-[631px] w-full bg-[url(../images/headerHero.svg)] bg-no-repeat bg-cover bg-bottom bg">
                <div className="flex flex-col justify-center gap-[40px]">
                    <div className="flex flex-col md:gap-[8px] lg:gap-[12px]">
                        <h1 className="font-semibold leading-[120%] text-2xl md:text-3xl lg:text-[42px] text-white">
                            Temukan Keindahan Tersembunyi
                        </h1>
                        <h1 className="font-semibold leading-[120%] text-2xl md:text-3xl lg:text-[42px] text-white">
                            Kota Wonosobo
                        </h1>
                    </div>
                    <div className="flex flex-col md:flex-row justify-center gap-[12px] w-full pr-[20px] pl-[20px] md:pr-[50px] lg:pl-[100px] lg:pr-[100px] md:pl-[50px]">
                        <input
                            type="text"
                            placeholder="Search"
                            className="p-3 bg-white rounded-xl w-full md:w-[350px]"
                        />
                        <Button
                            text={"Cari Destinasi"}
                            className="bg-primary text-white"
                        />
                    </div>
                </div>
            </div>
            <div className="relative bottom-20">
                <div className="mx-auto container pr-[20px] pl-[20px] md:pr-[50px] lg:pl-[100px] lg:pr-[100px] md:pl-[50px] flex flex-col  ">
                    <Head title="Home" />
                    {/* feature Preinan */}
                    <div
                        id="feature-preinan-home"
                        className="w-full xl:h-[158px] grid grid-cols-1  md:flex relative  justify-center bg-white rounded-3xl bg-[#ffff] p-8 gap-[48px]"
                    >
                        <div className="lg:w-[339px] flex flex-col xl:flex-row gap-8">
                            <img
                                src="../images/icons/pesanMudah.svg"
                                alt=""
                                className="w-[64px] h-[64px]"
                            />
                            <div className="flex flex-col gap-1">
                                <h1 className="text-[20px] leading-[30px] font-semibold text-[#4B4B4B]">
                                    Pesan Mudah
                                </h1>
                                <p className="font-normal tetx-[16px] text-[#848484] leading-[30px]">
                                    Pesan tiket mudah, nikmati pengalaman tak
                                    terlupakan
                                </p>
                            </div>
                        </div>
                        <div className="lg:w-[339px] flex flex-col xl:flex-row gap-8">
                            <img
                                src="../images/icons/scantiket.svg"
                                alt=""
                                className="w-[64px] h-[64px]"
                            />
                            <div className="flex flex-col gap-1">
                                <h1 className="text-[20px] leading-[30px] font-semibold text-[#4B4B4B]">
                                    Scan E-Tiket
                                </h1>
                                <p className="font-normal tetx-[16px] text-[#848484] leading-[30px]">
                                    Tak perlu repot bawa tiket, gunakan tiket
                                    digital
                                </p>
                            </div>
                        </div>
                        <div className="lg:w-[339px] flex flex-col xl:flex-row gap-8">
                            <img
                                src="../images/icons/destinasiPilihan.svg"
                                alt=""
                                className="w-[64px] h-[64px]"
                            />
                            <div className="flex flex-col gap-1">
                                <h1 className="text-[20px] leading-[30px] font-semibold text-[#4B4B4B]">
                                    Destinasi Pilihan
                                </h1>
                                <p className="font-normal tetx-[16px] text-[#848484] leading-[30px]">
                                    Kenyamanan dan Keamananmu Prioritas Kami
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* end of feature Preinan */}

                    {/* Kumpulan Jenis Destinasi */}
                    <div className="flex flex-col lg:flex-row gap-[48px] pb-[48px] pt-[48px]">
                        <div className="flex flex-col lg:flex-row gap-[12px] md:gap-[30px] lg:h-[510px]">
                            <div className="grid md:grid-cols-2 lg:grid-cols-none gap-[12px] md:gap-[30px] max-md:h-[150px] max-lg:h-[310px]">
                                <div className="grid bg-slate-500 w-full lg:w-[310px] shrink h-auto rounded-3xl bg-[url(../images/fotodanauhome.jpg)] bg-cover  "></div>
                                <div className="grid bg-slate-500 w-full lg:w-[310px] shrink h-auto rounded-3xl bg-[url(../images/surodipo.jpeg)] bg-cover "></div>
                            </div>
                            <div className="bg-slate-500 lg:w-[320px] max-md:h-[75px] max-lg:h-[320px] rounded-3xl bg-[url(../images/gununghome.jpeg)] bg-cover bg-right-top"></div>
                        </div>
                        <div className="flex flex-col justify-center gap-[36px]">
                            <div className="flex flex-col gap-3">
                                <Heading.Tagline text={"Ragam Destinasi"} />
                                <h1 className="capitalize layout-pertama-heading text-xl xl:w-[523px]">
                                    Jelajahi Tiga Jenis Destinasi dalam Satu
                                    Perjalanan
                                </h1>
                                <p className="layout-pertama-description">
                                    buat perjalanan anda kali ini menyenangkan.
                                    Kota wonosobo memiliki 3 jenis destinasi
                                    alam yang wajib anda kunjungi. Ciptakan
                                    momen tak terlupakan bersama orang yang anda
                                    sayangi
                                </p>
                            </div>
                            <div className="layout-pertama-overview-data flex gap-[26px]">
                                <OverviewData
                                    textup={"24"}
                                    textdown={"Destinasi"}
                                />
                                <OverviewData
                                    textup={"100"}
                                    textdown={"Review"}
                                />
                                <OverviewData
                                    textup={"45+"}
                                    textdown={"Puas"}
                                />
                            </div>
                            <div className="layout-pertama-button-group flex gap-3">
                                <Button
                                    text={"Eksplor Destinasi"}
                                    className="bg-[#3258E8] text-white"
                                />
                            </div>
                        </div>
                    </div>
                    {/* end of Kumpulan Jenis Destinasi */}
                </div>
                {/* Overview Destinasi Air Terjun */}
                <div className="bg-[#3258E8]">
                    <div className="mx-auto container pt-[48px] pb-[48px] pr-[20px] pl-[20px] md:pr-[50px] lg:pl-[100px] lg:pr-[100px] md:pl-[50px] flex flex-col gap-[120px]">
                        <div className="grid grid-cols-1 lg:grid-cols-[434px_auto] gap-[56px] items-center overflow-x-hidden">
                            <div className="flex items-start flex-col gap-[36px] ">
                                <Heading.Tagline
                                    text={"Destinasi Danau"}
                                    color="#FFBE58"
                                />
                                <div>
                                    <Heading.Title
                                        text={"Melarikan Diri Dari"}
                                        className={"text-white"}
                                    />
                                    <Heading.Title
                                        text={"Keramaian"}
                                        className={"text-white"}
                                    />
                                </div>
                                <Button
                                    text={"Lihat Selengkapnya"}
                                    className={"text-[#466BF3] bg-white"}
                                />
                            </div>
                            <div className="flex">
                                <div className="mySlider overflow-x-hidden">
                                    <SliderDanau data={props.danau} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end of Overview Destinasi Air Terjun */}

                {/* Overview Destinasi Gunung */}
                <div className="mx-auto container pt-[48px] pb-[48px] pr-[20px] pl-[20px] md:pr-[50px] lg:pl-[100px] lg:pr-[100px] md:pl-[50px] flex flex-col gap-[120px]">
                    <div
                        id="destinasi-gunung"
                        className="flex flex-col gap-[24px] "
                    >
                        <div className="flex justify-between lg:items-center flex-col lg:flex-row">
                            <div>
                                <Heading>
                                    <Heading.Tagline
                                        text={"Destinasi Gunung"}
                                    />
                                    <Heading.Title
                                        text={"Temukan Diri Anda Di Atas Awan"}
                                    />
                                </Heading>
                            </div>
                            <Link
                                href="destinasi"
                                className="lg:text-[18px] leading-[30px] font-medium text-[#3258E8]"
                            >
                                Lihat Selengkapnya
                            </Link>
                        </div>
                        <div
                            id="destinasi-gunung-container"
                            className="flex gap-[36px] "
                        >
                            <div className="mySlider overflow-x-hidden">
                                <SliderGunung data={props.gunung} />
                            </div>
                        </div>
                    </div>
                </div>
                {/* end Overview Destinasi Gunung */}

                {/* overvew destinasi danau */}
                <div className="bg-[#3258E8]">
                    <div className="mx-auto container pt-[48px] pb-[48px] pr-[20px] pl-[20px] md:pr-[50px] lg:pl-[100px] lg:pr-[100px] md:pl-[50px] flex flex-col">
                        <div className="flex flex-col gap-[24px] ">
                            <div className="flex justify-between items-center">
                                <div>
                                    <Heading>
                                        <h1 className="leading-[140%] font-semibold text-[18px] text-[#FFBE58]">
                                            Destinasi Air Terjun
                                        </h1>
                                        <Heading.Title
                                            text={"Nikmati Segarnya Air Terjun"}
                                            className={"text-white"}
                                        />
                                    </Heading>
                                </div>
                                <Link href="destinasi">
                                    <Button
                                        text={"Lihat Selengkapnya"}
                                        className={"text-[#466BF3] bg-white"}
                                    />
                                </Link>
                            </div>
                            <div
                                id="destinasi-gunung-container"
                                className="flex gap-[36px] "
                            ></div>
                        </div>
                    </div>
                </div>
                {/* end of overvew destinasi danau */}

                {/* review User */}
                <div className="mx-auto container pt-[48px] pb-[48px] pr-[20px] pl-[20px] md:pr-[50px] lg:pl-[100px] lg:pr-[100px] md:pl-[50px] flex flex-col lg:flex-row gap-[48px] items-center">
                    <div className=" ">
                        <img src="../images/reviewuser.svg" alt="" />
                    </div>
                    <div className="flex flex-col gap-[32px] md:items-start">
                        <Heading>
                            <Heading.Tagline text={"Feedback Pengguna"} />
                            <div>
                                <Heading.Title text={"Kata Mereka tentang "} />
                                <Heading.Title text={"Website Preinan "} />
                            </div>
                        </Heading>
                        <div className="flex flex-col gap-5">
                            <p className="max-w-[512px] text-[#848484] text-justify font-normal leading-[30px] text-[18px] tracking-[0.5px] capitalize ">
                                “Gokil! Website ini cocok banget buat kamu yang
                                lagi cari hidden gems yang ada di kabupaten
                                wonosobo. Banyak banget destinasi yang baru tau”
                            </p>
                            <div
                                id="user-review-home"
                                className="flex items-center gap-3"
                            >
                                <img
                                    src="../images/reviewuser.svg"
                                    alt=""
                                    className="h-[64px] w-[64px]"
                                />
                                <div>
                                    <div className="name-user-home flex gap-[8px]">
                                        <h1 className="text-[#232631] font-semibold text-lg">
                                            Sultan Hafizh
                                        </h1>
                                        <h1 className="text-[#848484] font-normal text-lg">
                                            • Pelajar
                                        </h1>
                                    </div>
                                    <div className="rating">
                                        <input
                                            type="radio"
                                            name="rating-1"
                                            className="mask mask-star  bg-orange-400"
                                            disabled
                                        />
                                        <input
                                            type="radio"
                                            name="rating-1"
                                            className="mask mask-star  bg-orange-400"
                                            disabled
                                        />
                                        <input
                                            type="radio"
                                            name="rating-1"
                                            className="mask mask-star  bg-orange-400"
                                            disabled
                                        />
                                        <input
                                            type="radio"
                                            name="rating-1"
                                            className="mask mask-star bg-orange-400"
                                            disabled
                                        />
                                        <input
                                            type="radio"
                                            name="rating-1"
                                            className="mask mask-star  bg-orange-400"
                                            checked
                                            disabled
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Button
                            text={"Eksplor Destinasi"}
                            className="bg-[#3258E8] text-white mt-[24px]"
                        />
                    </div>
                </div>
                {/* end of review user */}
            </div>
        </div>
    );
}
