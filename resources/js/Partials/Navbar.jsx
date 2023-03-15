import { Link } from "@inertiajs/react";
import { useState, useEffect, useRef } from "react";

function Navbar(props) {
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
          if (componentRef.current && !componentRef.current.contains(event.target)) {
            setShowComponent(false);
          }
        }
    
        document.addEventListener('click', handleClickOutside);
        return () => {
          document.removeEventListener('click', handleClickOutside);
        };
      }, [componentRef]);

    return (
        <div ref={componentRef} className="bg-white z-30 w-full">
            <nav className="relative flex-wrap items-center justify-between mx-auto container pr-[20px] pl-[20px] md:pr-[50px] lg:pl-[100px] lg:pr-[100px] md:pl-[50px] flex flex-col pt-4 pb-4 md:pt-8 md:pb-8">
                <div className="container flex items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Link href="/">
                            <img src="../images/preinannotblack.svg" alt="" />
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
                                        props.active == "destinasi"
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
                                        props.active == "tentang-kami"
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
                    <div className="dropdown dropdown-end lg:hidden">
                        <label
                            tabIndex={0}
                            className="btn m-1 bg-[#466BF3] border-none"
                            onClick={() => setShowComponent(!showComponent)}

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
                        
                        {/* side bar for mobile */}
                        {
                            showComponent && (
                                <aside id="default-sidebar" class="fixed top-0 right-0 z-40 w-64 h-screen transition-transform sm:translate-x-0 transform-none" aria-label="Sidebar">
                                    <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                                        <ul class="space-y-2">
                                            <li
                                                className={`nav-item ${
                                                    props.active == "destinasi"
                                                        ? ""
                                                        : "hover:bg-gray-200 rounded-xl p-3 transition duration-200"
                                                }`}
                                            >
                                                <Link
                                                    className={`flex items-center text-[16px] leading-[24px]  ${
                                                        props.active == "home"
                                                            ? "text-[#466BF3] font-medium"
                                                            : "text-[#9C9C9C] font-normal  "
                                                    } `}
                                                    href="/destinasi"
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
                                                        props.active == "destinasi"
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
                                                        props.active == "tentang-kami"
                                                            ? "text-[#466BF3] font-medium"
                                                            : "text-[#9C9C9C] font-normal  "
                                                    } `}
                                                    href="/hubungi-kami"
                                                >
                                                    Tentang Kami
                                                </Link>
                                            </li>
                                            <li>
                                                {
                                                    props.user ? (
                                                        <div className="dropdown dropdown-bottom w-52">
                                                        <label tabIndex={0} className="btn m-1">Click</label>
                                                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 w-52 rounded-box right-0">
                                                            <li><a>Item 1</a></li>
                                                            <li><a>Item 2</a></li>
                                                        </ul>
                                                        </div>) :
                                                    ( 
                                                        <Link
                                                            href={"/auth"}
                                                            className="btn w-[143px] h-[48px] hidden md:flex"
                                                            id="button-navbar"
                                                        >
                                                            Login
                                                        </Link> 
                                                    )
                                                }
                                            </li>
                                        </ul>
                                    </div>
                                </aside>
                            )
                        }
                        {/* side bar for mobile */}
                    
                    </div>

                    {props.user ? (
                        <>
                            <ul className="menu menu-horizontal px-1 hidden lg:flex">
                                <li tabIndex={0}>
                                    <a>
                                        <h1 className="text-[16px] leading-[24px] text-gray-500">
                                            Hai, {props.user.name}
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
                                    <ul className="p-2 bg-base-100">
                                        <li>
                                            <Link href={"/tiket-ku"}>
                                                Tiket ku
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                method="post"
                                                href="/logout"
                                                as="button"
                                            >
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
                </div>
            </nav>
        </div>
    );
}
export default Navbar;
