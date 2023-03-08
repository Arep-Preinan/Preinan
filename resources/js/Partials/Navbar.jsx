import { Link } from "@inertiajs/react";
import { useState, useEffect } from "react";

function Navbar(props) {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <div className="bg-white z-30 w-full">
            <nav className="relative flex-wrap items-center justify-between mx-auto container pr-[20px] pl-[20px] md:pr-[50px] lg:pl-[100px] lg:pr-[100px] md:pl-[50px] flex flex-col pt-8 pb-8">
                <div className="container flex items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <img src="../images/preinannotblack.svg" alt="" />
                        <button
                            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        ></button>
                    </div>
                    <div
                        className={
                            "lg:flex justify-center items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="lg:flex flex-col hidden lg:flex-row gap-[30px]  items-center justify-center">
                            <li className="nav-item">
                                <Link
                                    href={"/"}
                                    className=" flex items-center text-[16px] leading-[24px] font-medium  text-[#466BF3] "
                                >
                                    Halaman Utama
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className=" flex items-center text-[16px] leading-[24px] font-normal  text-[#9C9C9C] "
                                    href="/destinasi"
                                >
                                    Destinasi
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className=" flex items-center text-[16px] leading-[24px] font-normal  text-[#9C9C9C] "
                                    href="#pablo"
                                >
                                    Tentang Kami
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="dropdown dropdown-end lg:hidden">
                        <label
                            tabIndex={0}
                            className="btn m-1 bg-[#466BF3] border-none"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block w-6 h-6 stroke-current"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <Link
                                    href={"/"}
                                    className=" flex items-center text-[16px] leading-[24px] font-medium  text-[#466BF3] "
                                >
                                    Halaman Utama
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className=" flex items-center text-[16px] leading-[24px] font-normal  text-[#9C9C9C] "
                                    href="/destinasi"
                                >
                                    Destinasi
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className=" flex items-center text-[16px] leading-[24px] font-normal  text-[#9C9C9C] "
                                    href="#pablo"
                                >
                                    Tentang Kami
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={"/login"}
                                    className="btn h-[48px] "
                                    id="button-navbar"
                                >
                                    Login
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <Link
                        href={"/login"}
                        className="btn w-[143px] h-[48px] hidden lg:flex"
                        id="button-navbar"
                    >
                        Login
                    </Link>
                </div>
            </nav>
            {/* {
              props.user ? ( */}
            {/* ) : (
                <Link
                  href={"/login"}
                  className="btn w-[143px] h-[48px] md:flex"
                  id="button-navbar"
                >
                  Login
                </Link>
                )
            } */}
        </div>
    );
}
export default Navbar;
