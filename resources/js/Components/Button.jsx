const Button = ({ text, className }) => {
    return (
        <>
            <button
                className={`${className} typography-button pl-[32px] pr-[32px] pt-[12px] pb-[12px]  rounded-xl`}
            >
                {text}
            </button>
        </>
    );
};
export default Button;
