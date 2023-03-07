const Heading = ({ children }) => {
    return <div className="flex flex-col gap-3">{children}</div>;
};
const Title = ({ text }) => {
    return (
        <h1 className=" md:leading-[54px] font-bold text-[24px] md:text-[36px] capitalize">
            {text}
        </h1>
    );
};
const Tagline = ({ text }) => {
    return (
        <p className="leading-[140%] font-semibold text-[18px] text-[#3258E8]">
            {text}
        </p>
    );
};

Heading.Title = Title;
Heading.Tagline = Tagline;

export default Heading;
