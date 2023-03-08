import pisahkanStripSetiapKata from "@/function/pisahkanStripSetiapKata";
import Button from "./Button";
import { Link, useForm } from "@inertiajs/react";

const CardHome = ({
    kategori = "gunung",
    nama = "Mereum Sanctuary",
    lokasi = "Dusun Sukajadi",
    url = "/images/wisata/Gunung-Lanang-Mergolangu/1.jpg",
    destinasi,
}) => {
    console.log(destinasi);
    const { data, get } = useForm({
        id_destinasi: destinasi.uuid,
    });

    const handleBooking = () => {
        get(route("booking.create"));
    };

    return (
        <div className="card w-[384px] bg-[#ffff] p-6 flex gap-[36px] rounded-3xl cardhome-border">
            <div className="flex flex-col gap-4">
                <CardHome.Image url={pisahkanStripSetiapKata(nama)} />
                <CardHome.KategoriRating kategori={kategori} />
                <CardHome.NamaLokasi nama={nama} lokasi={lokasi} />
            </div>
            <div className="flex flex-col  lg:flex-row ">
                <Button
                    onClick={() => handleBooking()}
                    text={"Pesan Tiket"}
                    className="bg-[#3258E8] text-white cardhome-button flex justify-center"
                />
                <Link href={`/destinasi/${pisahkanStripSetiapKata(nama)}`}>
                    <Button
                        text={"Detail"}
                        className="text-[#3258E8] lg:w-[168px] flex items-center justify-center w-full"
                    />
                </Link>
            </div>
        </div>
    );
};

const Image = ({ url }) => {
    return (
        <figure>
            <img
                src={`../../images/wisata/${url}/1.jpg`}
                alt="Shoes"
                className="rounded-3xl h-[280px]"
            />
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
            <div>
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

CardHome.Image = Image;
CardHome.KategoriRating = KategoriRating;
CardHome.NamaLokasi = NamaLokasi;

export default CardHome;
