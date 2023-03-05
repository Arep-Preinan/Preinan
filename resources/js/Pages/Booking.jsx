import ButtonLoading from "@/Components/ButtonLoading"
import CardBooking from "@/Components/CardBooking"
import { useForm , Link } from "@inertiajs/react"
import { useEffect, useState } from "react"

const Booking = (props) => {

    let [page, setPage] = useState(1)

    const pindahHalaman = (e) => {
        setPage(e)
    }
    
    return (
        <>
            {
                            /* section pertama */
                    <div className="flex flex-col my-auto items-center bgimg bg-cover">

                        {/* section judul */}
                        <h1 className="font-semibold text-4xl">Lengkapi Data & Pembayaran</h1>
                        <p className="font-light text-gray-400 text-[18px]">Silahkan selesaikan pembayaran</p>
                        <p className="font-light text-gray-400 text-[18px]">untuk mendapatkan E-ticket</p>
                        {/* end section judul */}

                        <CardBooking booking={props} onPindahHalaman={pindahHalaman} />
                    
                    </div>
            }
        </>
    )
}

export default Booking