import Button from "./Button";

const CardHome = ({
    kategori = "gunung",
    nama = "Mereum Sanctuary",
    lokasi = "Dusun Sukajadi",
    url = "/images/wisata/Gunung-Lanang-Mergolangu/1.jpg",
}) => {
    return (
        <div className="card w-96 bg-base-100 p-6 flex gap-[36px] rounded-3xl">
            <div className="flex flex-col gap-4">
                <CardHome.Image url={url} />
                <CardHome.KategoriRating kategori={kategori} />
                <CardHome.NamaLokasi nama={nama} lokasi={lokasi} />
            </div>
            <div className="flex flex-row">
                <Button
                    text={"Pesan Tiket"}
                    className="bg-[#3258E8] text-white w-[168px] cardhome-button "
                />
                <Button
                    text={"View Details"}
                    className="text-[#3258E8] w-[168px]"
                />
            </div>
        </div>
    );
};

const Image = ({ url }) => {
    return (
        <figure>
            <img src={`${url}`} alt="Shoes" className="rounded-3xl" />
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