import React, { useEffect } from "react";
import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import CardHome from "@/Components/CardHome";

const SliderGunung = ({ data }) => {
    useEffect(() => {
        new Splide(".splide-gunung", {
            type: "slide",
            rewind: true,
            perPage: 3,
            perMove: 1,
            gap: "10px", // ubah nilai gap menjadi lebih kecil
            pagination: false,
            focus: "center",
            arrows: false,
            breakpoints: {
                640: {
                    perPage: 1,
                    perMove: 1,
                    gap: "32px",
                },
                768: {
                    perPage: 2,
                    perMove: 1,
                    gap: "32px",
                },
                1024: {
                    perPage: 4,
                    perMove: 1,
                    gap: "32px",
                },
            },
        }).mount();
    }, []);

    return (
        <div className="splide splide-gunung">
            <div className="splide__track">
                <div className="splide__list flex">
                    {data.map((item) => {
                        return (
                            <div key={item.uuid} className="splide__slide">
                                <CardHome
                                    id={item.uuid}
                                    kategori={item.kategori}
                                    nama={item.nama}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

const SliderDanau = ({ data }) => {
    useEffect(() => {
        new Splide(".splide-danau", {
            type: "slide",
            rewind: true,
            perPage: 2,
            perMove: 1,
            gap: "10px", // ubah nilai gap menjadi lebih kecil
            pagination: false,
            focus: "center",
            arrows: false,
            breakpoints: {
                640: {
                    perPage: 1,
                    perMove: 1,
                    gap: "0",
                },
                768: {
                    perPage: 2,
                    perMove: 1,
                    gap: "",
                },
                1024: {
                    perPage: 3,
                    perMove: 1,
                    gap: "0",
                },
            },
        }).mount();
    }, []);

    return (
        <div className="splide splide-danau">
            <div className="splide__track">
                <div className="splide__list flex ">
                    {data.map((item) => {
                        return (
                            <div key={item.uuid} className="splide__slide">
                                <CardHome
                                    id={item.uuid}
                                    kategori={item.kategori}
                                    nama={item.nama}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export { SliderGunung, SliderDanau };
