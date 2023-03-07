import ButtonLoading from "@/Components/ButtonLoading";
import CardBooking from "@/Components/CardBooking";
import { useForm, Link } from "@inertiajs/react";
import { useEffect, useState } from "react";

const Booking = (props) => {
    let [page, setPage] = useState(1);

    const pindahHalaman = (e) => {
        setPage(e);
    };

    return (
        <>
            {
                /* section pertama */
                <div className="grid place-items-center h-screen bg-[#FAFAFA]">
                    <div className="flex flex-col justify-center items-center gap-[32px]">
                        {/* section judul */}
                        <div className="text-center">
                            <h1 className="text-[36px] font-semibold text-[#152C5B]">
                                Lengkapi Data & Pembayaran
                            </h1>
                            <p className="leading-[27px] text-[#B0B0B0] font-light  text-[18px]">
                                Silahkan selesaikan pembayaran <br /> untuk
                                mendapatkan E-ticket
                            </p>
                        </div>
                        {/* end section judul */}
                        <CardBooking
                            booking={props}
                            onPindahHalaman={pindahHalaman}
                        />
                    </div>
                </div>
            }
        </>
    );
};

export default Booking;
