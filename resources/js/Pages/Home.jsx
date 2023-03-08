import ModalBooking from "@/Components/ModalBooking";
import { Head, Link } from "@inertiajs/react";
import Navbar from "../Partials/Navbar";
import { useEffect, useState } from "react";
import OverviewData from "@/Components/OverviewData";
import Button from "../Components/Button";
import Heading from "../Components/Heading";
import CardHome from "@/Components/CardHome";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import {
    SliderDanau,
    SliderGunung,
    SliderAirTerjun,
} from "@/Components/Slider";
import pisahkanStripSetiapKata from "@/function/pisahkanStripSetiapKata";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";

export default function Home(props) {
    const [shoModal, setShowModal] = useState(false);
    const [data, setData] = useState({});

    const [dataSearch, setDataSearch] = useState([]);
    const [loadingPage, setLoadingPage] = useState(true);

    useEffect(() => {
        setLoadingPage(false);
    }, []);

    const Modal = (item) => {
        setData(item);
        setShowModal(true);
    };

    const handleSearchWisata = (e) => {
        e.preventDefault();
        const data = props.semua;
        console.log(data);
        const search = e.target.value;
        if (search === "") {
            setDataSearch([]);
        } else {
            const dataSearch = data.filter((item) => {
                return item.nama.toLowerCase().includes(search.toLowerCase());
            });
            // jika kosong maka hapus data search
            setDataSearch(dataSearch);
        }
    };

    console.log(props.air_terjun);

    return (
        <div className="bg-[#fafafa]">
            <Navbar user={props.auth.user} />

            <div className="grid text-center place-items-center h-[631px] w-full bg-[url(../images/headerHero.svg)] bg-no-repeat bg-cover bg-bottom bg">
                <div className="flex flex-col justify-center items-center gap-[40px]">
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
                            onChange={handleSearchWisata}
                            type="text"
                            placeholder="Cari Destinasi"
                            className="p-3 bg-white rounded-xl w-full md:w-[350px]"
                        />
                    </div>
                    {dataSearch.length > 0 && (
                        <div
                            id="scroll-search"
                            className="flex flex-col gap-2 max-h-64 mb-5 w-full overflow-scroll md:w-[350px] bg-white justify-center rounded-xl border-2 border-[#dfdfdf] absolute top-[550px] md:top-[500px] z-20 "
                        >
                            {dataSearch.map((item) => {
                                return (
                                    <Link
                                        key={item.uuid}
                                        href={`/destinasi/${pisahkanStripSetiapKata(
                                            item.nama
                                        )}`}
                                        className="flex flex-col items-start gap-2 p-3 bg-white rounded-xl w-full"
                                    >
                                        <h1 className="font-semibold text-sm">
                                            {item.nama}
                                        </h1>
                                        <div className="h-[1px] w-full bg-[#EAEAEA]"></div>
                                    </Link>
                                );
                            })}
                        </div>
                    )}
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
                    <div className="flex flex-col xl:flex-row gap-[48px] pb-[48px] pt-[48px]">
                        <div className="flex flex-col md:grid md:grid-cols-2 xl:flex lg:flex-row gap-[12px] md:gap-[30px] lg:h-[510px]">
                            <div className="grid md:grid-cols-1 lg:grid-cols-none gap-[12px] md:gap-[30px] max-md:h-[150px] max-lg:h-[310px]">
                                <div className="grid w-full xl:w-[310px] shrink h-auto lg:hover:show-text rounded-3xl bg-[url(../images/fotodanauhome.jpg)] bg-cover">
                                    <h1 className="md:text-4xl text-white w-full h-full grid place-items-center lg:opacity-0 lg:hover:opacity-50 bg-black bg-opacity-50 lg:hover:bg-gray-900 rounded-3xl transition duration-400">
                                        Danau
                                    </h1>
                                </div>
                                <div className="grid w-full xl:w-[310px] shrink h-auto rounded-3xl bg-[url(../images/surodipo.jpeg)] bg-cover ">
                                    <h1 className="md:text-4xl text-white w-full h-full grid place-items-center lg:opacity-0 lg:hover:opacity-50  bg-black bg-opacity-50 lg:hover:bg-gray-900 rounded-3xl transition duration-400">
                                        Air Terjun
                                    </h1>
                                </div>
                            </div>
                            <div className="xl:w-[320px] max-md:h-[75px] max-lg:h-[320px] rounded-3xl bg-[url(../images/gununghome.jpeg)] bg-cover bg-top lg:bg-right-top ">
                                <h1 className="md:text-4xl text-white w-full h-full grid place-items-center lg:opacity-0 lg:hover:opacity-50  bg-black bg-opacity-50 lg:hover:bg-gray-900 rounded-3xl transition duration-400">
                                    Gunung
                                </h1>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center gap-[36px]">
                            <div className="flex flex-col gap-3">
                                <Heading.Tagline text={"Ragam Destinasi"} />
                                <h1 className="capitalize text-[28px] md:text-[36px] md:leading-[54px] layout-pertama-heading  xl:w-[523px]">
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
                                <Link href="/destinasi">
                                    <Button
                                        text={"Eksplor Destinasi"}
                                        className="bg-[#3258E8] text-white"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* end of Kumpulan Jenis Destinasi */}
                </div>
                {/* Overview Destinasi Danau */}
                <div className="bg-[#3258E8]">
                    <div className="mx-auto container pt-[48px] pb-[48px] lg:pl-[100px] lg:pr-[100px]  ">
                        <div className="grid grid-cols-1 lg:grid-cols-[434px_auto] gap-[56px] items-center max-md:overflow-hidden">
                            <div className="flex items-start flex-col gap-[12px] md:gap-6 max-md:pr-[20px] max-md:pl-[20px] max-lg:pr-[50px] max-lg:pl-[50px]">
                                <Heading.Tagline
                                    text={"Destinasi Danau"}
                                    color="#FFBE58"
                                />
                                <div className="md:flex max-lg:flex-row lg:flex-col max-lg:gap-2">
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
                                    className={
                                        "text-[#466BF3] bg-white text-[14px] lg:text-[16px]"
                                    }
                                />
                            </div>
                            <div>
                                <Swiper
                                    effect={"cards"}
                                    grabCursor={true}
                                    modules={[EffectCards]}
                                    className="mySwiper"
                                >
                                    {props.gunung.map((item) => {
                                        return (
                                            <SwiperSlide
                                                key={item.uuid}
                                                className="splide__slide"
                                            >
                                                <CardHome
                                                    destinasi={item}
                                                    id={item.uuid}
                                                    kategori={item.kategori}
                                                    nama={item.nama}
                                                />
                                            </SwiperSlide>
                                        );
                                    })}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end of Overview Destinasi Danau */}

                {/* Overview Destinasi Gunung */}
                <div className="mx-auto container pt-[48px] pb-[48px] pr-[20px] pl-[20px] md:pr-[50px] lg:pl-[100px] lg:pr-[100px] md:pl-[50px] flex flex-col gap-[120px]">
                    <div
                        id="destinasi-gunung"
                        className="flex flex-col gap-[24px] "
                    >
                        <div className="flex justify-between lg:items-center flex-col lg:flex-row gap-6">
                            <div>
                                <Heading>
                                    <Heading.Tagline
                                        text={"Destinasi Gunung"}
                                    />
                                    <Heading.Title
                                        text={"Mendaki Gunung Lewati Lembah"}
                                    />
                                </Heading>
                            </div>
                            <Link
                                href="destinasi"
                                className="lg:text-[18px] leading-[30px] font-medium text-[#3258E8] rounded-xl "
                            >
                                <Button
                                    text={"Lihat Selengkapnya"}
                                    className={
                                        "border-2 border-[#3258E8] text-[14px] lg:text-[16px]"
                                    }
                                />
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

                {/* overvew destinasi Air Terjun */}
                <div className="bg-[#3258E8]">
                    <div className="mx-auto container pt-[48px] pb-[48px] pr-[20px] pl-[20px] md:pr-[50px] lg:pl-[100px] lg:pr-[100px] md:pl-[50px] flex flex-col">
                        <div className="flex flex-col gap-[24px] ">
                            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
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
                                        className={
                                            "text-[#466BF3] bg-white text-[14px] lg:text-[16px]"
                                        }
                                    />
                                </Link>
                            </div>
                            <div className="mySlider overflow-x-hidden">
                                <SliderAirTerjun data={props.air_terjun} />
                            </div>
                        </div>
                    </div>
                </div>
                {/* end of overvew destinasi Air Terjun  */}

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
                                <div className="h-[64px] w-[64px] rounded-full bg-[url(../images/userReview.png)] bg-cover"></div>
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
            <footer className="footer footer-center p-10 bg-[#3258E8] text-primary-content">
                <div>
                    <img src="../images/preinanFooter.svg" alt="" />
                    <p>Copyright © 2023 - All right reserved</p>
                </div>
            </footer>
        </div>
    );
}
