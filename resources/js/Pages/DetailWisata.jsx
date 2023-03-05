import CardBooking from "@/Components/CardBooking"

const DetailWisata = (props) => {
    console.log(props)
    
    // buatkan data seperti ini booking {destinasi : {}}
    let destinasi = {
        destinasi: props.tempat_wisata,
        auth: props.auth
    }

    return (
        <>
            {/* konten yang ada pada bawah foto */}
                <h1>{props.tempat_wisata.nama}</h1>
                <div className="text-lg" dangerouslySetInnerHTML={{ __html: props.tempat_wisata.deskripsi }}></div>
                <h1>{props.tempat_wisata.alamat}</h1>
                <h1>{props.tempat_wisata.rating}</h1>
            {/* akhir konten yang ada pada bawah foto */}

            {/* konten yang rekomendasi */}
                <h1>==================</h1>
                <h1>Rekomendasi</h1>
                {
                    props.rekomendasi.map((item, index) => {
                        return (
                            <>
                                <h1>{item.nama}</h1>
                                <div className="text-lg" dangerouslySetInnerHTML={{ __html: item.deskripsi.substring(0, 75).trim() + '...'}}></div>
                                <br/>
                            </>
                                                
                        )
                    })
                }
            {/* akhir konten yang rekomendasi */}

            {/* card booking */}
                <CardBooking booking={destinasi} />
        </>

    )

}

export default DetailWisata