import Navbar from "../Partials/Navbar";
// import { Inertia } from '@inertiajs/inertia'

// export default function Home(props) {
//     const booking = (item) => {
//         Inertia.post('/booking', item)
//     }

//     return  (
//         props.tempatWisata.map((item, index) => {
//             return (
//                 <div key={index}>
//                     <h1>{item.nama}</h1>
//                     <p>{item.alamat}</p>
//                     <img src={item.gambar} alt={item.nama} />
//                     <p>{item.rating}</p>
//                     <p>{item.harga}</p>
//                     <button onClick={() => booking(item)}>Booking</button>
//                     <p>============================================================================</p>
//                     <br></br>
//                 </div>
//             )
//         })

//         );
//     }

export default function Home() {
    return (
        <div className="mx-auto max-w-[1440px] pr-[20px] pl-[20px] md:pr-[50px] lg:pl-[100px] lg:pr-[100px] md:pl-[50px]">
            <Navbar />
        </div>
    );
}
