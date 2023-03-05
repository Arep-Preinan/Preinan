import { Link } from "@inertiajs/react";

const Success = () => {
    
    return (
        <div className="flex flex-col my-auto items-center bgimg bg-cover">

        {/* section judul */}
        <h1 className="font-semibold text-4xl">Terimakasih</h1>
        <img src="../../images/icons/transaction-success.svg" alt="" />
        <p className="font-light text-gray-400 text-[18px]">Pembayaran anda akan dikonfirmasi secara otomatis</p>
        <Link href={"/tiket-ku"}className="btn btn-primary px-6">Cek Tiket</Link>
        {/* end section judul */}
    </div>
    );
}

export default Success;