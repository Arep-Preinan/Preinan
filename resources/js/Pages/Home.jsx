import ModalBooking from "@/Components/ModalBooking";
import { Head } from "@inertiajs/react";
import Navbar from "../Partials/Navbar";
import { useState } from "react";



export default function Home(props) {
    console.log(props)
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

        </div>
    );
}
