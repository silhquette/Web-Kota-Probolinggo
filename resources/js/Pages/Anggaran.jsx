//import React
import React from "react";
import { Head, Link, useForm } from '@inertiajs/react';

//import layout
import GuestLayout from "../Layouts/GuestLayout";

export default function AnggaranIndex({ session }) {
    const laporan = [
        {
            title: "Laporan Realisasi Anggran (LRA)",
            link: "/transparansi/lra",
            icon: <svg  xmlns="http://www.w3.org/2000/svg"  width="32"  height="32"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.6"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-file-dots"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" /><path d="M9 14v.01" /><path d="M12 14v.01" /><path d="M15 14v.01" /></svg>
        },
        {
            title: "Catatan Atas Laporan Keuangan (CALK)",
            link: "/transparansi/calk",
            icon: <svg  xmlns="http://www.w3.org/2000/svg"  width="32"  height="32"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.6"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-file-dots"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" /><path d="M9 14v.01" /><path d="M12 14v.01" /><path d="M15 14v.01" /></svg>
        },
        {
            title: "Daftar Aset dan Investasi",
            link: "/transparansi/aset-investasi",
            icon: <svg  xmlns="http://www.w3.org/2000/svg"  width="32"  height="32"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.6"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-file-dots"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" /><path d="M9 14v.01" /><path d="M12 14v.01" /><path d="M15 14v.01" /></svg>
        },
        {
            title: "Neraca",
            link: "/transparansi/neraca",
            icon: <svg  xmlns="http://www.w3.org/2000/svg"  width="32"  height="32"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.6"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-file-dots"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" /><path d="M9 14v.01" /><path d="M12 14v.01" /><path d="M15 14v.01" /></svg>
        },
        {
            title: "Perda",
            link: "https://drive.google.com/drive/folders/1AsEcra3_yP-tY66WlxBl4mO8fp2o_r5R?usp=sharing",
            icon: <svg  xmlns="http://www.w3.org/2000/svg"  width="32"  height="32"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.6"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-file-dots"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" /><path d="M9 14v.01" /><path d="M12 14v.01" /><path d="M15 14v.01" /></svg>
        },
        {
            title: "Opini BPK",
            link: "/transparansi/opini-bpk",
            icon: <svg  xmlns="http://www.w3.org/2000/svg"  width="32"  height="32"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.6"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-file-dots"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" /><path d="M9 14v.01" /><path d="M12 14v.01" /><path d="M15 14v.01" /></svg>
        },
    ];

    const informations = [
        {
            title: "RKPD",
            link: "/transparansi/rkpd",
            icon: <svg  xmlns="http://www.w3.org/2000/svg"  width="32"  height="32"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-info-circle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm0 9h-1l-.117 .007a1 1 0 0 0 0 1.986l.117 .007v3l.007 .117a1 1 0 0 0 .876 .876l.117 .007h1l.117 -.007a1 1 0 0 0 .876 -.876l.007 -.117l-.007 -.117a1 1 0 0 0 -.764 -.857l-.112 -.02l-.117 -.006v-3l-.007 -.117a1 1 0 0 0 -.876 -.876l-.117 -.007zm.01 -3l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z" /></svg>
        },
        {
            title: "KUA / PPAS",
            link: "/transparansi/kua-ppas",
            icon: <svg  xmlns="http://www.w3.org/2000/svg"  width="32"  height="32"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-info-circle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm0 9h-1l-.117 .007a1 1 0 0 0 0 1.986l.117 .007v3l.007 .117a1 1 0 0 0 .876 .876l.117 .007h1l.117 -.007a1 1 0 0 0 .876 -.876l.007 -.117l-.007 -.117a1 1 0 0 0 -.764 -.857l-.112 -.02l-.117 -.006v-3l-.007 -.117a1 1 0 0 0 -.876 -.876l-.117 -.007zm.01 -3l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z" /></svg>
        },
        {
            title: "Ringkasan Dokumen Pelaksanaan Anggaran (DPA)",
            link: "/transparansi/dpa",
            icon: <svg  xmlns="http://www.w3.org/2000/svg"  width="32"  height="32"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.6"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-file-info"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" /><path d="M11 14h1v4h1" /><path d="M12 11h.01" /></svg>
        },
        {
            title: "Ringkasan Rencana Kerja dan Anggaran (RKA)",
            link: "/transparansi/rka",
            icon: <svg  xmlns="http://www.w3.org/2000/svg"  width="32"  height="32"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.6"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-file-info"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" /><path d="M11 14h1v4h1" /><path d="M12 11h.01" /></svg>
        },
    ];

    const lkpd = [
        {
            title: "IKPD 2023",
            link: "https://probolinggokota.go.id/informasi-publik/ipkd/transparansi-anggaran-2023",
            icon: <svg  xmlns="http://www.w3.org/2000/svg"  width="32"  height="32"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.6"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-home-share"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 21v-6a2 2 0 0 1 2 -2h2c.247 0 .484 .045 .702 .127" /><path d="M19 12h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h5" /><path d="M16 22l5 -5" /><path d="M21 21.5v-4.5h-4.5" /></svg>
        },
        {
            title: "IKPD 2022",
            link: "https://probolinggokota.go.id/informasi-publik/ipkd/transparansi-anggaran-2022",
            icon: <svg  xmlns="http://www.w3.org/2000/svg"  width="32"  height="32"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.6"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-home-share"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 21v-6a2 2 0 0 1 2 -2h2c.247 0 .484 .045 .702 .127" /><path d="M19 12h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h5" /><path d="M16 22l5 -5" /><path d="M21 21.5v-4.5h-4.5" /></svg>
        },
        {
            title: "IKPD 2021",
            link: "https://probolinggokota.go.id/informasi-publik/ipkd/transparansi-anggaran-2021",
            icon: <svg  xmlns="http://www.w3.org/2000/svg"  width="32"  height="32"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.6"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-home-share"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 21v-6a2 2 0 0 1 2 -2h2c.247 0 .484 .045 .702 .127" /><path d="M19 12h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h5" /><path d="M16 22l5 -5" /><path d="M21 21.5v-4.5h-4.5" /></svg>
        },
    ];

    return (
        <GuestLayout>
            <Head title="Transparansi Anggaran" />

            <h1 className="text-3xl text-blue-800 font-extrabold max-w-[1440px] mx-auto my-8 px-6">
                Laporan Keuangan
            </h1>
            <div className="grid grid-cols-4 gap-8 max-w-[1440px] mx-auto px-6">
                {/* Card */}
                {laporan.map((item, index) => (
                    <a
                        href={item.link}
                        key={index}
                        className="flex flex-col items-center gap-4 p-4 rounded-xl border border-gray-400 hover:border-blue-700 hover:text-blue-700 group"
                    >
                        <div className="p-2 rounded-full bg-gray-100 group-hover:bg-blue-100">
                            {item.icon}
                        </div>
                        <p className="text-base">{item.title}</p>
                    </a>
                ))}
            </div>

            <h1 className="text-3xl text-blue-800 font-extrabold max-w-[1440px] mx-auto my-8 px-6">
                Informasi Keuangan Lainnya
            </h1>
            <div className="grid grid-cols-4 gap-8 max-w-[1440px] mx-auto px-6">
                {/* Card */}
                {informations.map((item, index) => (
                    <a
                        href={item.link}
                        key={index}
                        className="flex flex-col items-center gap-4 p-4 rounded-xl border border-gray-400 hover:border-blue-700 hover:text-blue-700 group"
                    >
                        <div className="p-2 rounded-full bg-gray-100 group-hover:bg-blue-100">
                            {item.icon}
                        </div>
                        <p className="text-base text-center">{item.title}</p>
                    </a>
                ))}
            </div>

            <h1 className="text-3xl text-blue-800 font-extrabold max-w-[1440px] mx-auto my-8 px-6">
                Dokumen LKPD
            </h1>
            <div className="grid grid-cols-4 gap-8 max-w-[1440px] mx-auto px-6">
                {/* Card */}
                {lkpd.map((item, index) => (
                    <a
                        href={item.link}
                        key={index}
                        className="flex flex-col items-center gap-4 p-4 rounded-xl border border-gray-400 hover:border-blue-700 hover:text-blue-700 group"
                    >
                        <div className="p-2 rounded-full bg-gray-100 group-hover:bg-blue-100">
                            {item.icon}
                        </div>
                        <p className="text-base">{item.title}</p>
                    </a>
                ))}
            </div>
        </GuestLayout>
    );
}
