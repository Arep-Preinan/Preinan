import { useState } from "react"
import DestinasiCard from "@/Components/DestinasiCard"

const Destinasi = (props) => {
    const [all] = useState(props.all)
    const [gunung] = useState(props.gunung)
    const [airTerjun] = useState(props.air_terjun)
    const [danau] = useState(props.danau)
    const [isActived, setIsActived] = useState("all")

    const handleActive = (kategori) => {
        setIsActived(kategori)
    }

    return (
        <div id="destinasi" className="mt-20">
            <div className="flex flex-col my-auto items-center bgimg bg-cover">
                <p className="text-blue-500 font-semibold">Temukan Hidden Gems</p>
                <h3 className="text-3xl font-bold">Kota Wisata Wonosobo</h3>
                <div className="grid grid-cols-4 gap-1 mt-16">
                    <button className={`btn ${isActived !== "all" ? "btn-outline" : ""} btn-primary`} onClick={() => handleActive("all")}>Semua Destinasi</button>
                    <button className={`btn ${isActived !== "gunung" ? "btn-outline" : ""} btn-primary`} onClick={() => handleActive("gunung")}>Gunung</button>
                    <button className={`btn ${isActived !== "danau" ? "btn-outline" : ""} btn-primary`} onClick={() => handleActive("danau")}>Danau</button>
                    <button className={`btn ${isActived !== "air terjun" ? "btn-outline" : ""} btn-primary`} onClick={() => handleActive("air terjun")}>Air Terjun</button>
                </div>
            </div>
            <div id="kumpulan-destinasi" className='flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center gap-4 p-4 mt-10'>
                {
                    isActived === "all" ? all.map((destinasi) => {
                        return (
                            <DestinasiCard key={destinasi.id} destinasi={destinasi} />
                        )
                    }) : isActived === "gunung" ? gunung.map((destinasi) => {
                        return (
                            <DestinasiCard destinasi={destinasi} />
                        )
                    }
                    ) : isActived === "danau" ? danau.map((destinasi) => {
                        return (
                            <DestinasiCard destinasi={destinasi} />
                        )
                    }
                    ) : airTerjun.map((destinasi) => {
                        return (
                            <DestinasiCard destinasi={destinasi} />
                        )
                    }
                    )
                }
            </div>

        </div>
    )
}

export default Destinasi