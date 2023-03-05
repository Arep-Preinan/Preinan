import CardBooking from "@/Components/CardBooking";
import { useState } from "react";
import Navbar from "./../Partials/Navbar";
import BreadCumbs from "./../Components/BreadCumbs";

const DetailWisata = (props) => {
    let [page, setPage] = useState(1);

    const pindahHalaman = () => {
        setPage(e);
    };

    // buatkan data seperti ini booking {destinasi : {}}
    let destinasi = {
        destinasi: props.tempat_wisata,
        auth: props.auth,
    };

    console.log(destinasi);
    return (
        <div className="bg-[#fafafa]">
            <Navbar />
            {/* konten yang ada pada bawah foto */}

            <div className="container mx-auto pr-[20px] pl-[20px] md:pr-[50px] lg:pl-[100px] lg:pr-[100px] md:pl-[50px] flex flex-col gap-[48px]">
                <BreadCumbs />
                {/* Layout Foto Galeri */}
                <div className="h-[612px] grid grid-cols-[1fr_1fr] gap-5 overflow-hidden">
                    <div className="bg-slate-300 rounded-3xl">Gambar 1</div>
                    <div className="grid grid-cols-1 gap-5">
                        <div className="grid grid-cols-[60%_auto] gap-5">
                            <div className="bg-slate-300 rounded-3xl">
                                Gambar 2
                            </div>
                            <div className="bg-slate-300 rounded-3xl">
                                Gambar 3
                            </div>
                        </div>
                        <div className="grid grid-cols-[40%_auto]  gap-5">
                            <div className="bg-slate-300 rounded-3xl">
                                Gambar 2
                            </div>
                            <div className="bg-slate-300 rounded-3xl">
                                Gambar 3
                            </div>
                        </div>
                    </div>
                </div>
                {/*end of Layout Foto Galeri */}
                <div className="" id="data-detail-destinasi">
                    <div className="heading-and-rating-detail-wisata">
                        <h1 className="text-[40px] leading-[120%] font-bold">
                            {props.tempat_wisata.nama}
                        </h1>
                    </div>
                    <div
                        className="font-normal text-base leading-[150%] w-[649px]"
                        dangerouslySetInnerHTML={{
                            __html: props.tempat_wisata.deskripsi,
                        }}
                    ></div>
                    <h1>{props.tempat_wisata.alamat}</h1>
                    <h1>{props.tempat_wisata.rating}</h1>
                </div>
                {/* akhir konten yang ada pada bawah foto */}
                {/* konten yang rekomendasi */}
                <h1>==================</h1>
                <h1>Rekomendasi</h1>
                {props.rekomendasi.map((item, index) => {
                    return (
                        <>
                            <h1>{item.nama}</h1>
                            <div
                                className="text-lg"
                                dangerouslySetInnerHTML={{
                                    __html:
                                        item.deskripsi.substring(0, 75).trim() +
                                        "...",
                                }}
                            ></div>
                            <br />
                        </>
                    );
                })}
                {/* akhir konten yang rekomendasi */}
                {/* card booking */}
                <CardBooking booking={destinasi} page={2} />
            </div>
        </div>
    );
};

export default DetailWisata;
