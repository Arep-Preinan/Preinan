import ButtonLoading from "@/Components/ButtonLoading"
import CardBooking from "@/Components/CardBooking"
import { useForm , Link } from "@inertiajs/react"
import { useState } from "react"

const Booking = (props) => {
    const success = document.cookie;
    console.log(success)

    let [page, setPage] = useState(1)

    const pindahHalaman = (e) => {
        setPage(e)
    }
    
    return (
        <>
            {
                page === 1 ? (
                            /* section pertama */
                    <div className="flex flex-col my-auto items-center bgimg bg-cover">

                        {/* section judul */}
                        <h1 className="font-semibold text-4xl">Lengkapi Data & Pembayaran</h1>
                        <p className="font-light text-gray-400 text-[18px]">Silahkan selesaikan pembayaran</p>
                        <p className="font-light text-gray-400 text-[18px]">untuk mendapatkan E-ticket</p>
                        {/* end section judul */}

                        <CardBooking booking={props} onPindahHalaman={pindahHalaman} />
                    
                    </div>

                    ) : (

                    <div className="flex flex-col my-auto items-center bgimg bg-cover">

                        {/* section judul */}
                        <h1 className="font-semibold text-4xl">Terimakasih</h1>
                        <img src="images/icons/transaction-success.svg" alt="" />
                        <p className="font-light text-gray-400 text-[18px]">Pembayaran anda akan dikonfirmasi secara otomatis</p>
                        <Link href={"tiket"}className="btn btn-primary px-6">Cek Tiket</Link>
                        {/* end section judul */}
                    </div>

                    )
            }
        </>
    )
}

export default Booking