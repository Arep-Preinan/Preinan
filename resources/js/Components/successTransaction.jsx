import { Link } from "@inertiajs/react";

const successTransaction = () => {
    return (
        <>
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div className="modal-action">
                    <Link htmlFor="my-modal" className="btn" href="/tiket">Yay!</Link>
                    </div>
                </div>
                </div>
        </>
    );
}

export default successTransaction;