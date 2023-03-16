import { Link } from "@inertiajs/react";

const Success = () => {
    return (
        <div className="grid place-items-center h-screen my-auto items-center bgimg bg-cover">
            {/* section judul */}
            <div className="text-center flex flex-col gap-8">
                <h1 className="font-semibold text-4xl">Terimakasih</h1>
                <img
                    src="http://preinan.xxuz.com/images/icons/transaction-success.svg"
                    alt=""
                />
                <p className="font-light text-gray-400 text-[18px]">
                    Pembayaran anda akan dikonfirmasi secara otomatis
                </p>
                <Link href={"/tiket-ku"} className="btn bg-[#3258E8] px-6">
                    Cek Tiket
                </Link>
            </div>
            {/* end section judul */}
        </div>
    );
};

export default Success;
