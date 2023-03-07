import { Link } from "@inertiajs/react";
import formatTanggal from "@/function/formatTanggal";
import Button from "@/Components/Button";
import Navbar from "@/Partials/Navbar";
import RatingReview from "@/Components/RatingReview";

const Tiket = (props) => {
    return (
        <>
        <Navbar user={props.user} />
            <h1 className="flex mt-5 text-5xl justify-center">Tiket Ku</h1>
            <div className="flex flex-col my-auto items-center bgimg bg-cover">
                
                {/* tampilan dari tiket aktif */}
                <h1>Tiket Aktif</h1>
                {
                    props.tiket_valid.map((data, index) => {
                        return (
                            <div className="mb-2 rounded-lg w-full lg:w-1/2 bg-base-100 shadow-xl ">
                                <div className="card-body">
                                    <div class="flex items-center gap-2">
                                        <img src="../images/icons/iconlokasi.svg" alt="icon lokasi" />
                                        <p class="text-gray-500">{data.tempat_wisata.kategori}</p>
                                    </div>
                                    <div className="mt-3">
                                        <p>Kode Tiket: {data.kode}</p>
                                        <h2 className="card-title">{data.tempat_wisata.nama}</h2>
                                        <div class="flex items-center gap-2">
                                            <img src="../images/icons/tiket.svg" alt="icon lokasi" />
                                            <p class="text-gray-500">{data.jumlah_tiket} Tiket</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-row">
                                    <Button
                                        text={"Tiket Valid"}
                                        className="bg-[#24d12c] text-white A cardhome-button m-4"
                                    />
                                    <Link
                                        href={`e-tiket/${data.uuid}`}
                                        as="button"
                                        className="text-[#3258E8] A ml-auto mr-8"
                                    >
                                        Detail Tiket
                                    </Link>
                                </div>

                            </div>
                        )
                    })
                }

                 {/* tampilan dari tiket yang tidak aktif */}
                <h1>Riwayat Tiket</h1>
                {
                    props.tiket_unvalid.map((data, index) => {
                        return (
                            <div className="mb-2 rounded-lg w-full lg:w-1/2 bg-base-100 shadow-xl ">
                                <div className="card-body">
                                    <div class="flex items-center gap-2">
                                        <img src="../images/icons/iconlokasi.svg" alt="icon lokasi" />
                                        <p class="text-gray-500">{data.tempat_wisata.kategori}</p>
                                    </div>
                                    <div className="mt-3">
                                        <p>Kode Tiket: {data.kode}</p>
                                        <h2 className="card-title">{data.tempat_wisata.nama}</h2>
                                        <div class="flex items-center gap-2">
                                            <img src="../images/icons/tiket.svg" alt="icon lokasi" />
                                            <p class="text-gray-500">{data.jumlah_tiket} Tiket</p>
                                        </div>
                                    </div>
                                </div>
                                <RatingReview wisata={data} user={props.auth.user}/>

                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Tiket

{/* <h2 className="card-title">{data.tempat_wisata.nama}</h2>
<p>{formatTanggal(data.tanggal)}</p>
<p>{data.jumlah_tiket} Tiket</p>
<div className="card-actions justify-end">
<Link href={`e-tiket/${data.uuid}`} className="btn">Show</Link>
</div> */}