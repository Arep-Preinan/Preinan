import Navbar from "@/Partials/Navbar";

const HubungiKami = () => {
    return (
        <div className="bg-[#FAFAFA] h-screen">
            <Navbar />
            <div className="mx-auto container pr-[20px] pl-[20px] md:pr-[50px] lg:pl-[100px] lg:pr-[100px] md:pl-[50px] flex flex-col gap-[50px]">
                <div className="flex justify-center">
                    <h1 className="text-[36px] leading-[54px] font-bold text-[#232631]">
                        Tentang Website
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default HubungiKami;
