const Heading = ({ children }) => {
    return <div className="flex flex-col gap-3">{children}</div>;
};
const Title = ({ text, className }) => {
    return (
        <h1
            className={`md:leading-[54px] font-bold text-[24px] md:text-[28px] lg:text-[36px] capitalize ${className}`}
        >
            {text}
        </h1>
    );
};
const Tagline = ({ text, color = "#3258E8" }) => {
    return (
        <p
            className={`leading-[140%] font-semibold text-[16px] lg:text-[18px] text-[${color}] `}
        >
            {text}
        </p>
    );
};

Heading.Title = Title;
Heading.Tagline = Tagline;

export default Heading;
