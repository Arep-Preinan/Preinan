import { Link } from "@inertiajs/react";
import formatTanggal from "@/function/formatTanggal";

const Tiket = (props) => {

    console.log(props.tiket)
    return (
        <div className='min-h-screen bg-slate-50'>
            <h1 className="flex mt-5 text-5xl justify-center">Tiket Ku</h1>
            <div className="flex flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center gap-4 p-4">
            {
                props.tiket.map((data, index) => {
                    return (
                        <div className="card w-full lg:w-96 bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">{data.tempat_wisata.nama}</h2>
                                <p>{formatTanggal(data.tanggal)}</p>
                                <p>{data.jumlah_tiket} Tiket</p>
                                <div className="card-actions justify-end">
                                <Link href={`e-tiket/${data.uuid}`} className="btn">Show</Link>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default Tiket