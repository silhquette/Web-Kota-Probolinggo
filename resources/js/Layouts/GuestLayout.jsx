import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
            <div className="flex w-full justify-between items-stretch px-24 bg-white gap-24 h-[8vh] fixed top-0">
                <Link
                    href="/"
                    className="flex items-center justify-center text-lg"
                >
                    <ApplicationLogo className="text-gray-500" />
                </Link>
                <div className="flex gap-12 w-full">
                    <NavLink
                        href={route("dashboard")}
                        active={route().current("dashboard")}
                    >
                        Beranda
                    </NavLink>
                    <NavLink
                        href={route("dashboard")}
                        active={route().current("dashboard")}
                    >
                        Profil
                    </NavLink>
                    <Dropdown>
                        <Dropdown.Trigger>
                            <div className="flex rounded-md">
                                <button
                                    type="button"
                                    className="flex items-center px-3 py-2 border border-transparent text-lg leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                >
                                    Profil
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
                            </div>
                        </Dropdown.Trigger>

                        <Dropdown.Content>
                            <Dropdown.Link href={route("profile.edit")}>
                                Kota Probolinggo
                            </Dropdown.Link>
                            <Dropdown.Link href={route("profile.edit")}>
                                PPID
                            </Dropdown.Link>
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
                            <div className="flex rounded-md">
                                <button
                                    type="button"
                                    className={"flex items-center px-3 py-2 border-b-2 text-lg leading-4 font-medium bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150 " + (route().current("statistic*") ? "text-gray-900 border-blue-700" : "text-gray-500 border-transparent")}
                                >
                                    Statistik
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
                            </div>
                        </Dropdown.Trigger>

                        <Dropdown.Content>
                            <Dropdown.Link href={route("statistic.data-statistik")}>
                                Data Statistik Kota Probolinggo
                            </Dropdown.Link>
                            <Dropdown.Link href={route("statistic.daftar-kota")}>
                                Daftar Data Kota Probolinggo Tahun 2023
                            </Dropdown.Link>
                        </Dropdown.Content>
                    </Dropdown>
                    <NavLink
                        href={route("article.index")}
                        active={route().current("article*")}
                    >
                        Berita
                    </NavLink>
                </div>
                <input
                    type="text"
                    placeholder="Cari Layanan"
                    className="w-[500px] my-5 rounded-xl border border-gray-200"
                />
            </div>

            <div className="w-full mt-[8vh] px-6 py-4 bg-white overflow-hidden min-h-[92vh]">
                {children}
            </div>
        </div>
    );
}
