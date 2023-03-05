import Heading from "@/Components/Heading";

const BreadCumbs = ({ items }) => {
    return (
        <>
            <div className="flex flex-col gap-[32px]">
                <div id="button-breadcumbs" className="flex gap-4 items-center">
                    <p className="button-breadcumbs-destinasi">Destinasi</p>
                    <p className="button-breadcumbs-breadcumbs">
                        Halaman Utama /{" "}
                        <span className="text-[#3258E8]">Destinasi</span>{" "}
                    </p>
                </div>
                <Heading>
                    <Heading.Title
                        text={
                            "Eksplorasi & Nikmati Keindahan Alam Kota Wonosobo"
                        }
                    />
                </Heading>
                <div className="grid md:grid-cols-[auto_auto] lg:grid-cols-[auto_420px] gap-5 h-[540px] ">
                    <div className="bg-slate-500 rounded-[24px]">Gambar 1</div>
                    <div className="grid grid-cols-2 md:grid-cols-1 gap-5">
                        <div className="bg-slate-500 rounded-[24px]">
                            Gambar 2
                        </div>
                        <div className="bg-slate-500 rounded-[24px]">
                            Gambar 3
                        </div>
                    </div>
                </div>
            </div>
        </>
    )  
}

export default BreadCumbs