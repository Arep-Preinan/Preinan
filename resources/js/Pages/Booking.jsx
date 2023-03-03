const Booking = (props) => {
    console.log(props)
    return (
        <div className="flex flex-col my-auto items-center bgimg bg-cover">
            <h1 className="font-semibold text-4xl">Lengkapi Data & Pembayaran</h1>
            <p className="font-light text-gray-400 text-[18px]">Silahkan selesaikan pembayaran</p>
            <p className="font-light text-gray-400 text-[18px]">untuk mendapatkan E-ticket</p>
        </div>
    )
}

export default Booking