const Button = ({ text, className, ...props }) => {
    return (
        <>
            <button
                {...props}
                className={`${className} typography-button pl-[32px] pr-[32px] pt-[12px] pb-[12px] rounded-xl`}
            >
                {text}
            </button>
        </>
    );
};
export default Button;
