import { Link, useForm } from "@inertiajs/react";
import Button from "./Button";
import pisahkanStripSetiapKata from "@/function/pisahkanStripSetiapKata";
import ModalWarning from "./ModalWarning";

// baru
const DestinasiCard = (props) => {
    const { destinasi, auth } = props;

    const { data, get } = useForm({
        id_destinasi: destinasi.uuid,
    });

    const handleBooking = () => {
        get(route("booking.create"));
    };

    const ambilKataSebelumKoma = (string) => {
        let pisahkan = string.split(",");
        return pisahkan[0];
    };
    // console.log("nama",destinasi)
    return (
        <div className="card min-w-[295px] md:min-w-[auto] md:w-full bg-base-100 flex justify-between gap-[4px] rounded-3xl border-2 ">
            <div className="flex flex-col">
                <DestinasiCard.Image
                    url={`/images/wisata/${pisahkanStripSetiapKata(
                        destinasi.nama
                    )}/1.jpg`}
                />
                <div className="p-4 flex flex-col gap-[12px]">
                    <DestinasiCard.KategoriRating
                        rating={destinasi.rating}
                        kategori={destinasi.kategori}
                    />
                    <DestinasiCard.NamaLokasi
                        nama={destinasi.nama}
                        lokasi={ambilKataSebelumKoma(destinasi.alamat)}
                    />
                </div>
            </div>
            <div className="flex flex-col pl-4 pr-4 pb-4 gap-3">
                <p
                    className={`text-lg font-semibold ${
                        destinasi.harga == 0 ? "text-red-500" : "text-green-700"
                    }`}
                >
                    {destinasi.harga == 0 ? "Free" : `Rp. ${destinasi.harga}`}
                </p>
                <div className="grid grid-cols-2">
                    {auth.user ? (
                        <label>
                            <Button
                                onClick={() => handleBooking()}
                                text={"Pesan"}
                                className="bg-[#3258E8] w-full text-white cardhome-button rounded-xl "
                            />
                        </label>
                    ) : (
                        <>
                            <label
                                className="btn hover:bg-[#3258E8] text-white cardhome-button  bg-[#3258E8] border-none rounded-xl"
                                htmlFor="my-modal"
                            >
                                Pesan
                            </label>
                            <ModalWarning
                                konteks="login"
                                title="Anda Belum Login"
                                message="Silahkan login terlebih dahulu untuk memesan"
                                link="auth"
                                merah="Batal"
                                biru="Login"
                            />
                        </>
                    )}
                    <Link
                        href={`/destinasi/${pisahkanStripSetiapKata(
                            destinasi.nama
                        )}`}
                        className={"flex justify-center items-center"}
                    >
                        <Button text={"Detail"} className="text-[#3258E8] " />
                    </Link>
                </div>
            </div>
        </div>
    );
};

const Image = ({ url }) => {
    return (
        <img
            src={`${url}`}
            alt="/"
            className="rounded-3xl h-[280px] image-full "
        />
    );
};

const KategoriRating = ({ kategori, rating }) => {
    return (
        <div className="flex gap-[12px] items-center">
            <div className="card-category-and-stars">
                <p className="w-auto" id="cardhome-category">
                    {kategori}
                </p>
            </div>
            <div className="flex">
                <div className="rating flex items-center gap-2">
                    <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-orange-400"
                        disabled
                    />
                    <p className="text-base text-gray-600">{rating}</p>
                </div>
            </div>
        </div>
    );
};

const NamaLokasi = ({ nama, lokasi }) => {
    return (
        <div>
            <h1 className="cardhome-nama">{nama}</h1>
            <div className="flex gap-2">
                <img src="/images/icons/iconlokasi.svg" alt="" />
                <p className="cardhome-lokasi">{lokasi}</p>
            </div>
        </div>
    );
};

DestinasiCard.Image = Image;
DestinasiCard.KategoriRating = KategoriRating;
DestinasiCard.NamaLokasi = NamaLokasi;

export default DestinasiCard;
