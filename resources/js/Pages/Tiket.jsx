const Tiket = (props) => {
    
    const formatDate = (dateStr) => {
        const date = new Date(dateStr);
        const day = date.getDate();
        const month = date.toLocaleString('id', { month: 'long' });
        const year = date.getFullYear();
        return `${day} ${month} ${year}`;
    }

    console.log(props.tiket)
    return (
        <div className='min-h-screen bg-slate-50'>
            <h1 className="flex mt-5 text-5xl justify-center">Tiket</h1>
            <div className="flex flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center gap-4 p-4">
            {
                props.tiket.map((data, index) => {
                    return (
                        <div className="card w-full lg:w-96 bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">{data.tempat_wisata.nama}</h2>
                                <p>{formatDate(data.tanggal)}</p>
                                <p>{data.jumlah_tiket} Tiket</p>
                                <div className="card-actions justify-end">
                                <button className="btn">Show</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default Tiket