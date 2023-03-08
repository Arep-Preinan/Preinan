import { useState, useRef, useEffect } from "react";
import DestinasiCard from "@/Components/DestinasiCard";
import Navbar from "./../Partials/Navbar";
import Heading from "@/Components/Heading";
import BreadCumbs from "@/Components/BreadCumbs";
import { Head } from "@inertiajs/react";

const Destinasi = (props) => {
    const [gunung] = useState(props.gunung);
    const [airTerjun] = useState(props.air_terjun);
    const [danau] = useState(props.danau);
    const [isActived, setIsActived] = useState("all");
    let [page, setPage] = useState(0);
    const [all, setAll] = useState({
        0: [],
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
        6: [],
        7: [],
    });

    const [next, setNext] = useState(true);
    const [prev, setPrev] = useState(false);

    useEffect(() => {
        const result = {};

        for (let i = 0; i < props.all.length; i++) {
            const group = Math.floor(i / 4); // hitung kelompok mana yang saat ini diproses
            if (!result[group]) {
                result[group] = []; // inisialisasi kelompok jika belum ada
            }
            result[group].push(props.all[i]); // tambahkan item ke kelompok saat ini
        }

        setAll(result);
    }, [props.all]);

    const handleActive = (kategori) => {
        setIsActived(kategori);
    };

    const handlePage = (ket) => {
        if (ket === "next") {
            setPage(++page);
            setPrev(true);
        }else{
            setPage(--page);
            setNext(true);
        }

        if (page === 0) {
            setPrev(false);
        } else if (page === 2) {
            setNext(false);
        }
    };

    return (
        <div className="bg-[#FAFAFA]">
            <Head title="Destinasi" />
            <Navbar user={props.auth.user} active={"destinasi"} />
            <div
                id="destinasi"
                className="mx-auto container pr-[20px] pl-[20px] md:pr-[50px] lg:pl-[100px] lg:pr-[100px] md:pl-[50px] flex flex-col gap-[50px]"
            >
                {/* Layout gambar diatas */}

                <div className="flex flex-col gap-[32px] ">
                    <div className="flex flex-col gap-[12px]">
                        <BreadCumbs />
                        <Heading>
                            <Heading.Title
                                text={
                                    "Eksplorasi & Nikmati Keindahan Alam Kota Wonosobo"
                                }
                            />
                        </Heading>
                    </div>
                    <div className="grid md:grid-cols-[auto_auto] lg:grid-cols-[auto_420px] md:gap-5 h-[540px]  ">
                        <div className="flex hover:cursor-pointer transition  justify-center items-end md:rounded-[24px] bg-[url(../images/telaga2.jpg)] bg-no-repeat bg-cover md:bg-top lg:bg-cover">
                            <h1
                                className="md:text-4xl text-white w-full h-full grid place-items-center lg:opacity-0 lg:hover:opacity-50 bg-black bg-opacity-50 lg:hover:bg-gray-900 rounded-3xl transition duration-400"
                                onClick={() => {
                                    handleActive("danau");
                                }}
                            >
                                Danau
                            </h1>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-1 md:gap-5">
                            <div className="hover:cursor-pointer bg-[url(../images/gunung2.jpg)] bg-no-repeat bg-cover md:bg-top lg:bg-center md:rounded-[24px]">
                                <h1
                                    className="md:text-4xl text-white w-full h-full grid place-items-center lg:opacity-0 lg:hover:opacity-50 bg-black bg-opacity-50 lg:hover:bg-gray-900 rounded-3xl transition duration-400"
                                    onClick={() => {
                                        handleActive("gunung");
                                    }}
                                >
                                    Gunung
                                </h1>
                            </div>
                            <div className="bg-[url(../images/curug.jpg)] bg-no-repeat bg-cover md:bg-top lg:bg-center md:rounded-[24px]">
                                <h1
                                    className=" hover:cursor-pointer md:text-4xl text-white w-full h-full grid place-items-center lg:opacity-0 lg:hover:opacity-50 bg-black bg-opacity-50 lg:hover:bg-gray-900 rounded-3xl transition duration-400"
                                    onClick={() => {
                                        handleActive("air terjun");
                                    }}
                                >
                                    Air Terjun
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end of Layout gambar diatas */}
                <div
                    className="flex flex-col my-auto items-center bgimg bg-cover"
                    id="destinasi-section"
                >
                    <div className="flex flex-col text-center gap-[8px]">
                        <Heading.Tagline text={"Temukan Hidden Gems"} />
                        <Heading.Title text={"Kota Wisata Wonosobo"} />
                    </div>
                    <div className="flex gap-3 mt-8">
                        <button
                            className={` ${
                                isActived !== "all" ? "btn-notActive" : ""
                            } btn-Active`}
                            onClick={() => handleActive("all")}
                        >
                            Semua Destinasi
                        </button>
                        <button
                            className={` ${
                                isActived !== "gunung" ? "btn-notActive" : ""
                            } btn-Active`}
                            onClick={() => handleActive("gunung")}
                        >
                            Gunung
                        </button>
                        <button
                            className={` ${
                                isActived !== "danau" ? "btn-notActive" : ""
                            } btn-Active`}
                            onClick={() => handleActive("danau")}
                        >
                            Danau
                        </button>
                        <button
                            className={` ${
                                isActived !== "air terjun"
                                    ? "btn-notActive"
                                    : ""
                            } btn-Active`}
                            onClick={() => handleActive("air terjun")}
                        >
                            Air Terjun
                        </button>
                    </div>
                </div>
                <div
                    id="kumpulan-destinasi"
                    className=" grid gap-[16px] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-[20px] lg:flex-row lg:flex-wrap lg:items-stretch items-center  mt-10"
                >
                    {isActived === "all"
                        ? all[page].map((destinasi) => {
                              return (
                                  <DestinasiCard
                                      key={destinasi.id}
                                      destinasi={destinasi}
                                  />
                              );
                          })
                        : isActived === "gunung"
                        ? gunung.map((destinasi) => {
                              return (
                                  <DestinasiCard
                                      key={destinasi.uuid}
                                      destinasi={destinasi}
                                  />
                              );
                          })
                        : isActived === "danau"
                        ? danau.map((destinasi) => {
                              return (
                                  <DestinasiCard
                                      key={destinasi.uuid}
                                      destinasi={destinasi}
                                  />
                              );
                          })
                        : airTerjun.map((destinasi) => {
                              return (
                                  <DestinasiCard
                                      key={destinasi.uuid}
                                      destinasi={destinasi}
                                  />
                              );
                          })}
                </div>
                {
                    isActived === "all" && (
                        <div className="flex justify-center items-center">
                            <div className="btn-group">
                                {prev && (
                                    <button
                                        onClick={() => handlePage("prev")}
                                        className="btn btn-outline"
                                    >
                                        {"<<"}
                                    </button>
                                )}
                                <button className="btn btn-active">{page + 1}</button>
                                {next && (
                                    <button
                                        onClick={() => handlePage("next")}
                                        className="btn btn-outline"
                                    >
                                        {">>"}
                                    </button>
                                )}
                            </div>
                        </div>
                    )
                }
                <br/>
            </div>
        </div>
    );
};

export default Destinasi;
