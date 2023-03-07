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
                <div className="w-full  items-center md:grid place-items-center md:grid-cols-1 h-screen bg-[#FAFAFA] mx-auto container pr-[20px] pl-[20px] md:pr-[50px] lg:pl-[100px] lg:pr-[100px] md:pl-[50px] gap-[120px] ">
                    <div className="flex flex-col justify-center items-center gap-[32px]">
                        {/* section judul */}
                        <div className="text-center">
                            <h1 className="text-[22px] md:text-[36px] font-semibold text-[#152C5B]">
                                Lengkapi Data & Pembayaran
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
                    </div>
                </div>
            }
        </>
    );
};

export default Booking;
