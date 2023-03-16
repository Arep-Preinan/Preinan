import { useForm } from "@inertiajs/react";
import { useState } from "react";
import successTransaction from "./successTransaction";

const ModalBooking = (props) => {
    let [isLoading, setLoading] = useState(false);
    let [page, setPage] = useState(1);

    let { data, setData, post } = useForm({
        jumlahTiket: 1,
        tanggal: "",
        user_id: props.id_user,
        id_wisata: props.data.id,
        totalHarga: props.data.harga,
    });

    const handleCounter = (e) => {
        if (e === "plus") {
            setData("jumlahTiket", ++data.jumlahTiket);
            setData("totalHarga", data.jumlahTiket * props.data.harga);
        } else if (e === "minus") {
            if (data.jumlahTiket > 1) {
                setData("jumlahTiket", --data.jumlahTiket);
                setData("totalHarga", data.jumlahTiket * props.data.harga);
            }
        }
    };

    const destroyData = () => {
        setData("jumlahTiket", 1);
        setData("tanggal", "");
        setData("totalHarga", 0);
        setData("id_wisata", props.data.id);
    };

    const submitBooking = async () => {
        setLoading(true);
        post(route("booking.store"), {
            preserveScroll: true,
            onSuccess: () => {
                setLoading(false);
                setPage(2);
            },
            onError: () => {
                setLoading(false);
            },
        });
    };

    return (
        <>
            {page === 1 ? (
                <>
                    <input
                        type="checkbox"
                        id="my-modal-5"
                        onClick={() => destroyData()}
                        className="modal-toggle"
                    />
                    <div className="modal">
                        <div className="modal-box w-11/12 max-w-5xl">
                            <label
                                htmlFor="my-modal-5"
                                className="hover:cursor-pointer absolute top-5 right-5 p-2 text-gray-700"
                            >
                                X
                            </label>
                            <h3 className="font-bold text-lg">
                                {props.data.nama}
                            </h3>
                            <p className="py-4">{props.data.alamat}</p>
                            <img
                                className="w-96"
                                src={`/images/wisata/${props.data.gambar}`}
                                alt={props.data.nama}
                            />
                            <p className="py-4">Tanggal</p>
                            <input
                                type="date"
                                className="border-2 border-gray-300 p-2 rounded-lg w-full"
                                onChange={(e) =>
                                    setData("tanggal", e.target.value)
                                }
                            />
                            <p className="py-4">Jumlah Orang</p>
                            <div className="justify-center items-center">
                                <div className="flex items-center">
                                    <button
                                        onClick={() => handleCounter("minus")}
                                        className="bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-l"
                                        id="minusBtn"
                                    >
                                        -
                                    </button>
                                    <input
                                        type="text"
                                        className="border border-gray-400 py-2 px-4 rounded-none text-center w-20"
                                        value={data.jumlahTiket}
                                        id="counterInput"
                                        readOnly
                                    />
                                    <button
                                        onClick={() => handleCounter("plus")}
                                        className="bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-r"
                                        id="plusBtn"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                            <p>Rp {data.totalHarga}</p>
                            <div className="modal-action">
                                {isLoading ? (
                                    <button
                                        type="button"
                                        className="bg-indigo-500"
                                        disabled
                                    >
                                        <svg
                                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                stroke-width="4"
                                            ></circle>
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                            ></path>
                                        </svg>
                                        Processing...
                                    </button>
                                ) : (
                                    <button
                                        className="btn"
                                        onClick={() => submitBooking()}
                                        disabled={
                                            data.tanggal === "" ? true : false
                                        }
                                    >
                                        Pesan Sekarang
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <>{successTransaction()}</>
            )}
        </>
    );
};

export default ModalBooking;
