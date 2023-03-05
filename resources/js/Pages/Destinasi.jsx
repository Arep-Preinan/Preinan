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
        <div
            id="destinasi"
            className="bg-[#FAFAFA] mx-auto max-w-[1440px] pr-[20px] pl-[20px] md:pr-[50px] lg:pl-[100px] lg:pr-[100px] md:pl-[50px] flex flex-col gap-[50px]"
        >
            <Navbar />
            {/* Layout gambar diatas */}

            <BreadCumbs/>

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
