//import React
import React from "react";
import { Head, Link, useForm } from '@inertiajs/react';

//import layout
import GuestLayout from "../../Layouts/GuestLayout";

export default function StatisticIndex({ statistics, session }) {
    console.log(statistics);

    return (
        <GuestLayout>
            <Head title="Daftar Kota" />

            <div className="flex items-center justify-between max-w-[1440px] mx-auto my-8 px-6">
                <h1 className="text-3xl text-blue-800 font-extrabold">
                    Daftar Data Kota Probolinggo Tahun 2023
                </h1>
                <a
                    href="https://ppid.probolinggokota.go.id/wp-content/uploads/2024/04/Daftar-Data-2023.pdf"
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
            </div>

            <iframe
                src="https://ppid.probolinggokota.go.id/wp-content/uploads/2024/04/Daftar-Data-2023.pdf"
                frameborder="0"
                className="w-[1440px] h-[75vh] mx-auto"
            ></iframe>
        </GuestLayout>
    );
}
