//import React
import React from "react";
import { Head, Link, useForm } from "@inertiajs/react";

//import layout
import GuestLayout from "../../../Layouts/GuestLayout";

export default function LHKPNIndex() {
    const LHKPNData = [
        {
            title: "LHKPN WALI KOTA PROBOLINGGO",
            reports: [
                {
                    name: "Laporan Harta Kekayaan Wali Kota Probolinggo Tahun 2022",
                    link: "",
                },
                {
                    name: "Laporan Harta Kekayaan Wali Kota Probolinggo Tahun 2021",
                    link: "",
                },
                {
                    name: "Laporan Harta Kekayaan Wali Kota Probolinggo Tahun 2020",
                    link: "",
                },
                {
                    name: "Laporan Harta Kekayaan Wali Kota Probolinggo Tahun 2019",
                    link: "",
                },
                {
                    name: "Laporan Harta Kekayaan Wali Kota Probolinggo Tahun 2018",
                    link: "",
                },
            ],
        },
        {
            title: "LHKPN WAKIL WALI KOTA PROBOLINGGO",
            reports: [
                {
                    name: "Laporan Harta Kekayaan Wakil Wali Kota Probolinggo Tahun 2019",
                    link: "",
                },
            ],
        },
        {
            title: "LHKPN SEKDA KOTA PROBOLINGGO",
            reports: [
                {
                    name: "Laporan Harta Kekayaan Sekretaris Daerah Probolinggo Tahun 2022",
                    link: "",
                },
                {
                    name: "Laporan Harta Kekayaan Sekretaris Daerah Probolinggo Tahun 2021",
                    link: "",
                },
                {
                    name: "Laporan Harta Kekayaan Sekretaris Daerah Probolinggo Tahun 2020",
                    link: "",
                },
                {
                    name: "Laporan Harta Kekayaan Sekretaris Daerah Probolinggo Tahun 2019",
                    link: "",
                },
            ],
        },
        {
            title: "LHKPN ESELON II DAN III MANDIRI",
            reports: [
                {
                    name: "Laporan Harta Kekayaan Eselon II dan III Mandiri Tahun 2022",
                    link: "",
                },
            ],
        },
    ];

    console.log(LHKPNData);

    return (
        <GuestLayout>
            <Head title="LHKPN Kota Probolinggo" />

            <div className="flex flex-col gap-4 max-w-[1024px] mx-auto my-8">
                <h1 className="text-3xl md:text-5xl font-serif text-center mt-4 font-semibold">
                    LHKPN Kota Probolinggo
                </h1>
                <div className="flex gap-4 w-full justify-center mb-4">
                    <caption className="flex gap-1 items-center">
                        PPID Kota Probolinggo
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="icon icon-tabler icons-tabler-filled icon-tabler-rosette-discount-check text-blue-700"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M12.01 2.011a3.2 3.2 0 0 1 2.113 .797l.154 .145l.698 .698a1.2 1.2 0 0 0 .71 .341l.135 .008h1a3.2 3.2 0 0 1 3.195 3.018l.005 .182v1c0 .27 .092 .533 .258 .743l.09 .1l.697 .698a3.2 3.2 0 0 1 .147 4.382l-.145 .154l-.698 .698a1.2 1.2 0 0 0 -.341 .71l-.008 .135v1a3.2 3.2 0 0 1 -3.018 3.195l-.182 .005h-1a1.2 1.2 0 0 0 -.743 .258l-.1 .09l-.698 .697a3.2 3.2 0 0 1 -4.382 .147l-.154 -.145l-.698 -.698a1.2 1.2 0 0 0 -.71 -.341l-.135 -.008h-1a3.2 3.2 0 0 1 -3.195 -3.018l-.005 -.182v-1a1.2 1.2 0 0 0 -.258 -.743l-.09 -.1l-.697 -.698a3.2 3.2 0 0 1 -.147 -4.382l.145 -.154l.698 -.698a1.2 1.2 0 0 0 .341 -.71l.008 -.135v-1l.005 -.182a3.2 3.2 0 0 1 3.013 -3.013l.182 -.005h1a1.2 1.2 0 0 0 .743 -.258l.1 -.09l.698 -.697a3.2 3.2 0 0 1 2.269 -.944zm3.697 7.282a1 1 0 0 0 -1.414 0l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l2 2l.094 .083a1 1 0 0 0 1.32 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" />
                        </svg>
                    </caption>
                    <caption>|</caption>
                    <caption>4 Agustus 2024</caption>
                </div>
                {LHKPNData.map((data, index) => (
                    <div
                        className="flex flex-col gap-2 w-full mx-auto"
                        key={index}
                    >
                        <h2 className="text-xl md:text-3xl mt-4 font-semibold">
                            {data.title}
                        </h2>
                        <hr />
                        <ol className="list-decimal mx-4">
                            {data.reports.map((item, index) => (
                                <li key={index}>
                                    <a
                                        className="hover:text-blue-700 flex gap-2"
                                        href={item.link}
                                    >
                                        <span>{item.name}</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="icon icon-tabler icons-tabler-outline icon-tabler-link"
                                        >
                                            <path
                                                stroke="none"
                                                d="M0 0h24v24H0z"
                                                fill="none"
                                            />
                                            <path d="M9 15l6 -6" />
                                            <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                                            <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
                                        </svg>
                                    </a>
                                </li>
                            ))}
                        </ol>
                    </div>
                ))}

                <h1 className="text-3xl md:text-5xl font-serif text-center mt-8 mb-2 font-semibold">
                    SE dan Prosentase Pelaporan LHKAN
                </h1>
                <div className="flex flex-col gap-2 w-full mx-auto">
                    <h2 className="text-xl md:text-3xl mt-4 font-semibold">
                        SE Menteri PANRB No. 02 Tahun 2023
                    </h2>
                    <a
                        href="https://ppid.probolinggokota.go.id/wp-content/uploads/2023/09/SE-Menteri-PANRB-No.-02-Tahun-2023-tentang-LHKAN.pdf"
                        className="flex items-center gap-2 hover:text-blue-700"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="icon icon-tabler icons-tabler-outline icon-tabler-download"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                            <path d="M7 11l5 5l5 -5" />
                            <path d="M12 4l0 12" />
                        </svg>
                        <p>Unduh Daftar Data Kota Probolinggo Tahun 2023</p>
                    </a>
                    <hr />
                    <iframe
                        src="https://ppid.probolinggokota.go.id/wp-content/uploads/2023/09/SE-Menteri-PANRB-No.-02-Tahun-2023-tentang-LHKAN.pdf"
                        frameborder="0"
                        className="w-full h-[500px] mx-auto mt-4"
                    ></iframe>

                    <h2 className="text-xl md:text-3xl mt-4 font-semibold">
                        Prosentase Pelaporan LHKAN
                    </h2>
                    <hr />
                    <img src="/assets/images/prosentase1.jpeg" alt="prosentase" className="max-w-full md:max-w-[1024px] object-contain mx-auto mt-4" />
                </div>
            </div>
        </GuestLayout>
    );
}
