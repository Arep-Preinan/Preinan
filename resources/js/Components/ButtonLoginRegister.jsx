const ButtonLoginRegister = ({ text, ...props }) => {
    return (
        <button
            {...props}
            className="btn btn-block bg-blue-600 border-none text-white  h-[50px] rounded-[12px]"
        >
            {text}
        </button>
    );
};
export default ButtonLoginRegister;
