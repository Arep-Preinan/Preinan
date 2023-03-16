import Navbar from "@/Partials/Navbar";

const HubungiKami = () => {
    return (
        <div className="bg-[#FAFAFA] h-screen">
            <Navbar active={"tentang-kami"}>
                <div className="mx-auto container pt-[48px] pb-[48px] pr-[20px] pl-[20px] md:pr-[50px] lg:pl-[100px] lg:pr-[100px] md:pl-[50px] flex flex-col gap-[50px]">
                    <div className="flex justify-center flex-col items-center gap-4">
                        <p className="text-[18px] text-[#3258E8] font-medium leading-[140%] ">
                            Sedikit Bercerita
                        </p>
                        <h1 className="text-[30px] md:text-[36px] leading-[54px] font-bold text-[#232631] ">
                            Tentang Website
                        </h1>
                        <p className="text-justify">
                            Preinan adalah sebuah website yang menawarkan
                            platform pencarian destinasi liburan di kawasan
                            indah Wonosobo. Didesain untuk mempromosikan
                            pariwisata lokal dan mendukung UMKM, Preinan
                            memiliki fitur memudahkan pembelian tiket masuk ke
                            tempat wisata dan menyediakan e-tiket dengan barcode
                            untuk keamanan dan kenyamanan pengunjung. Preinan
                            juga menyediakan informasi lengkap tentang lokasi,
                            harga tiket masuk, hingga akomodasi di sekitar
                            tempat wisata di tiga kategori wisata menarik di
                            Wonosobo, yaitu danau, gunung, dan air terjun.
                        </p>
                        <p className="text-justify">
                            Dengan fitur-fiturnya yang lengkap dan mudah
                            digunakan, Preinan adalah solusi terbaik bagi mereka
                            yang ingin merencanakan liburan tak terlupakan di
                            Wonosobo. Temukan destinasi liburan impianmu di
                            website Preinan dan nikmati keindahan alam Wonosobo.
                        </p>
                    </div>
                </div>
                <div className="bg-[#3258E8]">
                    <div className="justify-center items-center mx-auto container pb-[48px] pt-[48px] pr-[20px] pl-[20px] md:pr-[50px] lg:pl-[100px] lg:pr-[100px] md:pl-[50px] flex flex-col gap-[48px]">
                        <div className="flex flex-col gap-[24px] items-center">
                            <p className="text-[18px] text-[#FFBE58] font-medium leading-[140%]">
                                Makna Website
                            </p>
                            <h1 className="text-[36px] leading-[54px] font-bold text-white">
                                Visi dan Misi
                            </h1>
                        </div>
                        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-[48px]">
                            <div className="flex flex-col items-center lg:items-start gap-4">
                                <h1 className="text-[36px] leading-[54px] font-bold text-white">
                                    Visi
                                </h1>
                                <p className="flex items-start text-justify  text-white max-w-[700px]">
                                    Menjadi website terdepan dalam mempromosikan
                                    pariwisata lokal dan mendukung UMKM di
                                    Wonosobo dengan memberikan pengalaman
                                    liburan yang tak terlupakan bagi pengunjung.
                                </p>
                                <h1 className="text-[36px] leading-[54px] font-bold text-white">
                                    Misi
                                </h1>
                                <p className="text-justify  text-white">
                                    1. Menyediakan platform pencarian destinasi
                                    liburan yang lengkap dan mudah diakses bagi
                                    pengunjung.{" "}
                                </p>
                                <p className="text-justify  text-white">
                                    2. Mendukung UMKM lokal dengan mempromosikan
                                    produk dan jasa mereka di platform kami.
                                </p>
                                <p className="text-justify  text-white">
                                    3. Menjaga keamanan dan kenyamanan
                                    pengunjung dengan menyediakan e-tiket yang
                                    dilengkapi dengan barcode.
                                </p>
                                <p className="text-justify  text-white">
                                    4. Menyediakan informasi lengkap tentang
                                    tempat wisata, termasuk lokasi, harga tiket
                                    masuk, dan informasi terkait akomodasi di
                                    sekitar area wisata.
                                </p>{" "}
                                <p className="text-justify  text-white">
                                    5. Menjaga kepercayaan dan kepuasan
                                    pengunjung dengan memberikan pelayanan yang
                                    terbaik.
                                </p>{" "}
                            </div>
                            <div className="h-[300px] md:h-full lg:h-[501px] bg-[url(../images/preinanMockup.jpeg)] bg-cover rounded-3xl"></div>
                        </div>
                    </div>
                </div>
                <div className="mx-auto container pt-[48px] pb-[48px] pr-[20px] pl-[20px] md:pr-[50px] lg:pl-[100px] lg:pr-[100px] md:pl-[50px] flex flex-col gap-[50px]">
                    <div className="flex justify-center flex-col items-start gap-4">
                        <p className="text-[18px] text-[#3258E8] font-medium leading-[140%]">
                            Tim Hebat
                        </p>
                        <h1 className="text-[36px] leading-[54px] font-bold text-[#232631]">
                            Tim Arep-Preinan
                        </h1>
                    </div>
                    <div className="flex flex-col md:flex-row lg:justify-between">
                        <div className="h-[524px] w-[395px] flex flex-col gap-6">
                            <div className="h-[395px] bg-[url(../images/pakFay.jpg)] bg-cover rounded-3xl"></div>
                            <div className="flex flex-col gap-2 p-4">
                                <h1 className="text-[20px] leading-[120%] font-semibold text-[#232D45]">
                                    Faishal Mufied Al Anshary, S.Kom., M.Kom
                                </h1>
                                <p>Dosen Pendamping</p>
                            </div>
                        </div>
                        <div className="h-[524px] w-[395px] flex flex-col gap-6">
                            <div className="h-[395px] bg-[url(../images/userReview.png)] bg-cover rounded-3xl"></div>
                            <div className="flex flex-col gap-2 p-4">
                                <h1 className="text-[20px] leading-[120%] font-semibold text-[#232D45]">
                                    Sultan Hafizh Alexander
                                </h1>
                                <p>Mahasiswa S1 Sistem Informasi</p>
                            </div>
                        </div>
                        <div className="h-[524px] w-[395px] flex flex-col gap-6">
                            <div className="h-[395px] bg-[url(../images/wahyu.jpg)] bg-cover rounded-3xl"></div>
                            <div className="flex flex-col gap-2 p-4">
                                <h1 className="text-[20px] leading-[120%] font-semibold text-[#232D45]">
                                    Wahyudi Khoeris Salimi
                                </h1>
                                <p>Mahasiswa S1 Sistem Informasi</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Navbar>
        </div>
    );
};

export default HubungiKami;
