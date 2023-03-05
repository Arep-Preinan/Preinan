const DetailKontak = ({data}) => {
    console.log(data)
    return(
        <div className="border rounded-lg p-4">
            <div className="flex flex-rows-2 gap-4">
                <img src="../../images/icons/user.svg" alt="" />
                <p>{data.auth.user.fullname}</p>
            </div>
            <div className="flex flex-rows-2 gap-4">
                <img src="../../images/icons/kontak.svg" alt="" />
                <p>{data.auth.user.nomor_telepon}</p>
            </div>
        </div>
    )
}

export default DetailKontak