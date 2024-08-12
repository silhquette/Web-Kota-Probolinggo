import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";

//import Footer
import Footer from "@/Components/Footer";

export default function Guest({ children }) {
    const profileItems = [
        {
            label: "Kota Probolinggo",
            submenu: [
                {
                    label: "Sejarah Kota Probolinggo",
                    link: "/profile/sejarah-kota",
                },
                { label: "Lambang Daerah", link: "/profile/lambang-daerah" },
                {
                    label: "Visi & Misi Kota Probolinggo",
                    link: "/profile/visi-misi",
                },
                {
                    label: "Gambaran Umum Kota probolinggo",
                    link: "/profile/gambaran-umum",
                },
                { label: "Daftar Nama Pejabat", link: "" },
                { label: "Walikota Probolinggo", link: "" },
                {
                    label: "Tupoksi Pemerintah Kota",
                    link: "/profile/tupoksi-pemerintah",
                },
                { label: "Maskot Kota", link: "/profile/maskot-kota" },
                {
                    label: "Struktur Pemerintahan",
                    link: "/profile/struktur-pemerintahan",
                },
                { label: "LHKPN", link: "/profile/lhkpn" },
                { label: "Daftar Penghargaan", link: "/profile/penghargaan" },
            ],
        },
        {
            label: "Layanan Publik & Statistik",
            submenu: [
                { label: "Daftar Nama Pejabat", link: "/daftar-nama-pejabat" },
                { label: "Wali Kota Probolinggo", link: "/wali-kota" },
                // More items...
            ],
        },
    ];

    const statisticItems = [
        {
            label: "Data Statistik Kota Probolinggo",
            link: "/statistic/data-statistik",
        },
        {
            label: "Daftar Data Kota Probolinggo",
            link: "/statistic/daftar-kota",
        },
    ];

    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
            <div className="w-full bg-white fixed top-0 z-10">
                <div className="flex w-full justify-between items-stretch max-w-[1440px] gap-24 h-16 mx-auto">
                    <Link
                        href="/"
                        className="flex items-center justify-center text-lg"
                    >
                        <ApplicationLogo className="text-gray-500" />
                    </Link>
                    <div className="flex gap-12 w-full">
                        <NavLink
                            href={route("landing")}
                            active={route().current("landing")}
                        >
                            Beranda
                        </NavLink>
                        <Dropdown>
                            <Dropdown.Trigger>
                                <button
                                    className={
                                        "flex items-center px-3 border-b-2 text-lg leading-4 font-medium bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150 " +
                                        (route().current("profile*")
                                            ? "text-gray-900 border-blue-700"
                                            : "text-gray-500 border-transparent")
                                    }
                                >
                                    <span>Profil</span>
                                    <svg
                                        className="ms-2 -me-0.5 h-4 w-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                            </Dropdown.Trigger>
                            <Dropdown.Content>
                                {profileItems.map((item, index) => (
                                    <Dropdown.DropdownItem
                                        key={index}
                                        submenu={item.submenu}
                                    >
                                        <a href={item.link || "#"}>
                                            {item.label}
                                        </a>
                                    </Dropdown.DropdownItem>
                                ))}
                            </Dropdown.Content>
                        </Dropdown>
                        <NavLink
                            href={route("dashboard")}
                            active={route().current("dashboard")}
                        >
                            Layanan Publik
                        </NavLink>
                        <Dropdown>
                            <Dropdown.Trigger>
                                <button
                                    className={
                                        "flex items-center px-3 border-b-2 text-lg leading-4 font-medium bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150 " +
                                        (route().current("statistic*")
                                            ? "text-gray-900 border-blue-700"
                                            : "text-gray-500 border-transparent")
                                    }
                                >
                                    <span>Statistik</span>
                                    <svg
                                        className="ms-2 -me-0.5 h-4 w-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                            </Dropdown.Trigger>
                            <Dropdown.Content>
                                {statisticItems.map((item, index) => (
                                    <Dropdown.DropdownItem
                                        key={index}
                                        submenu={item.submenu}
                                    >
                                        <a href={item.link || "#"}>
                                            {item.label}
                                        </a>
                                    </Dropdown.DropdownItem>
                                ))}
                            </Dropdown.Content>
                        </Dropdown>
                        <NavLink
                            href={route("article.index")}
                            active={route().current("article*")}
                        >
                            Berita
                        </NavLink>
                    </div>
                    <div className="flex items-center justify-center">
                        <input
                            type="text"
                            placeholder="Cari Layanan"
                            className="w-[300px] h-10 rounded-xl border border-gray-200"
                        />
                    </div>
                </div>
            </div>

            <div className="w-full pt-16 py-4 pb-12 bg-white overflow-hidden min-h-[100vh]">
                {children}
            </div>

            <Footer/>
        </div>
    );
}
