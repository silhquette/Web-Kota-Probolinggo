//import React
import React from "react";
import { Head, Link, useForm } from '@inertiajs/react';

//import layout
import GuestLayout from "../../Layouts/GuestLayout";

export default function AlurIndex({ session }) {
    const menu = [
        {
            title: "Permohonan Informasi",
            link: "/layanan/tata-cara-permohonan-informasi",
            icon: <svg  xmlns="http://www.w3.org/2000/svg"  width="32"  height="32"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.6"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-world-upload"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M21 12a9 9 0 1 0 -9 9" /><path d="M3.6 9h16.8" /><path d="M3.6 15h8.4" /><path d="M11.578 3a17 17 0 0 0 0 18" /><path d="M12.5 3c1.719 2.755 2.5 5.876 2.5 9" /><path d="M18 21v-7m3 3l-3 -3l-3 3" /></svg>
        },
        {
            title: "Keberatan Informasi",
            link: "/layanan/tata-cara-keberatan-informasi",
            icon: <svg  xmlns="http://www.w3.org/2000/svg"  width="32"  height="32"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.6"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-world-download"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M21 12a9 9 0 1 0 -9 9" /><path d="M3.6 9h16.8" /><path d="M3.6 15h8.4" /><path d="M11.578 3a17 17 0 0 0 0 18" /><path d="M12.5 3c1.719 2.755 2.5 5.876 2.5 9" /><path d="M18 14v7m-3 -3l3 3l3 -3" /></svg>
        },
        {
            title: "Sengketa Informasi Publik",
            link: "/layanan/tata-cara-sengketa-informasi",
            icon: <svg  xmlns="http://www.w3.org/2000/svg"  width="32"  height="32"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.6"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-transfer"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 10h-16l5.5 -6" /><path d="M4 14h16l-5.5 6" /></svg>
        },
        {
            title: "Alasan Pengajuan Keberatan",
            link: "/layanan/alasan-pengajuan-keberatan",
            icon: <svg  xmlns="http://www.w3.org/2000/svg"  width="32"  height="32"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.6"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-list"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l11 0" /><path d="M9 12l11 0" /><path d="M9 18l11 0" /><path d="M5 6l0 .01" /><path d="M5 12l0 .01" /><path d="M5 18l0 .01" /></svg>
        },
    ]

    return (
        <GuestLayout>
            <Head title="Alur dan Tata Cara" />

            <h1 className="text-3xl text-blue-800 font-extrabold max-w-[1440px] mx-auto my-8 px-6">
                Alur dan Tata Cara Permohonan
            </h1>
            <div className="grid grid-cols-4 gap-8 max-w-[1440px] mx-auto px-6">
                {/* Card */}
                {menu.map((item, index) => (
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
