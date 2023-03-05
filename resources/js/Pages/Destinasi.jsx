import { useState } from "react";
import DestinasiCard from "@/Components/DestinasiCard";
import Navbar from "./../Partials/Navbar";
import Heading from "@/Components/Heading";

const Destinasi = (props) => {
    console.log(props);
    const [all] = useState(props.all);
    const [gunung] = useState(props.gunung);
    const [airTerjun] = useState(props.air_terjun);
    const [danau] = useState(props.danau);
    const [isActived, setIsActived] = useState("all");

    const handleActive = (kategori) => {
        setIsActived(kategori);
    };

    return (
        <div
            id="destinasi"
            className="bg-[#FAFAFA] mx-auto max-w-[1440px] pr-[20px] pl-[20px] md:pr-[50px] lg:pl-[100px] lg:pr-[100px] md:pl-[50px] flex flex-col gap-[50px]"
        >
            <Navbar />
            {/* Layout gambar diatas */}

            <div className="flex flex-col gap-[32px]">
                <div id="button-breadcumbs" className="flex gap-4 items-center">
                    <p className="button-breadcumbs-destinasi">Destinasi</p>
                    <p className="button-breadcumbs-breadcumbs">
                        Halaman Utama /{" "}
                        <span className="text-[#3258E8]">Destinasi</span>{" "}
                    </p>
                </div>
                <Heading>
                    <Heading.Title
                        text={
                            "Eksplorasi & Nikmati Keindahan Alam Kota Wonosobo"
                        }
                    />
                </Heading>
                <div className="grid md:grid-cols-[auto_auto] lg:grid-cols-[auto_420px] gap-5 h-[540px] ">
                    <div className="bg-slate-500 rounded-[24px]">Gambar 1</div>
                    <div className="grid grid-cols-2 md:grid-cols-1 gap-5">
                        <div className="bg-slate-500 rounded-[24px]">
                            Gambar 2
                        </div>
                        <div className="bg-slate-500 rounded-[24px]">
                            Gambar 3
                        </div>
                    </div>
                </div>
            </div>

            {/* end of Layout gambar diatas */}
            <div className="flex flex-col my-auto items-center bgimg bg-cover">
                <div className="flex flex-col text-center gap-[8px]">
                    <Heading.Tagline text={"Temukan Hidden Gems"} />
                    <Heading.Title text={"Kota Wisata Wonosobo"} />
                </div>
                <div className="grid grid-cols-4 gap-1 mt-16">
                    <button
                        className={`btn ${
                            isActived !== "all" ? "btn-outline" : ""
                        } btn-primary`}
                        onClick={() => handleActive("all")}
                    >
                        Semua Destinasi
                    </button>
                    <button
                        className={`btn ${
                            isActived !== "gunung" ? "btn-outline" : ""
                        } btn-primary`}
                        onClick={() => handleActive("gunung")}
                    >
                        Gunung
                    </button>
                    <button
                        className={`btn ${
                            isActived !== "danau" ? "btn-outline" : ""
                        } btn-primary`}
                        onClick={() => handleActive("danau")}
                    >
                        Danau
                    </button>
                    <button
                        className={`btn ${
                            isActived !== "air terjun" ? "btn-outline" : ""
                        } btn-primary`}
                        onClick={() => handleActive("air terjun")}
                    >
                        Air Terjun
                    </button>
                </div>
            </div>
            <div
                id="kumpulan-destinasi"
                className=" grid lg:grid-cols-4 gap-[60px] lg:flex-row lg:flex-wrap lg:items-stretch items-center  mt-10"
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
                          return <DestinasiCard destinasi={destinasi} />;
                      })
                    : isActived === "danau"
                    ? danau.map((destinasi) => {
                          return <DestinasiCard destinasi={destinasi} />;
                      })
                    : airTerjun.map((destinasi) => {
                          return <DestinasiCard destinasi={destinasi} />;
                      })}
            </div>
        </div>
    );
};

export default Destinasi;
