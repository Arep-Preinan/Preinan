import { Head } from "@inertiajs/react";
import Navbar from "../Partials/Navbar";


export default function Home(props) {
    console.log(props)
    return (
        <div className="mx-auto max-w-[1440px] pr-[20px] pl-[20px] md:pr-[50px] lg:pl-[100px] lg:pr-[100px] md:pl-[50px]">
            <Head title="Home" />
            <Navbar user={props.auth.user} />
            {
                    props.tempatWisata.map((item, index) => {
                    return (
                        <div key={index}>
                            <h1>{item.nama}</h1>
                            <p>{item.alamat}</p>
                            {/* tampilkan gambar pada file Batu-Ratapan-Angin.jpg */}
                            <img src={`images/wisata/${item.gambar}`} alt={item.nama} />
                            <p>{item.rating}</p>
                            <p>{item.harga}</p>
                            <button onClick={() => booking(item)}>Booking</button>
                            <p>============================================================================</p>
                            <br></br>
                        </div>
                    )
                })
            }
        </div>
    );
}
