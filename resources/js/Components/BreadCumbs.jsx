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
            </div>
        </>
    );
};

export default BreadCumbs;
