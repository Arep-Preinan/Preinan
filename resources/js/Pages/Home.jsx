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
            <div className="mx-auto container pr-[20px] pl-[20px] md:pr-[50px] lg:pl-[100px] lg:pr-[100px] md:pl-[50px] flex flex-col gap-[120px] ">
                <Head title="Home" />

                {/* {props.tempatWisata.map((item, index) => {
                    return (
                        <div key={index}>
                            <h1>{item.nama}</h1>
                            <p>{item.alamat}</p>
                            <img
                                src={`images/wisata/${item.gambar}`}
                                alt={item.nama}
                            />
                            <p>{item.rating}</p>
                            <p>{item.harga}</p>
                            <label
                                htmlFor="my-modal-5"
                                className="btn"
                                onClick={() => Modal(item, props.auth)}
                            >
                                open modal
                            </label>
                            <br></br>
                        </div>
                    );
                })}
                {shoModal && (
                    <ModalBooking
                        data={data}
                        id_user={props.auth.user.id}
                        status={props.errors.status}
                    />
                )} */}

                {/* Kumpulan Jenis Destinasi */}
                <div className="flex flex-col lg:flex-row gap-[56px]">
                    <div className="flex flex-col lg:flex-row gap-[12px] md:gap-[30px] lg:h-[510px]">
                        <div className="grid grid-cols-2 lg:grid-cols-none gap-[12px] md:gap-[30px]">
                            <div className="bg-slate-500 w-full lg:w-[310px] shrink h-100 rounded-3xl ">
                                Gambar 1
                            </div>
                            <div className="bg-slate-500 w-full lg:w-[310px] shrink h-100 rounded-3xl ">
                                Gambar 2
                            </div>
                        </div>
                        <div className="bg-slate-500 lg:w-[320px] rounded-3xl">
                            Gambar 3
                        </div>
                    </div>
                    <div className="flex flex-col justify-center gap-[48px]">
                        <div className="flex flex-col gap-3">
                            <Heading.Tagline text={"New For You"} />
                            <h1 className="capitalize layout-pertama-heading">
                                Enjoy Your vacation{" "}
                                <br className="hidden lg:flex" /> with a new
                                experience
                            </h1>
                            <p className="layout-pertama-description">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s
                            </p>
                        </div>
                        <div className="layout-pertama-overview-data flex gap-[26px]">
                            <OverviewData
                                textup={"560"}
                                textdown={"Destination"}
                            />
                            <OverviewData
                                textup={"120"}
                                textdown={"Luxury Hotels"}
                            />
                            <OverviewData
                                textup={"360K"}
                                textdown={"Happy Tourist"}
                            />
                        </div>
                        <div className="layout-pertama-button-group flex gap-3">
                            <Button
                                text={"Eksplor Destinasi"}
                                className="bg-[#3258E8] text-white"
                            />
                            <Button
                                text="View More"
                                className="text-[#7B7B7B]"
                            />
                        </div>
                    </div>
                </div>
                {/* end of Kumpulan Jenis Destinasi */}

                {/* Overview Destinasi Gunung */}
                <div id="destinasi-gunung" className="flex flex-col gap-[24px]">
                    <div className="flex justify-between items-center">
                        <div>
                            <Heading>
                                <Heading.Tagline
                                    text={"Rekomendasi Untuk Kamu"}
                                />
                                <Heading.Title
                                    text={
                                        "Daki gunung lewati lembah itulah patriot"
                                    }
                                />
                            </Heading>
                        </div>
                        <Link href="destinasi">View all</Link>
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
                {/* end Overview Destinasi Gunung */}

                {/* Overview Destinasi Air Terjun */}
                <div className="grid grid-cols-[434px_auto] gap-[56px] items-center overflow-x-hidden">
                    <div className="flex flex-col gap-[12px] ">
                        <Heading.Tagline text={"Rekomendasi Untuk Kamu"} />
                        <div>
                            <Heading.Title text={"Eksplorasi Sejuknya"} />
                            <Heading.Title text={"Air Terjun Wonosobo"} />
                        </div>
                    </div>
                    <div className="flex gap-[24px] ">
                        <div className="mySlider overflow-x-hidden">
                            <SliderDanau data={props.danau} />
                        </div>
                    </div>
                </div>
                {/* end of Overview Destinasi Air Terjun */}
            </div>
        </div>
    );
}
