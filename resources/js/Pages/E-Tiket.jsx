import DetailKontak from "@/Components/DetailKontak"
import formatTanggal from "@/function/formatTanggal"
import { Head } from "@inertiajs/react";
import QRCode from 'qrcode.react';


const E_Tiket = (props) => {
    let url = window.location.origin;

    return (
        <div className="flex items-center justify-center h-screen">
            <Head title="E-Tiket" />
            <div className="card w-auto bg-base-100 border border-black shadow-md m-5">
                <div className="card-body">
                    <img src="../../images/icons/logo.svg" className="w-28" alt="" />
                    <h2 className="card-title">E-Tiket</h2>

                    <h2 className="card-title">Detail Kontak</h2>
                    <DetailKontak  data={props} />

                    <h2 className="card-title">Detail Pemesanan</h2>
                    <div class="grid grid-cols-3 grid-rows-2 gap-2">
                        <div class="flex flex-col items-center justify-center">
                            <p class="text-center font-bold">Destinasi</p>
                            <p class="text-center">{props.tiket.tempat_wisata.nama}</p>
                        </div>
                        <div class="flex flex-col items-center justify-center">
                            <p class="text-center font-bold">tanggal</p>
                            <p class="text-center">{formatTanggal(props.tiket.tanggal)}</p>
                        </div>
                        <div class="flex flex-col items-center justify-center">
                            <p class="text-center font-bold">Jumlah</p>
                            <p class="text-center">{props.tiket.jumlah_tiket}</p>
                        </div>
                    </div>

                    <div class="flex justify-between">
                        <p>Total Pembayaran</p>
                        <p class="text-right">{props.tiket.total_harga}</p>
                    </div>

                    <div className="flex justify-end">
                        <QRCode value={`${url}/${props.tiket.kode}/${props.tiket.uuid}`} />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default E_Tiket
