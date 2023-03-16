import { Link } from "@inertiajs/react";
import Button from "./../Components/Button";

const ModalWarning = (props) => {
    return (
        <>
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal" id="my-modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{props.title}</h3>
                    <p className="py-4">{props.message}</p>
                    <div className="modal-action">
                        {props.konteks === "login" ? (
                            <>
                                <label
                                    htmlFor="my-modal"
                                    className="btn bg-red-500 border-none rounded-xl"
                                >
                                    {props.merah}
                                </label>
                                <Link href={props.link}>
                                    <Button
                                        className={
                                            "btn btn-primary border-none text-white rounded-xl"
                                        }
                                        text={props.biru}
                                    />
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link href={props.link}>
                                    <Button
                                        className={
                                            "btn bg-red-500 border-none text-white"
                                        }
                                        text={props.merah}
                                    />
                                </Link>
                                <label
                                    htmlFor="my-modal"
                                    className="btn btn-primary"
                                >
                                    {props.biru}
                                </label>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ModalWarning;
