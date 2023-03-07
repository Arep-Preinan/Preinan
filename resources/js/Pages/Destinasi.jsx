import { useState } from "react";
import DestinasiCard from "@/Components/DestinasiCard";
import Navbar from "./../Partials/Navbar";
import Heading from "@/Components/Heading";
import BreadCumbs from "@/Components/BreadCumbs";

const Destinasi = (props) => {
    const [all] = useState(props.all);
    const [gunung] = useState(props.gunung);
    const [airTerjun] = useState(props.air_terjun);
    const [danau] = useState(props.danau);
    const [isActived, setIsActived] = useState("all");

    const handleActive = (kategori) => {
        setIsActived(kategori);
    };

    return (
        <div className="bg-[#FAFAFA]">
            <Navbar user={props.auth.user} />
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
                        <div className="flex p-[20px] hover:opacity-25 hover:cursor-pointer transition  justify-center items-end md:rounded-[24px] bg-[url(../images/telaga2.jpg)] bg-no-repeat bg-cover md:bg-top lg:bg-cover">
                            <button className="btn btn-primary">
                                Temukan Danau
                            </button>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-1 md:gap-5">
                            <div className=" bg-[url(../images/gunung2.jpg)] bg-no-repeat bg-cover md:bg-top lg:bg-center md:rounded-[24px]"></div>
                            <div className="bg-[url(../images/curug.jpg)] bg-no-repeat bg-cover md:bg-top lg:bg-center md:rounded-[24px]"></div>
                        </div>
                    </div>
                </div>
                {/* end of Layout gambar diatas */}
                <div className="flex flex-col my-auto items-center bgimg bg-cover">
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
                        ? all.map((destinasi) => {
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
            </div>
        </div>
    );
};

export default Destinasi;
