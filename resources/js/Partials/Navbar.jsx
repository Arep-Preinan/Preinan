import { Link } from "@inertiajs/react";

const Navbar = (props) => {
    return (
        <div className="navbar bg-base-100 pt-[30px] pb-[30px] flex justify-between">
            <div className="navbar-start">
                <svg
                    width="171"
                    height="36"
                    viewBox="0 0 171 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M22 14.5V13.0413C22 12.3887 21.6816 11.7771 21.1469 11.4028L13.1469 5.80285C12.4583 5.3208 11.5417 5.3208 10.8531 5.80285L2.85308 11.4028C2.31842 11.7771 2 12.3887 2 13.0413V27.3146C2 28.9015 3.75947 29.8563 5.08998 28.9915L10.91 25.2085C11.5728 24.7777 12.4272 24.7777 13.09 25.2085L18.9606 29.0244C20.2694 29.8751 22 28.9359 22 27.375V27.375"
                        stroke="#466BF3"
                        stroke-width="4"
                        stroke-linecap="round"
                    />
                    <circle cx="22" cy="21" r="3" fill="#466BF3" />
                    <path
                        d="M44.424 9.248V21.008C44.424 22.64 43.952 23.912 43.008 24.824C42.064 25.72 40.8 26.168 39.216 26.168C37.616 26.168 36.32 25.704 35.328 24.776C34.352 23.848 33.864 22.552 33.864 20.888H37.224C37.24 21.608 37.408 22.168 37.728 22.568C38.064 22.968 38.544 23.168 39.168 23.168C39.776 23.168 40.24 22.976 40.56 22.592C40.88 22.208 41.04 21.68 41.04 21.008V9.248H44.424ZM47.4795 19.304C47.4795 17.96 47.7435 16.768 48.2715 15.728C48.8155 14.688 49.5435 13.888 50.4555 13.328C51.3835 12.768 52.4155 12.488 53.5515 12.488C54.5435 12.488 55.4075 12.688 56.1435 13.088C56.8955 13.488 57.4955 13.992 57.9435 14.6V12.704H61.3275V26H57.9435V24.056C57.5115 24.68 56.9115 25.2 56.1435 25.616C55.3915 26.016 54.5195 26.216 53.5275 26.216C52.4075 26.216 51.3835 25.928 50.4555 25.352C49.5435 24.776 48.8155 23.968 48.2715 22.928C47.7435 21.872 47.4795 20.664 47.4795 19.304ZM57.9435 19.352C57.9435 18.536 57.7835 17.84 57.4635 17.264C57.1435 16.672 56.7115 16.224 56.1675 15.92C55.6235 15.6 55.0395 15.44 54.4155 15.44C53.7915 15.44 53.2155 15.592 52.6875 15.896C52.1595 16.2 51.7275 16.648 51.3915 17.24C51.0715 17.816 50.9115 18.504 50.9115 19.304C50.9115 20.104 51.0715 20.808 51.3915 21.416C51.7275 22.008 52.1595 22.464 52.6875 22.784C53.2315 23.104 53.8075 23.264 54.4155 23.264C55.0395 23.264 55.6235 23.112 56.1675 22.808C56.7115 22.488 57.1435 22.04 57.4635 21.464C57.7835 20.872 57.9435 20.168 57.9435 19.352ZM68.5211 15.464V21.896C68.5211 22.344 68.6251 22.672 68.8331 22.88C69.0571 23.072 69.4251 23.168 69.9371 23.168H71.4971V26H69.3851C66.5531 26 65.1371 24.624 65.1371 21.872V15.464H63.5531V12.704H65.1371V9.416H68.5211V12.704H71.4971V15.464H68.5211ZM86.2738 19.064C86.2738 19.544 86.2418 19.976 86.1778 20.36H76.4578C76.5378 21.32 76.8738 22.072 77.4658 22.616C78.0578 23.16 78.7858 23.432 79.6498 23.432C80.8978 23.432 81.7858 22.896 82.3138 21.824H85.9378C85.5538 23.104 84.8178 24.16 83.7298 24.992C82.6418 25.808 81.3058 26.216 79.7218 26.216C78.4418 26.216 77.2898 25.936 76.2658 25.376C75.2578 24.8 74.4658 23.992 73.8898 22.952C73.3298 21.912 73.0498 20.712 73.0498 19.352C73.0498 17.976 73.3298 16.768 73.8898 15.728C74.4498 14.688 75.2338 13.888 76.2418 13.328C77.2498 12.768 78.4098 12.488 79.7218 12.488C80.9858 12.488 82.1138 12.76 83.1058 13.304C84.1138 13.848 84.8898 14.624 85.4338 15.632C85.9938 16.624 86.2738 17.768 86.2738 19.064ZM82.7938 18.104C82.7778 17.24 82.4658 16.552 81.8578 16.04C81.2498 15.512 80.5058 15.248 79.6258 15.248C78.7938 15.248 78.0898 15.504 77.5138 16.016C76.9538 16.512 76.6098 17.208 76.4818 18.104H82.7938ZM96.0943 12.512C97.6783 12.512 98.9583 13.016 99.9343 14.024C100.91 15.016 101.398 16.408 101.398 18.2V26H98.0383V18.656C98.0383 17.6 97.7743 16.792 97.2463 16.232C96.7183 15.656 95.9983 15.368 95.0863 15.368C94.1583 15.368 93.4223 15.656 92.8783 16.232C92.3503 16.792 92.0863 17.6 92.0863 18.656V26H88.7263V12.704H92.0863V14.36C92.5343 13.784 93.1023 13.336 93.7903 13.016C94.4943 12.68 95.2623 12.512 96.0943 12.512ZM109.802 12.488C110.794 12.488 111.666 12.688 112.418 13.088C113.17 13.472 113.762 13.976 114.194 14.6V12.704H117.578V26.096C117.578 27.328 117.33 28.424 116.834 29.384C116.338 30.36 115.594 31.128 114.602 31.688C113.61 32.264 112.41 32.552 111.002 32.552C109.114 32.552 107.562 32.112 106.346 31.232C105.146 30.352 104.466 29.152 104.306 27.632H107.642C107.818 28.24 108.194 28.72 108.77 29.072C109.362 29.44 110.074 29.624 110.906 29.624C111.882 29.624 112.674 29.328 113.282 28.736C113.89 28.16 114.194 27.28 114.194 26.096V24.032C113.762 24.656 113.162 25.176 112.394 25.592C111.642 26.008 110.778 26.216 109.802 26.216C108.682 26.216 107.658 25.928 106.73 25.352C105.802 24.776 105.066 23.968 104.521 22.928C103.993 21.872 103.729 20.664 103.729 19.304C103.729 17.96 103.993 16.768 104.521 15.728C105.066 14.688 105.794 13.888 106.706 13.328C107.634 12.768 108.666 12.488 109.802 12.488ZM114.194 19.352C114.194 18.536 114.034 17.84 113.714 17.264C113.394 16.672 112.962 16.224 112.418 15.92C111.874 15.6 111.29 15.44 110.666 15.44C110.042 15.44 109.466 15.592 108.938 15.896C108.41 16.2 107.978 16.648 107.642 17.24C107.322 17.816 107.162 18.504 107.162 19.304C107.162 20.104 107.322 20.808 107.642 21.416C107.978 22.008 108.41 22.464 108.938 22.784C109.482 23.104 110.058 23.264 110.666 23.264C111.29 23.264 111.874 23.112 112.418 22.808C112.962 22.488 113.394 22.04 113.714 21.464C114.034 20.872 114.194 20.168 114.194 19.352ZM138.794 14.432C138.794 15.328 138.578 16.168 138.146 16.952C137.73 17.736 137.066 18.368 136.154 18.848C135.258 19.328 134.122 19.568 132.746 19.568H129.938V26H126.578V9.248H132.746C134.042 9.248 135.146 9.472 136.058 9.92C136.97 10.368 137.65 10.984 138.098 11.768C138.562 12.552 138.794 13.44 138.794 14.432ZM132.602 16.856C133.53 16.856 134.218 16.648 134.666 16.232C135.114 15.8 135.338 15.2 135.338 14.432C135.338 12.8 134.426 11.984 132.602 11.984H129.938V16.856H132.602ZM144.539 14.768C144.971 14.064 145.531 13.512 146.219 13.112C146.923 12.712 147.723 12.512 148.619 12.512V16.04H147.731C146.675 16.04 145.875 16.288 145.331 16.784C144.803 17.28 144.539 18.144 144.539 19.376V26H141.179V12.704H144.539V14.768ZM163.243 19.064C163.243 19.544 163.211 19.976 163.147 20.36H153.427C153.507 21.32 153.843 22.072 154.435 22.616C155.027 23.16 155.755 23.432 156.619 23.432C157.867 23.432 158.755 22.896 159.283 21.824H162.907C162.523 23.104 161.787 24.16 160.699 24.992C159.611 25.808 158.275 26.216 156.691 26.216C155.411 26.216 154.259 25.936 153.235 25.376C152.227 24.8 151.435 23.992 150.859 22.952C150.299 21.912 150.019 20.712 150.019 19.352C150.019 17.976 150.299 16.768 150.859 15.728C151.419 14.688 152.203 13.888 153.211 13.328C154.219 12.768 155.379 12.488 156.691 12.488C157.955 12.488 159.083 12.76 160.075 13.304C161.083 13.848 161.859 14.624 162.403 15.632C162.963 16.624 163.243 17.768 163.243 19.064ZM159.763 18.104C159.747 17.24 159.435 16.552 158.827 16.04C158.219 15.512 157.475 15.248 156.595 15.248C155.763 15.248 155.059 15.504 154.483 16.016C153.923 16.512 153.579 17.208 153.451 18.104H159.763ZM167.399 11.12C166.807 11.12 166.311 10.936 165.911 10.568C165.527 10.184 165.335 9.712 165.335 9.152C165.335 8.592 165.527 8.128 165.911 7.76C166.311 7.376 166.807 7.184 167.399 7.184C167.991 7.184 168.479 7.376 168.863 7.76C169.263 8.128 169.463 8.592 169.463 9.152C169.463 9.712 169.263 10.184 168.863 10.568C168.479 10.936 167.991 11.12 167.399 11.12ZM169.055 12.704V26H165.695V12.704H169.055Z"
                        fill="#466BF3"
                    />
                </svg>
            </div>
            <div className="navbar-center hidden md:flex ">
                <ul className="menu menu-horizontal px-1" id="navbar-link">
                    <li className="text-blue-600">
                        <a className="text-[#466BF3]">Halaman Utama</a>
                    </li>
                    <li>
                        <a>Destinasi</a>
                    </li>
                    <li>
                        <a>Hubungi Kami</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-end hidden lg:flex">
                {
                    props.user ? "Hai, " + props.user.name : 
                    <Link href={"login"} className="btn w-[143px] h-[48px]" id="button-navbar">
                        Login
                    </Link>
                }
            </div>
            <div className="dropdown dropdown-end md:hidden">
                <label tabIndex={0} className="btn btn-ghost rounded-btn">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block w-5 h-5 stroke-current"
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
                    className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4"
                >
                    <li>
                        <a className="text-[#466BF3]">Halaman Utama</a>
                    </li>
                    <li>
                        <a>Destinasi</a>
                    </li>
                    <li>
                        <a>Hubungi Kami</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
