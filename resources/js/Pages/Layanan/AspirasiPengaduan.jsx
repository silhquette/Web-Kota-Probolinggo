//import React
import React from "react";
import { Head, Link, useForm } from '@inertiajs/react';

//import layout
import GuestLayout from "../../Layouts/GuestLayout";

export default function AspirasiIndex() {
    const Aspirasi = [
        { 
            name: "Laporan Pengaduan Pemerintah Kota Probolinggo Tahun 2023", 
            link: "http://ppid.probolinggokota.go.id/wp-content/uploads/2023/09/LAPORAN-PENGADUAN-PEMERINTAH-KOTA-PROBOLINGGO-TAHUN-2023.pdf"
        },
        { 
            name: "Laporan Pengaduan Pemerintah Kota Probolinggo Tahun 2022", 
            link: "http://ppid.probolinggokota.go.id/wp-content/uploads/2023/09/LAPORAN-PENGADUAN-PEMERINTAH-KOTA-PROBOLINGGO-TAHUN-2022.pdf"
        },
        { 
            name: "Laporan Pengaduan Pemerintah Kota Probolinggo Tahun 2021", 
            link: "https://ppid.probolinggokota.go.id/wp-content/uploads/2023/09/LAPORAN-PENGADUAN-PEMERINTAH-KOTA-PROBOLINGGO-TAHUN-2021.pdf"
        },
    ];

    return (
        <GuestLayout>
            <Head title="Aspirasi & Pengaduan" />

            <div className="flex flex-col gap-4 max-w-[1440px] mx-auto my-8 px-6">
                <h1 className="text-3xl md:text-5xl font-serif text-center mt-4 font-semibold">Aspirasi dan Pengaduan</h1>
                <div className="flex gap-4 w-full justify-center mb-4">
                    <caption className="flex gap-1 items-center">PPID Kota Probolinggo<svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-rosette-discount-check text-blue-700"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12.01 2.011a3.2 3.2 0 0 1 2.113 .797l.154 .145l.698 .698a1.2 1.2 0 0 0 .71 .341l.135 .008h1a3.2 3.2 0 0 1 3.195 3.018l.005 .182v1c0 .27 .092 .533 .258 .743l.09 .1l.697 .698a3.2 3.2 0 0 1 .147 4.382l-.145 .154l-.698 .698a1.2 1.2 0 0 0 -.341 .71l-.008 .135v1a3.2 3.2 0 0 1 -3.018 3.195l-.182 .005h-1a1.2 1.2 0 0 0 -.743 .258l-.1 .09l-.698 .697a3.2 3.2 0 0 1 -4.382 .147l-.154 -.145l-.698 -.698a1.2 1.2 0 0 0 -.71 -.341l-.135 -.008h-1a3.2 3.2 0 0 1 -3.195 -3.018l-.005 -.182v-1a1.2 1.2 0 0 0 -.258 -.743l-.09 -.1l-.697 -.698a3.2 3.2 0 0 1 -.147 -4.382l.145 -.154l.698 -.698a1.2 1.2 0 0 0 .341 -.71l.008 -.135v-1l.005 -.182a3.2 3.2 0 0 1 3.013 -3.013l.182 -.005h1a1.2 1.2 0 0 0 .743 -.258l.1 -.09l.698 -.697a3.2 3.2 0 0 1 2.269 -.944zm3.697 7.282a1 1 0 0 0 -1.414 0l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l2 2l.094 .083a1 1 0 0 0 1.32 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" /></svg></caption>
                    <caption>|</caption>
                    <caption>4 Agustus 2024</caption>
                </div>
                <div className="flex items-center justify-between w-full mx-auto my-2 px-6">
                    <h1 className="text-3xl text-blue-800 font-extrabold">
                        Formulir Keberatan Permohonan Informasi
                    </h1>
                    <a
                        href="https://ppid.probolinggokota.go.id/wp-content/uploads/2014/12/FORMULIR-PERNYATAAN-KEBERATAN.pdf"
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
                        <p>Unduh Formulir Keberatan Permohonan Informasi</p>
                    </a>
                </div>
                <iframe
                    src="http://ppid.probolinggokota.go.id/wp-content/uploads/2023/09/LAPORAN-PENGADUAN-PEMERINTAH-KOTA-PROBOLINGGO-TAHUN-2023.pdf"
                    frameborder="0"
                    className="w-full h-[75vh] mx-auto px-6"
                ></iframe>
                <div className="flex flex-col gap-2 w-full md:w-2/3 mx-auto">
                    <h2 className="text-xl md:text-3xl mt-4 font-semibold">Laporan Pengaduan Pemerintah Kota Probolinggo</h2>
                    <hr />
                    <ol className="list-decimal mx-4">
                        {Aspirasi.map((item, index) => (
                            <li key={index}>
                                <a className="hover:text-blue-700 flex gap-2" href={item.link}><span>{item.name}</span><svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.5"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-link"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 15l6 -6" /><path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" /><path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" /></svg></a>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </GuestLayout>
    );
}
