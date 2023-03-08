import { Head, Link } from "@inertiajs/react";
import formatTanggal from "@/function/formatTanggal";
import Button from "@/Components/Button";
import Navbar from "@/Partials/Navbar";
import RatingReview from "@/Components/RatingReview";
import { useState } from "react";

const Tiket = (props) => {
    const [tabActive, setTabActive] = useState("aktif");

    const handleTabActive = (tab) => {
        setTabActive(tab);
    };
    console.log(props);
    return (
        <div className="bg-[#FAFAFA] h-full">
            <Navbar user={props.auth.user} />
            <Head title="Tiket" />
            <div className="mx-auto mt-20 container pr-[20px] pl-[20px] md:pr-[50px] lg:pl-[100px] lg:pr-[100px] md:pl-[50px] flex flex-col items-center  ">
                <div
                    className="bg-white rounded-xl p-6 flex flex-col gap-6 w-full xl:w-[1000px] justify-center "
                    id="rekomendasi-detail-wisata"
                >
                    <div className="tabs tabs-boxed bg-white">
                        <a
                            className={`tab tab-lg ${
                                tabActive === "aktif"
                                    ? "tab-active bg-[#3258E8_!important]"
                                    : ""
                            }`}
                            onClick={() => handleTabActive("aktif")}
                        >
                            Tiket Aktif
                        </a>
                        <a
                            className={`tab tab-lg ${
                                tabActive === "riwayat"
                                    ? "tab-active bg-[#3258E8_!important]"
                                    : ""
                            }`}
                            onClick={() => handleTabActive("riwayat")}
                        >
                            Riwayat Tiket
                        </a>
                    </div>
                    <div className="h-[1px] w-full bg-[#EAEAEA]"></div>
                    {/* tampilan dari tiket aktif */}
                    {tabActive === "aktif"
                        ? props.tiket_valid.map((data, index) => {
                              return (
                                  <div className="mb-2 rounded-lg w-full   ">
                                      <div>
                                          <div class="flex items-center gap-2 justify-between">
                                              <p className="button-breadcumbs-mobile flex text-[14px]">
                                                  {data.tempat_wisata.kategori}
                                              </p>
                                              <p className="text-[14px] text-gray-400">
                                                  {formatTanggal(data.tanggal)}
                                              </p>
                                          </div>
                                          <div className="flex flex-col gap-6 mt-6">
                                              <div className="flex items-center h-100 gap-4">
                                                  <h2 className="card-title">
                                                      {data.tempat_wisata.nama}
                                                  </h2>
                                                  <p>#{data.kode}</p>
                                              </div>
                                              <div class="flex items-center gap-2">
                                                  <img
                                                      src="http://preinan.xxuz.com/images/icons/tiket.svg"
                                                      alt="icon lokasi"
                                                  />
                                                  <p class="text-gray-500">
                                                      {data.jumlah_tiket} Tiket
                                                  </p>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="flex flex-row justify-between pb-6">
                                          <Link
                                              href={`e-tiket/${data.uuid}`}
                                              as="button"
                                              className="text-[#3258E8]"
                                          >
                                              Detail Tiket
                                          </Link>
                                          <Button
                                              text={"Tiket Valid"}
                                              className="bg-[#24d12c] text-white text-[14px] p-0 "
                                          />
                                      </div>
                                      <div className="h-[1px] w-full bg-[#EAEAEA]"></div>
                                  </div>
                              );
                          })
                        : props.tiket_unvalid.map((data, index) => {
                              return (
                                  <div className="mb-2 rounded-lg w-full bg-base-100 ">
                                      <div className="mb-2 rounded-lg w-full   ">
                                          <div>
                                              <div class="flex items-center gap-2 justify-between">
                                                  <p className="button-breadcumbs-mobile flex">
                                                      {
                                                          data.tempat_wisata
                                                              .kategori
                                                      }
                                                  </p>
                                                  <div className="flex justify-center items-center">
                                                      <p className="text-[14px] text-gray-400">
                                                          {formatTanggal(
                                                              data.tanggal
                                                          )}
                                                      </p>
                                                  </div>
                                              </div>
                                              <div className="flex flex-col gap-6 mt-6">
                                                  <div className="flex items-center h-100 gap-4">
                                                      <h2 className="card-title">
                                                          {
                                                              data.tempat_wisata
                                                                  .nama
                                                          }
                                                      </h2>
                                                      <p>#{data.kode}</p>
                                                  </div>
                                                  <div class="flex items-center gap-2">
                                                      <img
                                                          src="http://preinan.xxuz.com/images/icons/tiket.svg"
                                                          alt="icon lokasi"
                                                      />
                                                      <p class="text-gray-500">
                                                          {data.jumlah_tiket}{" "}
                                                          Tiket
                                                      </p>
                                                  </div>
                                              </div>
                                          </div>
                                          <RatingReview
                                              wisata={data}
                                              user={props.auth.user}
                                          />
                                          <div className="h-[1px] w-full bg-[#EAEAEA]"></div>
                                      </div>
                                  </div>
                              );
                          })}
                    {}
                    {/* tampilan dari tiket yang tidak aktif */}
                </div>
            </div>
        </div>
    );
};

export default Tiket;

{
    /* <h2 className="card-title">{data.tempat_wisata.nama}</h2>
<p>{formatTanggal(data.tanggal)}</p>
<p>{data.jumlah_tiket} Tiket</p>
<div className="card-actions justify-end">
<Link href={`e-tiket/${data.uuid}`} className="btn">Show</Link>
</div> */
}
