import ModalBooking from "@/Components/ModalBooking";
import { Head } from "@inertiajs/react";
import Navbar from "../Partials/Navbar";
import { useState } from "react";



export default function Home(props) {
    const [shoModal, setShowModal] = useState(false);
    const [data, setData] = useState({});
    
    const Modal = (item) => {
        setData(item)
        setShowModal(true)
    }

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
                            <img src={`images/wisata/${item.gambar}`} alt={item.nama} />
                            <p>{item.rating}</p>
                            <p>{item.harga}</p>
                            <label htmlFor="my-modal-5" className="btn" onClick={() => Modal(item, props.auth)}>open modal</label>
                            <p>============================================================================</p>
                            <br></br>
                        </div>
                    )
                })
            }
            {
                shoModal && <ModalBooking data={data} id_user={props.auth.user.id} status={props.errors.status}/>
            }
        </div>
    );
}
