import { Link } from "@inertiajs/react";
import { useState, useEffect, useRef } from "react";

function Navbar({ children, ...props }) {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [IsMobile, setIsMobile] = useState(false);

    const [showComponent, setShowComponent] = useState(false);
    const componentRef = useRef(null);

    useEffect(() => {
        if (window.innerWidth < 768) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    }, []);

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                componentRef.current &&
                !componentRef.current.contains(event.target)
            ) {
                setShowComponent(false);
            }
        }

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [componentRef]);

    return (
        <div>
            <div className="drawer drawer-end">
                <input
                    id="my-drawer-3"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="drawer-content drawer-end flex flex-col ">
                    {/* <!-- Navbar --> */}
                    <div className="bg-white">
                        <div className="w-full xl:pl-[100px] xl:pr-[100px] mx-auto container max-md:pr-[20px] max-md:pl-[20px] pt-4 pb-4 md:pt-8 md:pb-8">
                            <nav className="relative flex-wrap items-center justify-between  flex flex-col ">
                                <div className="container flex items-center justify-between">
                                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                                        <Link href="/">
                                            <img
                                                src="../images/preinannotblack.svg"
                                                alt=""
                                            />
                                        </Link>
                                        <button
                                            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                                            type="button"
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
                                            <li
                                                className={`nav-item ${
                                                    props.active == "home"
                                                        ? ""
                                                        : "hover:bg-gray-200 rounded-xl p-3 transition duration-200"
                                                }`}
                                            >
                                                <Link
                                                    href={"/"}
                                                    className={`flex items-center text-[16px] leading-[24px]  ${
                                                        props.active == "home"
                                                            ? "text-[#466BF3] font-medium"
                                                            : "text-[#9C9C9C] font-normal  "
                                                    } `}
                                                >
                                                    Halaman Utama
                                                </Link>
                                            </li>
                                            <li
                                                className={`nav-item ${
                                                    props.active == "destinasi"
                                                        ? ""
                                                        : "hover:bg-gray-200 rounded-xl p-3 transition duration-200"
                                                }`}
                                            >
                                                <Link
                                                    className={`flex items-center text-[16px] leading-[24px]  ${
                                                        props.active ==
                                                        "destinasi"
                                                            ? "text-[#466BF3] font-medium"
                                                            : "text-[#9C9C9C] font-normal  "
                                                    } `}
                                                    href="/destinasi"
                                                >
                                                    Destinasi
                                                </Link>
                                            </li>
                                            <li
                                                className={`nav-item ${
                                                    props.active == ""
                                                        ? ""
                                                        : "hover:bg-gray-200 rounded-xl p-3 transition duration-200"
                                                }`}
                                            >
                                                <Link
                                                    className={`flex items-center text-[16px] leading-[24px]  ${
                                                        props.active ==
                                                        "tentang-kami"
                                                            ? "text-[#466BF3] font-medium"
                                                            : "text-[#9C9C9C] font-normal  "
                                                    } `}
                                                    href="/hubungi-kami"
                                                >
                                                    Tentang Kami
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="flex gap-4">
                                        {props.user ? (
                                            <>
                                                <ul className="menu menu-horizontal px-1 hidden lg:flex">
                                                    <li tabIndex={0}>
                                                        <a>
                                                            <h1 className="text-[16px] leading-[24px] text-gray-500">
                                                                Hai,{" "}
                                                                {
                                                                    props.user
                                                                        .name
                                                                }
                                                            </h1>
                                                            <svg
                                                                className="fill-current"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="20"
                                                                height="20"
                                                                viewBox="0 0 24 24"
                                                            >
                                                                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                                                            </svg>
                                                        </a>
                                                        <ul className=" bg-base-100">
                                                            <li>
                                                                <Link
                                                                    href={
                                                                        "/tiket-ku"
                                                                    }
                                                                    className={`w-full flex gap-3  ${
                                                                        props.active ==
                                                                        "tiketku"
                                                                            ? "text-white bg-[#3258E8]  font-medium"
                                                                            : "text-[#9C9C9C] font-normal  "
                                                                    } `}
                                                                >
                                                                    {props.active ==
                                                                    "tiketku" ? (
                                                                        <img
                                                                            src="../images/icons/ticket-active.svg"
                                                                            alt=""
                                                                        />
                                                                    ) : (
                                                                        <img
                                                                            src="../images/icons/ticket-no-active.svg"
                                                                            alt=""
                                                                        />
                                                                    )}
                                                                    Tiket ku
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    method="post"
                                                                    href="/logout"
                                                                    as="button"
                                                                    className="text-red-500"
                                                                >
                                                                    <img
                                                                        src="../images/icons/logout-no-active.svg"
                                                                        alt=""
                                                                    />
                                                                    Logout
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </>
                                        ) : (
                                            <Link
                                                href={"/auth"}
                                                className="btn w-[143px] h-[48px] hidden md:flex"
                                                id="button-navbar"
                                            >
                                                Login
                                            </Link>
                                        )}
                                        <div className="flex-none lg:hidden">
                                            <label
                                                htmlFor="my-drawer-3"
                                                className="btn btn-square bg-[#3258E8] border-none"
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
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                    {/* <!-- Page content here --> */}
                    {children}
                </div>
                <div className="drawer-side">
                    <label
                        htmlFor="my-drawer-3"
                        className="drawer-overlay"
                    ></label>
                    <ul className="menu p-4 w-80 bg-base-100 flex flex-col gap-3 pt-20">
                        {/* <!-- Sidebar content here --> */}
                        <li
                            className={`nav-item rounded-xl  ${
                                props.active == "home" && "bg-[#3258E8]"
                            }`}
                        >
                            <Link
                                href={"/"}
                                className={`w-full flex gap-4   ${
                                    props.active == "home"
                                        ? "text-white font-medium"
                                        : "text-[#9C9C9C] font-normal  "
                                } `}
                            >
                                {" "}
                                {props.active == "home" ? (
                                    <img
                                        src="../images/icons/home.svg"
                                        alt=""
                                    />
                                ) : (
                                    <img
                                        src="../images/icons/home-no-active.svg"
                                        alt=""
                                    />
                                )}
                                <p className="text-[16px] leading-[24px]">
                                    Halaman Utama
                                </p>
                            </Link>
                        </li>
                        <li
                            className={`nav-item ${
                                props.active == "destinasi" && " rounded-xl"
                            }`}
                        >
                            <Link
                                className={`w-full flex gap-4 ${
                                    props.active == "destinasi"
                                        ? "bg-[#3258E8] text-white font-medium"
                                        : "text-[#9C9C9C] font-normal  "
                                } `}
                                href="/destinasi"
                            >
                                {props.active == "destinasi" ? (
                                    <img
                                        src="../images/icons/destinasi-active.svg"
                                        alt=""
                                    />
                                ) : (
                                    <img
                                        src="../images/icons/destinasi-no-active.svg"
                                        alt=""
                                    />
                                )}
                                <p className="text-[16px] leading-[24px]">
                                    Destinasi
                                </p>
                            </Link>
                        </li>
                        <li className={`nav-item ${props.active == "" && ""}`}>
                            <Link
                                className={`w-full flex gap-3 ${
                                    props.active == "tentang-kami"
                                        ? "text-white bg-[#3258E8]  font-medium"
                                        : "text-[#9C9C9C] font-normal  "
                                } `}
                                href="/hubungi-kami"
                            >
                                {props.active == "tentang-kami" ? (
                                    <img
                                        src="../images/icons/about-active.svg"
                                        alt=""
                                    />
                                ) : (
                                    <img
                                        src="../images/icons/about-no-active.svg"
                                        alt=""
                                    />
                                )}
                                <p className=" text-[16px] leading-[24px]">
                                    Tentang Kami
                                </p>
                            </Link>
                        </li>
                        <div className="h-[1px] w-full bg-[#EAEAEA]"></div>
                        {props.user ? (
                            <>
                                <li>
                                    <a>
                                        <img
                                            src="../images/icons/userIcons.svg"
                                            alt=""
                                        />
                                        <h1 className="text-[16px] leading-[24px] text-green-600">
                                            Selamat Datang, {props.user.name}
                                        </h1>
                                    </a>
                                </li>
                                <li>
                                    <Link
                                        href={"/tiket-ku"}
                                        className={`w-full flex gap-3  ${
                                            props.active == "tiketku"
                                                ? "text-white bg-[#3258E8]  font-medium"
                                                : "text-[#9C9C9C] font-normal  "
                                        } `}
                                    >
                                        {props.active == "tiketku" ? (
                                            <img
                                                src="../images/icons/ticket-active.svg"
                                                alt=""
                                            />
                                        ) : (
                                            <img
                                                src="../images/icons/ticket-no-active.svg"
                                                alt=""
                                            />
                                        )}
                                        Tiket ku
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        method="post"
                                        href="/logout"
                                        as="button"
                                        className="text-red-500"
                                    >
                                        <img
                                            src="../images/icons/logout-no-active.svg"
                                            alt=""
                                        />
                                        Logout
                                    </Link>
                                </li>
                            </>
                        ) : (
                            <div className="flex justify-center">
                                <Link
                                    href={"/auth"}
                                    className="btn btn-block h-[48px]"
                                    id="button-navbar"
                                >
                                    Login
                                </Link>
                            </div>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Navbar;
