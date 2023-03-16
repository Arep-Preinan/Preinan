import { Head } from "@inertiajs/react";
import formatTanggal from "@/function/formatTanggal";
import Navbar from "@/Partials/Navbar";
import RatingReview from "@/Components/RatingReview";
import { useState } from "react";
import E_Tiket from "@/Components/E-Tiket";

const Tiket = (props) => {
    const [tabActive, setTabActive] = useState("aktif");

    const handleTabActive = (tab) => {
        setTabActive(tab);
    };
    return (
        <div className="bg-[#FAFAFA] h-screen">
            <Navbar user={props.auth.user} active={"tiketku"}>
                <Head title="Tiket" />
                <div className="mx-auto mt-10 lg:mt-20 container pr-[20px] pl-[20px] md:pr-[50px] lg:pl-[100px] lg:pr-[100px] md:pl-[50px] flex flex-col items-center  ">
                    <div
                        className="bg-white rounded-xl p-6 flex flex-col gap-6 w-full max-w-[800px] justify-center "
                        id="rekomendasi-detail-wisata"
                    >
                        <div className="tabs tabs-boxed bg-white">
                            <a
                                className={`tab md:tab-lg ${
                                    tabActive === "aktif"
                                        ? "tab-active bg-[#3258E8_!important]"
                                        : ""
                                }`}
                                onClick={() => handleTabActive("aktif")}
                            >
                                Tiket Aktif
                            </a>
                            <a
                                className={`tab md:tab-lg ${
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
                                                      {
                                                          data.tempat_wisata
                                                              .kategori
                                                      }
                                                  </p>
                                                  <p className="text-[14px] text-gray-400">
                                                      {formatTanggal(
                                                          data.tanggal
                                                      )}
                                                  </p>
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
                                                          src="/images/icons/tiket.svg"
                                                          alt="icon lokasi"
                                                      />
                                                      <p class="text-gray-500">
                                                          {data.jumlah_tiket}{" "}
                                                          Tiket
                                                      </p>
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="flex flex-row justify-end items-center pb-6">
                                              <label
                                                  htmlFor={`my-modal-${index}`}
                                                  className="border-none bg-[#24d12c] text-white text-[14px] pl-[32px] pr-[32px] pt-[12px] pb-[12px] btn"
                                              >
                                                  Detail Tiket
                                              </label>
                                          </div>
                                          <div className="h-[1px] w-full bg-[#EAEAEA]"></div>
                                          <input
                                              type="checkbox"
                                              id={`my-modal-${index}`}
                                              className="modal-toggle"
                                          />
                                          <div className="modal">
                                              <div className="">
                                                  <E_Tiket
                                                      tiket={data}
                                                      auth={props.auth}
                                                      index={index}
                                                  />
                                              </div>
                                          </div>
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
                                                                  data
                                                                      .tempat_wisata
                                                                      .nama
                                                              }
                                                          </h2>
                                                          <p>#{data.kode}</p>
                                                      </div>
                                                      <div class="flex items-center gap-2">
                                                          <img
                                                              src="/images/icons/tiket.svg"
                                                              alt="icon lokasi"
                                                          />
                                                          <p class="text-gray-500">
                                                              {
                                                                  data.jumlah_tiket
                                                              }{" "}
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
            </Navbar>
        </div>
    );
};

export default Tiket;
