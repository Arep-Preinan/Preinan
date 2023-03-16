import ButtonLoading from "@/Components/ButtonLoading";
import { useForm } from "@inertiajs/react";
import { useState } from "react";
import DetailKontak from "./DetailKontak";

const CardBooking = (props) => {
    let [isLoading, setLoading] = useState(false);

    let { data, setData, post } = useForm({
        id_user: props.booking.auth.user.id,
        id_wisata: props.booking.destinasi.uuid,
        jumlahTiket: 1,
        tanggal: "",
        totalHarga: props.booking.destinasi.harga,
    });

    const submitBooking = async () => {
        setLoading(true);
        post(route("booking.store"), {
            preserveScroll: true,
            onSuccess: () => {
                setLoading(false);
            },
            onError: () => {},
        });
    };

    const convertRupiah = (angka) => {
        var rupiah = "";
        var angkarev = angka.toString().split("").reverse().join("");
        for (var i = 0; i < angkarev.length; i++)
            if (i % 3 == 0) rupiah += angkarev.substr(i, 3) + ".";
        return (
            "Rp " +
            rupiah
                .split("", rupiah.length - 1)
                .reverse()
                .join("")
        );
    };

    const handleCounter = (e) => {
        if (e === "plus") {
            setData("jumlahTiket", ++data.jumlahTiket);
            setData(
                "totalHarga",
                data.jumlahTiket * props.booking.destinasi.harga
            );
        } else if (e === "minus") {
            if (data.jumlahTiket > 1) {
                setData("jumlahTiket", --data.jumlahTiket);
                setData(
                    "totalHarga",
                    data.jumlahTiket * props.booking.destinasi.harga
                );
            }
        }
    };

    return (
        /* section card */
        <div
            className="card w-full lg:max-w-[550px] md:max-h-[500px] bg-base-100 p-5"
            id="rekomendasi-detail-wisata"
        >
            <div className="flex flex-col gap-3 md:gap-6">
                {/* section tujuan */}
                <CardBooking.Structure text={"Destinasi"}>
                    <div className="flex flex-col md:flex-row justify-between gap-3 md:gap-0">
                        <div className="flex flex-rows-2 gap-4">
                            <img src="http://preinan.xxuz.com/images/icons/destinasi.svg" alt="" />
                            <div className="flex flex-col">
                                <h3 className="text-[#232631] text-[18px]">
                                    {props.booking.destinasi.nama}
                                </h3>
                                <p className="font-light text-gray-400 text-[14px]">
                                    {props.booking.destinasi.kategori}
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-row-reverse items-center md:flex-col justify-end md:items-start">
                            <p
                                className={`text-xs md:absolute md:top-[113px] ${
                                    data.tanggal == ""
                                        ? "text-red-600"
                                        : "text-gray-600"
                                } `}
                            >
                                {data.tanggal == "" ? "* Pilih tanggal" : null}
                            </p>
                            <input
                                type="date"
                                className="border-1 border-[#EAEAEA] p-2 rounded-lg"
                                onChange={(e) =>
                                    setData("tanggal", e.target.value)
                                }
                                min={new Date().toISOString().split("T")[0]}
                            />
                        </div>
                    </div>
                </CardBooking.Structure>

                {/* end section tujuan */}
                <div className="h-[1px] w-full bg-[#EAEAEA]"></div>
                {/* section detail pemesanan */}
                <CardBooking.Structure text={"Detail Pemesan"}>
                    <DetailKontak data={props.booking} />
                </CardBooking.Structure>
                {/* end section detail pemesanan */}

                {/* section hitung tiket */}
                <div className="border rounded-xl border-[#EAEAEA] grid md:grid-cols-[auto_40%] gap-4 grid-cols-1">
                    <div className="flex-1 justify-start">
                        <div className="flex items-center justify-between p-4 gap-5 ">
                            <button
                                onClick={() => handleCounter("minus")}
                                className="bg-gray-100 text-[20px] text-gray-700  h-[30px] w-[30px] rounded-full"
                                id="minusBtn"
                            >
                                -
                            </button>
                            <div className="flex gap-2">
                                <h1 className="text-center" id="counterInput">
                                    {data.jumlahTiket}
                                </h1>
                                <h1>Orang</h1>
                            </div>
                            <button
                                onClick={() => handleCounter("plus")}
                                className="bg-gray-100 text-[20px] text-gray-700  h-[30px] w-[30px] rounded-full"
                                id="plusBtn"
                            >
                                +
                            </button>
                        </div>
                    </div>
                    <div className="bg-cardbooking rounded-xl">
                        <div className="w-full p-3 md:p-0 lg:w-[182px] grid place-items-center h-full ">
                            <h1
                                className="text-center text-[#3258E8] text-[20px] leading-[30px] font-semibold"
                                id="counterInput"
                            >
                                {convertRupiah(data.totalHarga)}
                            </h1>
                        </div>
                    </div>
                </div>

                {/* end section hitung tiket */}

                {/* section bayar */}
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <select
                        defaultValue={""}
                        className="select select-ghost md:max-w-xs font-normal text-[16px] leading-[24px] text-[#6D6D6D]"
                    >
                        <option disabled selected>
                            {/* <h1 className="flex-grow "> */}
                            Pilih Metode Pembayaran
                            {/* </h1> */}
                        </option>
                        <option>VA BCA</option>
                        <option>QRIS</option>
                        <option>VA BRI</option>
                    </select>

                    {isLoading ? (
                        <ButtonLoading />
                    ) : (
                        <button
                            onClick={() => submitBooking()}
                            className={`btn btn-primary w-full md:w-[194px] rounded-xl ${
                                data.tanggal === ""
                                    ? null
                                    : "button-cardbooking"
                            } `}
                            disabled={data.tanggal === "" ? true : false}
                        >
                            Bayar
                        </button>
                    )}
                </div>
                {/* end section bayar */}
            </div>
        </div>
        /* end section card */
    );
};

const Structure = ({ children, text, className }) => {
    return (
        <div className="flex flex-col gap-2">
            <h1 className="text-[#232631] text-[20px] leading-[30px] font-semibold">
                {text}
            </h1>
            <div className={`${className}`}>{children}</div>
        </div>
    );
};

CardBooking.Structure = Structure;

export default CardBooking;
