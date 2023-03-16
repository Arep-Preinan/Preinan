import { Link } from "@inertiajs/react";

const BreadCumbs = ({ nama, active }) => {
    return (
        <>
            <div className="flex flex-col gap-[32px] mt-[48px]">
                <div id="button-breadcumbs" className="flex gap-4 items-center">
                    <p className="button-breadcumbs-destinasi hidden md:flex">
                        Destinasi
                    </p>
                    <p className="button-breadcumbs-breadcumbs text-[14px] md:leading-[27px] md:text-[18px] ">
                        <Link href="/" className={`hover:text-[#3258E8]`}>
                            {active == "detail" ? "..." : "Halaman Utama"}
                        </Link>{" "}
                        {">"}{" "}
                        <Link
                            href="/destinasi"
                            className={`${
                                !nama && "text-[#3258E8]"
                            } hover:text-[#3258E8]`}
                        >
                            Destinasi
                        </Link>{" "}
                        {nama && (
                            <span className="text-[#3258E8]">
                                {">"} {nama}
                            </span>
                        )}
                    </p>
                </div>
            </div>
        </>
    );
};

export default BreadCumbs;
