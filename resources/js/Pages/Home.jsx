import ModalBooking from "@/Components/ModalBooking";
import { Head } from "@inertiajs/react";
import Navbar from "../Partials/Navbar";
import { useState } from "react";
import OverviewData from "@/Components/OverviewData";
import Button from "./../Components/Button";

export default function Home(props) {
    const [shoModal, setShowModal] = useState(false);
    const [data, setData] = useState({});

    const Modal = (item) => {
        setData(item);
        setShowModal(true);
    };

    return (
        <div className="mx-auto max-w-[1440px] pr-[20px] pl-[20px] md:pr-[50px] lg:pl-[100px] lg:pr-[100px] md:pl-[50px]">
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
            {/* First Carousel */}
            <div className="flex gap-[56px]">
                <div className="flex gap-[30px]">
                    <div className="flex flex-col gap-[30px]">
                        {" "}
                        <div className="bg-slate-500 w-[310px] h-[240px] rounded-3xl">
                            Gambar 1
                        </div>
                        <div className="bg-slate-500 w-[310px] h-[240px] rounded-3xl">
                            Gambar 2
                        </div>{" "}
                    </div>
                    <div className="bg-slate-500 w-[320px] rounded-3xl">
                        Gambar 3
                    </div>
                </div>
                <div className="flex flex-col justify-center gap-3">
                    <p className="layout-pertama-tagline">New For You</p>
                    <h1 className="capitalize layout-pertama-heading">
                        Enjoy Your vacation <br /> with a new experience
                    </h1>
                    <p className="layout-pertama-description">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s
                    </p>
                    <div className="layout-pertama-overview-data flex gap-[26px]">
                        <OverviewData textup={"560"} textdown={"Destination"} />
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
                            text={"Get Started"}
                            className="bg-[#3258E8] text-white"
                        />
                        <Button text="View More" className="text-[#7B7B7B]" />
                    </div>
                </div>
            </div>
        </div>
    );
}
