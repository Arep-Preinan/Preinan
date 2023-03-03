import { Link, useForm } from "@inertiajs/react"

const DestinasiCard = ({ destinasi }) => {
    
    const { data, get } = useForm({
        id_destinasi: destinasi.id
    })

    const handleBooking = () => {
        get(route('booking.create'))
    }

    const pisahkanStripSetiapKata = (string) => {
        let pisahkan = string.split(" ")
        let gabung = pisahkan.join("-")
        return gabung
    }

    const ambilKataSebelumKoma = (string) => {
        // ambil kata sebelum koma
        let pisahkan = string.split(",")
        return pisahkan[0]
    }

    return(
        <div className="card w-72 bg-base-100 shadow-xl">
            <figure className="rounded-2xl"><img src={`/images/wisata/${pisahkanStripSetiapKata(destinasi.nama)}/1.jpg`} alt="Shoes" /></figure>
            <div className="p-5">
                <div className="flex-row flex grid-rows-2">
                    <p className="rounded-md px-2 font-semibold text-blue-500 btn-active btn-ghost mr-2">{destinasi.kategori}</p>
                    <div className="rating ">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" readOnly/>
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" readOnly checked/>
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" readOnly/>
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" readOnly/>
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-200" readOnly/>
                    </div>
                </div>
                <h2 className="card-title text-2xl font-bold pt-3">{destinasi.nama}</h2>
                <a className="flex flex-row grid-rows-2" href={destinasi.gmaps}>
                    <img src="/images/icons/location.svg" alt="placeholder" className="w-5 h-5" />
                    <p className="text-gray-500">{ambilKataSebelumKoma(destinasi.alamat)}</p>
                </a>
                <p className="text-gray-500">Rp {destinasi.harga}</p>
                <div className="flex justify-between grid-rows-2 mt-3">
                    <button className="btn btn-primary" onClick={() => handleBooking()}>Buy Now</button>
                    <Link href={`/destinasi/${pisahkanStripSetiapKata(destinasi.nama)}`} className="btn btn-outline">Detail</Link>
                </div>
            </div>
        </div>
    )
}

export default DestinasiCard