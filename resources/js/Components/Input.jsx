const Input = ({ text, className, type = "text", ...props }) => {
    return (
        <input
            {...props}
            type={type}
            placeholder={text}
            className={`transition duration-600 input input-bordered w-full rounded-[12px] border-gray-300 ${className} `}
        />
    );
};
export default Input;
