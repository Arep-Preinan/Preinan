import { useState, useRef, useEffect } from "react";
import DestinasiCard from "@/Components/DestinasiCard";
import Navbar from "./../Partials/Navbar";
import Heading from "@/Components/Heading";
import BreadCumbs from "@/Components/BreadCumbs";
import { Head } from "@inertiajs/react";

const Destinasi = (props) => {

    const [isActived, setIsActived] = useState("all");
    let [pageAll, setPageAll] = useState(0);
    let [pageGunung, setPageGunung] = useState(0);
    let [pageAirTerjun, setPageAirTerjun] = useState(0);
    let [pageDanau, setPageDanau] = useState(0);

    const [all, setAll] = useState(props.all);
    const [gunung, setGunung] = useState(props.gunung);
    const [airTerjun, setAirTerjun] = useState(props.air_terjun);
    const [danau, setDanau] = useState(props.danau);
    
    const [next, setNext] = useState(true);
    const [prev, setPrev] = useState(false);

    const handleActive = (kategori) => {
        setIsActived(kategori);
    };

    const handlePage = (page, kategori) => {
        if (kategori === "all") {
            setPageAll(page);
        } else if (kategori === "gunung") {
            setPageGunung(page);
        } else if (kategori === "air terjun") {
            setPageAirTerjun(page);
        }
        else if (kategori === "danau") {
            setPageDanau(page);
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
                    <div className="grid md:grid-cols-[auto_auto] lg:grid-cols-[auto_420px] md:gap-5 h-[540px] max-md:rounded-3xl max-md:overflow-hidden  ">
                        <div className="flex hover:cursor-pointer transition  justify-center items-end md:rounded-[24px] bg-[url(http://preinan.xxuz.com/images/telaga2.jpg)] bg-no-repeat bg-cover md:bg-top lg:bg-cover">
                            <h1
                                className="md:text-4xl text-white w-full h-full grid place-items-center lg:opacity-0 lg:hover:opacity-50 bg-black bg-opacity-50 lg:hover:bg-gray-900 md:rounded-3xl transition duration-400"
                                onClick={() => {
                                    handleActive("danau");
                                }}
                            >
                                Danau
                            </h1>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-1 md:gap-5">
                            <div className="hover:cursor-pointer bg-[url(http://preinan.xxuz.com/images/gunung2.jpg)] bg-no-repeat bg-cover md:bg-top lg:bg-center md:rounded-[24px]">
                                <h1
                                    className="md:text-4xl text-white w-full h-full grid place-items-center lg:opacity-0 lg:hover:opacity-50 bg-black bg-opacity-50 lg:hover:bg-gray-900 md:rounded-3xl transition duration-400"
                                    onClick={() => {
                                        handleActive("gunung");
                                    }}
                                >
                                    Gunung
                                </h1>
                            </div>
                            <div className="bg-[url(http://preinan.xxuz.com/images/curug.jpg)] bg-no-repeat bg-cover md:bg-top lg:bg-center md:rounded-[24px]">
                                <h1
                                    className=" hover:cursor-pointer md:text-4xl text-white w-full h-full grid place-items-center lg:opacity-0 lg:hover:opacity-50 bg-black bg-opacity-50 lg:hover:bg-gray-900 md:rounded-3xl transition duration-400"
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
                        ? all[pageAll].map((destinasi) => {
                              return (
                                  <DestinasiCard
                                      key={destinasi.id}
                                      destinasi={destinasi}
                                  />
                              );
                          })
                        : isActived === "gunung"
                        ? gunung[pageGunung].map((destinasi) => {
                              return (
                                  <DestinasiCard
                                      key={destinasi.uuid}
                                      destinasi={destinasi}
                                  />
                              );
                          })
                        : isActived === "danau"
                        ? danau[pageDanau].map((destinasi) => {
                              return (
                                  <DestinasiCard
                                      key={destinasi.uuid}
                                      destinasi={destinasi}
                                  />
                              );
                          })
                        : airTerjun[pageAirTerjun].map((destinasi) => {
                              return (
                                  <DestinasiCard
                                      key={destinasi.uuid}
                                      destinasi={destinasi}
                                  />
                              );
                          })}
                </div>
                {isActived === "all" && (
                    <div className="flex justify-center items-center">
                        <div className="btn-group">
                        {all.map((group, i) => (
                            <button
                            key={i}
                            className={`btn ${pageAll === i && 'btn-active'}`}
                            onClick={() => handlePage(i, "all")}
                            >
                            {i + 1}
                            </button>
                        ))}
                        </div>
                    </div>
                )}
                {
                    isActived === "gunung" && (
                        <div className="flex justify-center items-center">
                            <div className="btn-group">
                            {gunung.map((group, i) => (
                                <button
                                key={i}
                                className={`btn ${pageGunung === i && 'btn-active'}`}
                                onClick={() => handlePage(i, "gunung")}
                                >
                                {i + 1}
                                </button>
                            ))}
                            </div>
                        </div>
                    )
                }
                {
                    isActived === "danau" && (
                        <div className="flex justify-center items-center">
                            <div className="btn-group">
                            {danau.map((group, i) => (
                                <button
                                key={i}
                                className={`btn ${pageDanau === i && 'btn-active'}`}
                                onClick={() => handlePage(i, "danau")}
                                >
                                {i + 1}
                                </button>
                            ))}
                            </div>
                        </div>
                    )
                }
                {
                    isActived === "air terjun" && (
                        <div className="flex justify-center items-center">
                            <div className="btn-group">
                            {airTerjun.map((group, i) => (
                                <button
                                key={i}
                                className={`btn ${pageAirTerjun === i && 'btn-active'}`}
                                onClick={() => handlePage(i, "air terjun")}
                                >
                                {i + 1}
                                </button>
                            ))}
                            </div>
                        </div>
                    )
                }
                <br />
            </div>
        </div>
    );
};

export default Destinasi;
