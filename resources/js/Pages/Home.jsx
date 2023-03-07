import ModalBooking from "@/Components/ModalBooking";
import { Head, Link } from "@inertiajs/react";
import Navbar from "../Partials/Navbar";
import { useEffect, useState } from "react";
import OverviewData from "@/Components/OverviewData";
import Button from "./../Components/Button";
import Heading from "./../Components/Heading";
import CardHome from "@/Components/CardHome";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import {
    SliderDanau,
    SliderGunung,
    SliderAirTerjun,
} from "@/Components/Slider";
import pisahkanStripSetiapKata from "@/function/pisahkanStripSetiapKata";

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
                        <img src="../images/icons/search.svg" alt="" />
                        <input
                            onChange={handleSearchWisata}
                            type="text"
                            placeholder="Temukan Tujuanmu"
                            className="p-3 bg-white rounded-xl w-full md:w-[350px]"
                        />
                    </div>
                    {dataSearch.length > 0 && (
                        <div
                            id="scroll-search"
                            className="flex flex-col gap-2 h-64 mb-5 w-full overflow-scroll pr-[20px] pl-[20px] md:pr-[50px] lg:pl-[100px] lg:pr-[100px] md:pl-[50px]"
                        >
                            {dataSearch.map((item) => {
                                return (
                                    <Link
                                        key={item.uuid}
                                        href={`/destinasi/${pisahkanStripSetiapKata(
                                            item.nama
                                        )}`}
                                        className="flex flex-row items-center gap-2 p-3 bg-white rounded-xl w-full"
                                    >
                                        <h1 className="font-semibold text-sm">
                                            {item.nama}
                                        </h1>
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
                    <div className="flex flex-col lg:flex-row gap-[48px] pb-[48px] pt-[48px]">
                        <div className="flex flex-col lg:flex-row gap-[12px] md:gap-[30px] lg:h-[510px]">
                            <div className="grid md:grid-cols-2 lg:grid-cols-none gap-[12px] md:gap-[30px] max-md:h-[150px] max-lg:h-[310px]">
                                <div className="grid w-full lg:w-[310px] shrink h-auto lg:hover:show-text rounded-3xl bg-[url(../images/fotodanauhome.jpg)] bg-cover">
                                    <h1 className="md:text-4xl text-white w-full h-full grid place-items-center lg:opacity-0 lg:hover:opacity-50 bg-black bg-opacity-50 lg:hover:bg-gray-900 rounded-3xl transition duration-400">
                                        Danau
                                    </h1>
                                </div>
                                <div className="grid w-full lg:w-[310px] shrink h-auto rounded-3xl bg-[url(../images/surodipo.jpeg)] bg-cover ">
                                    <h1 className="md:text-4xl text-white w-full h-full grid place-items-center lg:opacity-0 lg:hover:opacity-50  bg-black bg-opacity-50 lg:hover:bg-gray-900 rounded-3xl transition duration-400">
                                        Air Terjun
                                    </h1>
                                </div>
                            </div>
                            <div className=" lg:w-[320px] max-md:h-[75px] max-lg:h-[320px] rounded-3xl bg-[url(../images/gununghome.jpeg)] bg-cover bg-top lg:bg-right-top ">
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
                                <Button
                                    text={"Eksplor Destinasi"}
                                    className="bg-[#3258E8] text-white"
                                />
                            </div>
                        </div>
                    </div>
                    {/* end of Kumpulan Jenis Destinasi */}
                </div>
                {/* Overview Destinasi Danau */}
                <div className="bg-[#3258E8]">
                    <div className="mx-auto container pt-[48px] pb-[48px] lg:pl-[100px] lg:pr-[100px] flex flex-col gap-[120px]">
                        <div className="grid grid-cols-1 lg:grid-cols-[434px_auto] gap-[56px] items-center overflow-x-hidden">
                            <div className="flex items-start flex-col gap-[12px] md:gap-[36px] max-md:pr-[20px] max-md:pl-[20px] max-lg:pr-[50px] max-lg:pl-[50px] ">
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
                                    className={"border-2 border-[#3258E8]"}
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
            <footer className="footer footer-center p-10 bg-primary text-primary-content">
                <div>
                    <svg
                        width="50"
                        height="50"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        className="inline-block fill-current"
                    >
                        <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
                    </svg>
                    <p className="font-bold">
                        ACME Industries Ltd. <br />
                        Providing reliable tech since 1992
                    </p>
                    <p>Copyright © 2023 - All right reserved</p>
                </div>
                <div>
                    <div className="grid grid-flow-col gap-4">
                        <a>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current"
                            >
                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                            </svg>
                        </a>
                        <a>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current"
                            >
                                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                            </svg>
                        </a>
                        <a>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current"
                            >
                                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
