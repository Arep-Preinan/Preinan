import CardBooking from "@/Components/CardBooking";
import { useState } from "react";
import Navbar from "./../Partials/Navbar";
import BreadCumbs from "./../Components/BreadCumbs";
import Button from "./../Components/Button";

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

    const imageName = (name) => {
        console.log(name.split(" ").join("-"));
    };

    console.log(destinasi);
    return (
        <div className="bg-[#fafafa]">
            <Navbar user={props.auth.user} />
            {/* konten yang ada pada bawah foto */}

            <div className="container mx-auto pr-[20px] pl-[20px] md:pr-[50px] lg:pl-[100px] lg:pr-[100px] md:pl-[50px] flex flex-col gap-[48px]">
                <BreadCumbs />
                {/* Layout Foto Galeri */}
                <div className="h-[612px] grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-5 overflow-hidden">
                    <div
                        className={`bg-slate-300 rounded-3xl bg-[url(../images/wisata/${imageName(
                            props.tempat_wisata.nama
                        )}/1.jpg)]`}
                    ></div>
                    <div className="grid  md:grid-cols-1 gap-5">
                        <div className="grid grid-cols-2 lg:grid-cols-[60%_auto] gap-5">
                            <div className="bg-slate-300 rounded-3xl"></div>
                            <div className="bg-slate-300 rounded-3xl"></div>
                        </div>
                        <div className="hidden md:grid lg:grid-cols-[40%_auto]  gap-5">
                            <div className="bg-slate-300 rounded-3xl"></div>
                            <div className="bg-slate-300 rounded-3xl"></div>
                        </div>
                    </div>
                </div>
                {/*end of Layout Foto Galeri */}
                <div
                    className="flex justify-between"
                    id="data-detail-destinasi"
                >
                    <div className="flex flex-col gap-[32px]">
                        <div className="heading-and-rating-detail-wisata flex ">
                            <h1 className="text-[26px] md:text-[40px] leading-[120%] font-bold">
                                {props.tempat_wisata.nama}
                            </h1>
                            <h1 className="flex items-center">
                                {props.tempat_wisata.rating}
                            </h1>
                        </div>
                        <h1>Harga Tiket : Rp. {props.tempat_wisata.harga}</h1>
                        <div className="flex">
                            <img src="../images/icons/iconlokasi.svg" alt="" />
                            <h1>{props.tempat_wisata.alamat}</h1>
                        </div>
                        <div
                            className="font-normal text-base leading-[150%] w-[649px]"
                            dangerouslySetInnerHTML={{
                                __html: props.tempat_wisata.deskripsi,
                            }}
                        ></div>
                    </div>
                    {props.auth.user ? (
                        <CardBooking booking={destinasi} page={2} />
                    ) : (
                        <div className="card w-[511px] grid place-items-center bg-base-100 shadow-lg p-6">
                            <div className="flex flex-col w-full border-opacity-50">
                                <h1>Login or Register to Continue</h1>
                                <div className="grid h-20 card w-full rounded-box place-items-center">
                                    <Button
                                        className={"btn btn-primary btn-block"}
                                        text="Login"
                                    />
                                </div>
                                <div className="divider">OR</div>
                                <div className="grid h-20 rounded-box place-items-center">
                                    <Button
                                        className={
                                            "btn text-[#3258E8] btn-outline btn-block"
                                        }
                                        text="Register"
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                {/* akhir konten yang ada pada bawah foto */}
                {/* konten yang rekomendasi */}
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
            </div>
        </div>
    );
};

export default DetailWisata;
