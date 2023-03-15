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

    const [hasFocus, setHasFocus] = useState(false);

    const focus = () => {
        setHasFocus(true);
    };

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
        const search = e.target.value;
        if (search === "") {
            setDataSearch([]);
        } else {
            const dataSearch = data.filter((item) => {
                return item.nama.toLowerCase().includes(search.toLowerCase());
            });
            setDataSearch(dataSearch);
        }
    };
    const ambilKataSebelumKoma = (string) => {
        let pisahkan = string.split(",");
        return pisahkan[0];
    };

    return (
        <div className="bg-[#fafafa]">
            <Navbar user={props.auth.user} active={"home"}>
                <div>
                    <div className="grid text-center place-items-center h-[631px] w-full bg-[url(../images/backgroundHero3.svg)] bg-no-repeat bg-cover   ">
                        <div className="flex flex-col justify-center items-center gap-[40px]">
                            <div className="flex flex-col gap-2 md:gap-[8px] lg:gap-[12px]">
                                <h1 className="font-semibold leading-[120%] text-3xl md:text-3xl lg:text-[42px] text-white">
                                    Temukan Keindahan Tersembunyi
                                </h1>
                                <h1 className="font-semibold leading-[120%] text-2xl md:text-3xl lg:text-[42px] text-white ">
                                    Kota Wonosobo
                                </h1>
                            </div>
                            <div className="flex flex-col md:flex-row justify-center gap-[12px] w-full pr-[20px] pl-[20px] xl:pl-[100px] xl:pr-[100px]">
                                <input
                                    onChange={handleSearchWisata}
                                    type="text"
                                    placeholder="Cari Destinasi"
                                    className="p-3 bg-white rounded-xl w-full md:w-[588px]"
                                    onFocus={focus}
                                    onBlur={() => setHasFocus(false)}
                                />
                            </div>
                            <div
                                id="scroll-search"
                                className={`${
                                    dataSearch.length < 3 ? null : "pt-10"
                                } ${
                                    hasFocus
                                        ? "flex transition duration-500"
                                        : "hidden"
                                } overflow-x-hidden flex-col gap-2  mb-5 w-full overflow-scroll ${
                                    dataSearch.length == 0 ? "h-96" : "max-h-96"
                                } md:w-[588px] bg-white justify-center rounded-xl border-2 border-[#dfdfdf] absolute top-[550px] md:top-[500px] lg:top-[550px] z-20 `}
                            >
                                {dataSearch.length > 0 &&
                                    dataSearch.map((item) => {
                                        return (
                                            <Link
                                                key={item.uuid}
                                                href={`/destinasi/${pisahkanStripSetiapKata(
                                                    item.nama
                                                )}`}
                                                className="flex flex-col items-start gap-2 p-3 bg-white rounded-xl w-full"
                                            >
                                                <div className="flex justify-center items-center gap-4">
                                                    {item.kategori ===
                                                    "Danau" ? (
                                                        <svg
                                                            width="24"
                                                            height="24"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M20 11.9999H22V13.9999H20C18.62 13.9999 17.26 13.6499 16 12.9999C13.5 14.2999 10.5 14.2999 8 12.9999C6.74 13.6499 5.37 13.9999 4 13.9999H2V11.9999H4C5.39 11.9999 6.78 11.5299 8 10.6699C10.44 12.3799 13.56 12.3799 16 10.6699C17.22 11.5299 18.61 11.9999 20 11.9999ZM20 5.99992H22V7.99992H20C18.62 7.99992 17.26 7.64992 16 6.99992C13.5 8.29992 10.5 8.29992 8 6.99992C6.74 7.64992 5.37 7.99992 4 7.99992H2V5.99992H4C5.39 5.99992 6.78 5.52992 8 4.66992C10.44 6.37992 13.56 6.37992 16 4.66992C17.22 5.52992 18.61 5.99992 20 5.99992ZM20 17.9999H22V19.9999H20C18.62 19.9999 17.26 19.6499 16 18.9999C13.5 20.2999 10.5 20.2999 8 18.9999C6.74 19.6499 5.37 19.9999 4 19.9999H2V17.9999H4C5.39 17.9999 6.78 17.5299 8 16.6699C10.44 18.3799 13.56 18.3799 16 16.6699C17.22 17.5299 18.61 17.9999 20 17.9999Z"
                                                                fill="#9C9C9C"
                                                            />
                                                        </svg>
                                                    ) : item.kategori ===
                                                      "Gunung" ? (
                                                        <svg
                                                            width="24"
                                                            height="24"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M14 6L10.25 11L13.1 14.8L11.5 16C9.81 13.75 7 10 7 10L1 18H23L14 6Z"
                                                                fill="#9C9C9C"
                                                            />
                                                        </svg>
                                                    ) : (
                                                        <svg
                                                            width="24"
                                                            height="24"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M20 20C18.61 20 17.22 19.53 16 18.67C13.56 20.38 10.44 20.38 8 18.67C6.78 19.53 5.39 20 4 20H2V22H4C5.37 22 6.74 21.65 8 21C10.5 22.3 13.5 22.3 16 21C17.26 21.65 18.62 22 20 22H22V20M20 16C18.61 16 17.22 15.53 16 14.67C13.56 16.38 10.44 16.38 8 14.67C6.78 15.53 5.39 16 4 16H2V18H4C5.37 18 6.74 17.65 8 17C10.5 18.3 13.5 18.3 16 17C17.26 17.65 18.62 18 20 18H22V16M22 2H2V4H6V16H18V4H22M9 4H11V10H9M13 8H15V14H13V8Z"
                                                                fill="#9C9C9C"
                                                            />
                                                        </svg>
                                                    )}
                                                    <div className="flex flex-col justify-start items-start">
                                                        <p className="text-sm">
                                                            {ambilKataSebelumKoma(
                                                                item.alamat
                                                            )}
                                                        </p>
                                                        <h1 className="font-normal text-lg">
                                                            {item.nama}
                                                        </h1>
                                                    </div>
                                                </div>
                                                <div className="h-[1px] w-full bg-[#EAEAEA]"></div>
                                            </Link>
                                        );
                                    })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative bottom-20">
                    <div className="flex flex-col xl:pl-[100px] xl:pr-[100px] mx-auto container max-md:pr-[20px] max-md:pl-[20px] ">
                        <Head title="Home" />
                        {/* feature Preinan */}
                        <div
                            id="feature-preinan-home"
                            className="w-full xl:h-[158px] grid grid-cols-1  md:flex relative  justify-center bg-white rounded-3xl bg-[#ffff] p-8 gap-[48px]"
                        >
                            <div className="lg:w-[339px] flex flex-col xl:flex-row gap-8">
                                <img
                                    src="http://preinan.xxuz.com/images/icons/pesanMudah.svg"
                                    alt=""
                                    className="w-[64px] h-[64px]"
                                />
                                <div className="flex flex-col gap-1">
                                    <h1 className="text-[20px] leading-[30px] font-semibold text-[#4B4B4B]">
                                        Pesan Mudah
                                    </h1>
                                    <p className="font-normal text-[16px] text-[#848484] leading-[30px]">
                                        Pesan tiket mudah, nikmati pengalaman
                                        tak terlupakan
                                    </p>
                                </div>
                            </div>
                            <div className="lg:w-[339px] flex flex-col xl:flex-row gap-8">
                                <img
                                    src="http://preinan.xxuz.com/images/icons/scantiket.svg"
                                    alt=""
                                    className="w-[64px] h-[64px]"
                                />
                                <div className="flex flex-col gap-1">
                                    <h1 className="text-[20px] leading-[30px] font-semibold text-[#4B4B4B]">
                                        Scan E-Tiket
                                    </h1>
                                    <p className="font-normal tetx-[16px] text-[#848484] leading-[30px]">
                                        Tak perlu repot bawa tiket, gunakan
                                        tiket digital
                                    </p>
                                </div>
                            </div>
                            <div className="lg:w-[339px] flex flex-col xl:flex-row gap-8">
                                <img
                                    src="http://preinan.xxuz.com/images/icons/destinasiPilihan.svg"
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
                                    <div
                                        className="grid w-full xl:w-[310px] shrink h-auto lg:hover:show-text rounded-3xl bg-cover"
                                        style={{
                                            backgroundImage:
                                                'url("http://preinan.xxuz.com/images/fotodanauhome.jpg")',
                                        }}
                                    >
                                        <h1 className="md:text-4xl text-white w-full h-full grid place-items-center lg:opacity-0 lg:hover:opacity-50 bg-black bg-opacity-50 lg:hover:bg-gray-900 rounded-3xl transition duration-400">
                                            Danau
                                        </h1>
                                    </div>
                                    <div
                                        className="grid w-full xl:w-[310px] shrink h-auto rounded-3xl bg-cover "
                                        style={{
                                            backgroundImage:
                                                'url("http://preinan.xxuz.com/images/surodipo.jpeg")',
                                        }}
                                    >
                                        <h1 className="md:text-4xl text-white w-full h-full grid place-items-center lg:opacity-0 lg:hover:opacity-50  bg-black bg-opacity-50 lg:hover:bg-gray-900 rounded-3xl transition duration-400">
                                            Air Terjun
                                        </h1>
                                    </div>
                                </div>
                                <div
                                    className="xl:w-[320px] max-md:h-[75px] max-lg:h-[320px] rounded-3xl bg-cover bg-top lg:bg-right-top "
                                    style={{
                                        backgroundImage:
                                            'url("http://preinan.xxuz.com/images/gununghome.jpeg")',
                                    }}
                                >
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
                                    <p className="layout-pertama-description text-base md:text-[18px]">
                                        buat perjalanan anda kali ini
                                        menyenangkan. Kota wonosobo memiliki 3
                                        jenis destinasi alam yang wajib anda
                                        kunjungi. Ciptakan momen tak terlupakan
                                        bersama orang yang anda sayangi
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
                        <div className="mx-auto container pt-[48px] pb-[48px] xl:pl-[100px] xl:pr-[100px]  ">
                            <div className="grid grid-cols-1 lg:flex  justify-center lg:gap-[120px] gap-[56px] items-center max-md:overflow-hidden">
                                <div className="flex items-start flex-col gap-[12px] lg:gap-6 max-md:pr-[20px] max-md:pl-[20px] max-lg:pl-[50px]">
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
                                    <Link href="/destinasi">
                                        <Button
                                            text={"Lihat Selengkapnya"}
                                            className={
                                                "text-[#466BF3] bg-white text-[14px] lg:text-[16px] hover:bg-[#466BF3] hover:text-[white] hover:border-white transition duration-150 "
                                            }
                                        />
                                    </Link>
                                </div>
                                <div>
                                    <Swiper
                                        effect={"cards"}
                                        grabCursor={true}
                                        modules={[EffectCards]}
                                        className="mySwiper max-md:scale-75"
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
                                                        rating={item.rating}
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
                    <div className="mx-auto container pt-[48px] pb-[48px] xl:pl-[100px] xl:pr-[100px] ">
                        <div
                            id="destinasi-gunung"
                            className="flex flex-col gap-[32px] "
                        >
                            <div className="flex justify-between lg:items-center flex-col lg:flex-row gap-6 md:gap-6 max-md:pr-[20px] max-md:pl-[20px] ">
                                <div>
                                    <Heading>
                                        <Heading.Tagline
                                            text={"Destinasi Gunung"}
                                        />
                                        <Heading.Title
                                            text={
                                                "Mendaki Gunung Lewati Lembah"
                                            }
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
                                            "border-2 border-[#3258E8] text-[14px] lg:text-[16px] hover:bg-[#466BF3] hover:text-[white] hover:border-white transition duration-150"
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
                        <div className="mx-auto container pt-[48px] pb-[48px]  xl:pl-[100px] xl:pr-[100px] flex flex-col">
                            <div className="flex flex-col gap-[32px] ">
                                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 max-md:pr-[20px] max-md:pl-[20px] max-lg:pl-[50px]">
                                    <div>
                                        <Heading>
                                            <h1 className="leading-[140%] font-semibold text-[18px] text-[#FFBE58]">
                                                Destinasi Air Terjun
                                            </h1>
                                            <Heading.Title
                                                text={
                                                    "Nikmati Segarnya Air Terjun"
                                                }
                                                className={"text-white"}
                                            />
                                        </Heading>
                                    </div>
                                    <Link href="destinasi">
                                        <Button
                                            text={"Lihat Selengkapnya"}
                                            className={
                                                "text-[#466BF3] bg-white text-[14px] lg:text-[16px] hover:bg-[#466BF3] hover:text-[white] hover:border-white transition duration-150"
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
                    <div className="mx-auto container pt-[48px] pb-[48px] pr-[20px] pl-[20px] xl:pl-[100px] xl:pr-[100px] flex flex-col lg:flex-row gap-[48px] items-center">
                        <div className=" ">
                            <img
                                src="http://preinan.xxuz.com/images/reviewuser.svg"
                                alt=""
                            />
                        </div>
                        <div className="flex flex-col gap-[32px] md:items-start">
                            <Heading>
                                <Heading.Tagline text={"Feedback Pengguna"} />
                                <div>
                                    <Heading.Title
                                        text={"Kata Mereka tentang "}
                                    />
                                    <Heading.Title text={"Website Preinan "} />
                                </div>
                            </Heading>
                            <div className="flex flex-col gap-5">
                                <p className="max-w-[512px] text-[#848484] text-justify font-normal leading-[30px] text-[18px] tracking-[0.5px] capitalize ">
                                    “Gokil! Website ini cocok banget buat kamu
                                    yang lagi cari hidden gems yang ada di
                                    kabupaten wonosobo. Banyak banget destinasi
                                    yang baru tau”
                                </p>
                                <div
                                    id="user-review-home"
                                    className="flex items-center gap-3"
                                >
                                    <div className="h-[64px] w-[64px] rounded-full bg-[url(http://preinan.xxuz.com/images/userReview.png)] bg-cover"></div>
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
                            <Link href="/destinasi">
                                <Button
                                    text={"Eksplor Destinasi"}
                                    className="bg-[#3258E8] text-white mt-[24px] "
                                />
                            </Link>
                        </div>
                    </div>
                    {/* end of review user */}
                </div>
                <footer className="footer footer-center p-10 bg-[#3258E8] text-primary-content">
                    <div>
                        <img
                            src="http://preinan.xxuz.com/images/preinanFooter.svg"
                            alt=""
                        />
                        <p>Copyright © 2023 - All right reserved</p>
                    </div>
                </footer>
            </Navbar>
        </div>
    );
}
