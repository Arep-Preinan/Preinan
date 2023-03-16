import DetailKontak from "@/Components/DetailKontak";
import formatTanggal from "@/function/formatTanggal";
import { Head } from "@inertiajs/react";
import QRCode from "qrcode.react";

const E_Tiket = (props) => {
    let url = window.location.origin;
    return (
        <div className="card w-auto bg-base-100  shadow-md m-5">
            <div className="card-body flex flex-col gap-4 md:gap-8">
                <div className="flex flex-col gap-4">
                    <div className="flex justify-between">
                        <img
                            src="/images/preinannotblack.svg"
                            className="w-[200px] relative right-6"
                            alt=""
                        />
                        <h2 className="card-title">E-Tiket</h2>
                    </div>
                    <h2 className="font-semibold mt-5">Detail Kontak</h2>
                    <DetailKontak data={props} />
                    <h2 className="font-semibold">Detail Pemesanan</h2>
                    <div className="h-[1px] w-full bg-[#EAEAEA]"></div>
                    <div className="grid grid-cols-3  gap-8">
                        <div className="flex flex-col items-start justify-center">
                            <p className=" font-medium text-[16px]">
                                Destinasi
                            </p>
                            <p className="text-sm">
                                {props.tiket.tempat_wisata.nama}
                            </p>
                        </div>
                        <div className="flex flex-col items-start justify-center gap-2">
                            <p className="font-medium">Tanggal</p>
                            <p className="text-sm">
                                {formatTanggal(props.tiket.tanggal)}
                            </p>
                        </div>
                        <div className="flex flex-col items-start justify-center">
                            <p className="text-center font-medium">Jumlah</p>
                            <p className="text-center">
                                {props.tiket.jumlah_tiket}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between">
                    <p>Total Pembayaran</p>
                    <p className="text-right">{props.tiket.total_harga}</p>
                </div>

                <div className="flex justify-end">
                    <QRCode
                        value={`${url}/${props.tiket.kode}/${props.tiket.uuid}`}
                    />
                </div>
                <label
                    htmlFor={`my-modal-${props.index}`}
                    className="btn bg-red-500 border-none"
                >
                    Tutup
                </label>
            </div>
        </div>
    );
};

export default E_Tiket;
