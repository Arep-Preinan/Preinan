const DetailKontak = ({ data }) => {
    return (
        <div className="border rounded-lg p-6 flex flex-col gap-[12px]">
            <div className="flex flex-rows-2 gap-4">
                <img src="../../images/icons/user.svg" alt="" />
                <p>{data.auth.user.fullname}</p>
            </div>
            <div className="flex flex-rows-2 gap-4">
                <img src="../../images/icons/kontak.svg" alt="" />
                <p>{data.auth.user.nomor_telepon}</p>
            </div>
        </div>
    );
};

export default DetailKontak;
