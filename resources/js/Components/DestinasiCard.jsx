import { Link, useForm } from "@inertiajs/react";
import Button from "./Button";
import pisahkanStripSetiapKata from "@/function/pisahkanStripSetiapKata";

const DestinasiCard = ({ destinasi }) => {
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

    return (
        <div className="card w-[295px] bg-base-100 flex justify-between gap-[12px] rounded-3xl">
            <div className="flex flex-col gap-4 ">
                <DestinasiCard.Image
                    url={`/images/wisata/${pisahkanStripSetiapKata(
                        destinasi.nama
                    )}/1.jpg`}
                />
                <div className="p-4 flex flex-col gap-[12px]">
                    <DestinasiCard.KategoriRating
                        kategori={destinasi.kategori}
                    />
                    <DestinasiCard.NamaLokasi
                        nama={destinasi.nama}
                        lokasi={ambilKataSebelumKoma(destinasi.alamat)}
                    />
                </div>
            </div>
            <div className="flex flex-col pl-4 pr-4 pb-4 gap-3">
                <p>{destinasi.harga == 0 ? "Free" : `Rp.${destinasi.harga}`}</p>
                <div className="flex">
                    <Button
                        onClick={() => handleBooking()}
                        text={"Pesan"}
                        className="bg-[#3258E8] text-white w-[168px] cardhome-button "
                    />
                    <Link
                        href={`/destinasi/${pisahkanStripSetiapKata(
                            destinasi.nama
                        )}`}
                    >
                        <Button
                            text={"Details"}
                            className="text-[#3258E8] w-[168px]"
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
};

const Image = ({ url }) => {
    return (
        <figure>
            <img src={`${url}`} alt="Shoes" className="rounded-3xl h-[280px]" />
        </figure>
    );
};

const KategoriRating = ({ kategori }) => {
    return (
        <div className="flex gap-[12px] items-center">
            <div className="card-category-and-stars">
                <p className="w-auto" id="cardhome-category">
                    {kategori}
                </p>
            </div>
            <div className="flex">
                <div className="rating">
                    <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-orange-400"
                        disabled
                    />
                    <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star  bg-orange-400"
                        disabled
                    />
                    <input
                        type="radio"
                        name="rating-1"
                        disabled
                        className="mask mask-star  bg-orange-400"
                    />
                    <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star  bg-orange-400"
                        disabled
                    />
                    <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star  bg-orange-400"
                        disabled
                    />
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
                <img src="./images/icons/iconlokasi.svg" alt="" />
                <p className="cardhome-lokasi">{lokasi}</p>
            </div>
        </div>
    );
};

DestinasiCard.Image = Image;
DestinasiCard.KategoriRating = KategoriRating;
DestinasiCard.NamaLokasi = NamaLokasi;

export default DestinasiCard;
