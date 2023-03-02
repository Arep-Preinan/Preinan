import { Inertia } from '@inertiajs/inertia'

export default function Home(props) {
    const booking = (item) => {
        Inertia.post('/booking', item)
    }

    return  (
        props.tempatWisata.map((item, index) => {
            return (
                <div key={index}>
                    <h1>{item.nama}</h1>
                    <p>{item.alamat}</p>
                    <img src={item.gambar} alt={item.nama} />
                    <p>{item.rating}</p>
                    <p>{item.harga}</p>
                    <button onClick={() => booking(item)}>Booking</button>
                    <p>============================================================================</p>
                    <br></br>
                </div>
            )
        })
            
        );
    }

