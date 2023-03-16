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
                        <Link href={props.link}>
                            <Button
                                className={
                                    "btn bg-red-500 border-none text-white"
                                }
                                text={props.merah}
                            />
                        </Link>
                        <label htmlFor="my-modal-2" className="btn btn-primary">
                            {props.biru}
                        </label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ModalWarning;
