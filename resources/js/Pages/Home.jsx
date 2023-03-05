import ModalBooking from "@/Components/ModalBooking";
import { Head } from "@inertiajs/react";
import Navbar from "../Partials/Navbar";
import { useState } from "react";
import OverviewData from "@/Components/OverviewData";
import Button from "./../Components/Button";
import Heading from "./../Components/Heading";
import CardHome from "@/Components/CardHome";

export default function Home(props) {
    const [shoModal, setShowModal] = useState(false);
    const [data, setData] = useState({});

    const Modal = (item) => {
        setData(item);
        setShowModal(true);
    };

    console.log(props);

    return (
        <div className="bg-[#fafafa]">
            <div className="mx-auto max-w-[1440px] pr-[20px] pl-[20px] md:pr-[50px] lg:pl-[100px] lg:pr-[100px] md:pl-[50px] flex flex-col gap-[120px] ">
                <Head title="Home" />
                <Navbar user={props.auth.user} />
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

                {/* Kenapa memilih kami */}
                <div className="bg-white pl-[60px] pr-[60px] pt-[40px] pb-[40px] flex gap-[140px] items-center">
                    <div>
                        <Heading>
                            <Heading.Tagline text={"Layanan Kami"} />
                            <Heading.Title text={"Pelayanan"} />
                            <Heading.Title text={"Profesional"} />
                        </Heading>
                    </div>
                    <div className="grid grid-cols-2 gap-[60px]">
                        <div className="flex items-start gap-[30px]">
                            <img src="./images/icons/Weather.svg" alt="" />
                            <div>
                                <h1 className="text-[#232631] font-semibold text-[20px] leading-[30px]">
                                    Calculated Water
                                </h1>
                                <p className="text-[#7b7b7b] font-normal text-[16px] leading-[30px]">
                                    A new way to travel by air the <br /> easy
                                    and fast way.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-[30px]">
                            <img src="./images/icons/Weather.svg" alt="" />
                            <div>
                                <h1 className="text-[#232631] font-semibold text-[20px] leading-[30px]">
                                    Calculated Water
                                </h1>
                                <p className="text-[#7b7b7b] font-normal text-[16px] leading-[30px]">
                                    A new way to travel by air the <br /> easy
                                    and fast way.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-[30px]">
                            <img src="./images/icons/Weather.svg" alt="" />
                            <div>
                                <h1 className="text-[#232631] font-semibold text-[20px] leading-[30px]">
                                    Calculated Water
                                </h1>
                                <p className="text-[#7b7b7b] font-normal text-[16px] leading-[30px]">
                                    A new way to travel by air the <br /> easy
                                    and fast way.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-[30px]">
                            <img src="./images/icons/Weather.svg" alt="" />
                            <div>
                                <h1 className="text-[#232631] font-semibold text-[20px] leading-[30px]">
                                    Calculated Water
                                </h1>
                                <p className="text-[#7b7b7b] font-normal text-[16px] leading-[30px]">
                                    A new way to travel by air the <br /> easy
                                    and fast way.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end of Kenapa memilih kami */}

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
                        <p>View All</p>
                    </div>
                    <div
                        id="destinasi-gunung-container"
                        className="flex gap-[36px] "
                    >
                        {" "}
                        {props.gunung.map((item) => {
                            return (
                                <CardHome
                                    id={item.uuid}
                                    kategori={item.kategori}
                                    nama={
                                        item.nama == "Gunung Lanang Mergolangu"
                                            ? "Gunung Lanang"
                                            : item.nama
                                    }
                                />
                            );
                        })}
                    </div>
                </div>
                {/* end Overview Destinasi Gunung */}

                {/* Overview Destinasi Air Terjun */}
                <div className="grid grid-cols-[434px_auto] gap-[56px] items-center">
                    <div className="flex flex-col gap-[12px] ">
                        <Heading.Tagline text={"Rekomendasi Untuk Kamu"} />
                        <div>
                            <Heading.Title text={"Eksplorasi Sejuknya"} />
                            <Heading.Title text={"Air Terjun Wonosobo"} />
                        </div>
                    </div>
                    <div className="flex gap-[24px]">
                        {props.danau.map((item) => {
                            return (
                                <CardHome
                                    id={item.uuid}
                                    kategori={item.kategori}
                                    nama={item.nama}
                                />
                            );
                        })}
                    </div>
                </div>
                {/* end of Overview Destinasi Air Terjun */}
            </div>
        </div>
    );
}
