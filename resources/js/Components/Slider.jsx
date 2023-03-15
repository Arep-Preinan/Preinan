import React, { useEffect } from "react";
import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import CardHome from "@/Components/CardHome";

const SliderGunung = ({ data }) => {
    useEffect(() => {
        new Splide(".splide-gunung", {
            type: "slide",
            rewind: true,
            perPage: 2,
            perMove: 1,
            gap: "32px", // ubah nilai gap menjadi lebih kecil
            pagination: true,
            focus: "center",
            arrows: true,
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
                                    destinasi={item}
                                    id={item.uuid}
                                    kategori={item.kategori}
                                    nama={item.nama}
                                    rating={item.rating}
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
            gap: "32px", // ubah nilai gap menjadi lebih kecil
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
        <div className="splide splide-danau">
            <div className="splide__track">
                <div className="splide__list flex">
                    {data.map((item) => {
                        return (
                            <div key={item.uuid} className="splide__slide">
                                <CardHome
                                    destinasi={item}
                                    id={item.uuid}
                                    kategori={item.kategori}
                                    nama={item.nama}
                                    rating={item.rating}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

const SliderAirTerjun = ({ data }) => {
    useEffect(() => {
        new Splide(".splide-air-terjun", {
            type: "slide",
            rewind: true,
            perPage: 2,
            perMove: 1,
            gap: "32px", // ubah nilai gap menjadi lebih kecil
            pagination: true,
            focus: "start",
            arrows: true,
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
        <div className="splide splide-air-terjun">
            <div className="splide__track">
                <div className="splide__list flex ">
                    {data.map((item) => {
                        return (
                            <div key={item.uuid} className="splide__slide">
                                <CardHome
                                    destinasi={item}
                                    id={item.uuid}
                                    kategori={item.kategori}
                                    nama={item.nama}
                                    rating={item.rating}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export { SliderGunung, SliderDanau, SliderAirTerjun };
