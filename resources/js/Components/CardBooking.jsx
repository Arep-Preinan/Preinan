import ButtonLoading from "@/Components/ButtonLoading"
import { useForm, usePage  } from "@inertiajs/react"
import { useEffect, useState } from "react"

const CardBooking = (props) => {

    useEffect(() => {
        console.log(props.page)
    }, [])

    let [isLoading, setLoading] = useState(false)

    let {data, setData, post} = useForm({
        id_user: props.booking.auth.user.id,
        id_wisata: props.booking.destinasi.uuid,
        jumlahTiket: 1,
        tanggal: '',
        totalHarga: props.booking.destinasi.harga, 
    })

    const destroyData = () => {
        setData('jumlahTiket', 1)
        setData('tanggal', '')
        setData('totalHarga', 0)
        setData('id_wisata', props.booking.destinasi.uuid)
    }

    const submitBooking = async () => {
        setLoading(true)
        console.log("submit")
        post(route('booking.store'), {
            preserveScroll: true,
            onSuccess: () => {
                setLoading(false)
            },
            onError: () => {
                console.log("error")
            }
        })
    }

    const convertRupiah = (angka) => {
        var rupiah = '';
        var angkarev = angka.toString().split('').reverse().join('');
        for(var i = 0; i < angkarev.length; i++) if(i%3 == 0) rupiah += angkarev.substr(i,3)+'.';
        return 'Rp '+rupiah.split('',rupiah.length-1).reverse().join('');
    }

    const handleCounter = (e) => {
        if(e === "plus") {
            setData('jumlahTiket', ++data.jumlahTiket)
            setData('totalHarga', data.jumlahTiket * props.booking.destinasi.harga)
        } else if(e === "minus") {
            if(data.jumlahTiket > 1) {
                setData('jumlahTiket', --data.jumlahTiket)
                setData('totalHarga', data.jumlahTiket * props.booking.destinasi.harga)
            }
        }
    } 

    return ( 

        /* section card */
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">

                {/* section tujuan */}
                <h1>Destinasi</h1>
                <div className="flex flex-rows-2 gap-4">
                    <img src="../../images/icons/destinasi.svg" alt="" />
                    <div className="flex flex-col">
                        <h3 className="font-semibold text-2xl">{props.booking.destinasi.nama}</h3>
                        <p className="font-light text-gray-400 text-[18px]">{props.booking.destinasi.kategori}</p>
                    </div>
                </div>
                {/* end section tujuan */}


                <div className="border-b border-gray-400 border-2 mt-3 mb-5"></div>

                {/* section detail pemesanan */}
                <h1>Detail Pemesanan</h1>
                <div className="border rounded-lg p-4">
                    <div className="flex flex-rows-2 gap-4">
                        <img src="../../images/icons/user.svg" alt="" />
                        <p>{props.booking.auth.user.name}</p>
                    </div>
                    <div className="flex flex-rows-2 gap-4">
                        <img src="../../images/icons/kontak.svg" alt="" />
                        <p>{props.booking.auth.user.nomor_telepon}</p>
                    </div>
                </div>
                {/* end section detail pemesanan */}


                {/* section hitung tiket */}
                <div className="border rounded-lg p-4 flex flex-row items-center gap-4">
                    <div className="flex-1">
                        <div className="flex items-center">
                        <button onClick={() => handleCounter("minus")} className="bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-full" id="minusBtn">-</button>
                        <h1 className="text-center w-16" id="counterInput">{data.jumlahTiket}</h1>
                        <button onClick={() => handleCounter("plus")} className="bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-full" id="plusBtn">+</button>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center rounded-md p-4 bg-blue-50">
                            <h1 className="text-center" id="counterInput">{convertRupiah(data.totalHarga)}</h1>
                        </div>
                    </div>                    
                </div>
                <input type="date" className="border-2 border-gray-300 p-2 rounded-lg w-full" onChange={(e) => setData("tanggal", e.target.value)} />
                {/* end section hitung tiket */}

                {/* section bayar */}
                <div className="flex justify-between items-center mt-3">
                    <h1 className="flex-grow w-10">Pilih Metode Pembayaran</h1>
                    {
                        isLoading ? <ButtonLoading/> : 
                        <button onClick={() => submitBooking()} className="btn btn-primary px-6" disabled={data.tanggal === '' ? true : false}>Bayar</button>
                    }
                    
                </div>
                {/* end section bayar */}

            </div>
        </div>
        /* end section card */
    )

};

export default CardBooking;