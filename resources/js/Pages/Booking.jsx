import ButtonLoading from "@/Components/ButtonLoading";
import CardBooking from "@/Components/CardBooking";
import ModalWarning from "@/Components/ModalWarning";
import { useForm, Link, Head } from "@inertiajs/react";
import { useEffect, useState } from "react";
import Button from "./../Components/Button";

const Booking = (props) => {
    let [page, setPage] = useState(1);

    const pindahHalaman = (e) => {
        setPage(e);
    };

    return (
        <>
            <Head title="Booking" />
            {
                /* section pertama */
                <div className="bg-[#FAFAFA]">
                    <div className="w-full grid grid-cols-1 place-items-center h-screen  mx-auto container pr-[20px] pl-[20px] lg:pl-[100px] lg:pr-[100px]  gap-[120px] ">
                        <div className="flex flex-col justify-center items-center gap-[32px]">
                            {/* section judul */}
                            <div className="text-center">
                                <h1 className="text-[22px] md:text-[36px] font-semibold text-[#152C5B]">
                                    Lengkapi Pembayaran
                                </h1>
                                <p className="leading-[27px] text-[#B0B0B0] font-light text-[16px] md:text-[18px]">
                                    Silahkan selesaikan pembayaran <br /> untuk
                                    mendapatkan E-ticket
                                </p>
                            </div>
                            {/* end section judul */}
                            <CardBooking
                                booking={props}
                                onPindahHalaman={pindahHalaman}
                            />
                            {/* The button to open modal */}
                            <label
                                htmlFor="my-modal"
                                className="btn bg-red-500 border-none text-white"
                            >
                                Cancel
                            </label>
                            <ModalWarning
                                title="Batalkan Pemesanan"
                                message="Apakah anda yakin ingin membatalkan pesanan anda?"
                                link="destinasi"
                                merah="batal pesan"
                                biru="Lanjut pesan"
                            />
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default Booking;