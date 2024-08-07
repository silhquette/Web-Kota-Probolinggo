//import React
import React from "react";
import { Head, Link, useForm } from '@inertiajs/react';

//import layout
import GuestLayout from "../../Layouts/GuestLayout";

export default function StatisticIndex({ statistics, session }) {
    console.log(statistics);

    return (
        <GuestLayout>
            <Head title="Data Statistik" />

            <h1 className="text-3xl text-blue-800 font-extrabold max-w-[1440px] mx-auto my-8">
                Data Statistik Kota Probolinggo
            </h1>
            <div className="grid grid-cols-4 gap-8 max-w-[1440px] mx-auto">
                {/* Card */}
                {statistics.map((statistics, index) => (
                    <a
                        href={statistics.link}
                        rel="noopener noreferrer"
                        target="_blank"
                        key={index}
                        className="flex gap-4 p-4 rounded-xl border border-gray-400 hover:border-blue-700 hover:bg-blue-100 hover:text-blue-700"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="46"
                            height="46"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.3"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="icon icon-tabler icons-tabler-outline icon-tabler-file-analytics w-16"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                            <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                            <path d="M9 17l0 -5" />
                            <path d="M12 17l0 -1" />
                            <path d="M15 17l0 -3" />
                        </svg>
                        <p className="text-base">{statistics.name}</p>
                    </a>
                ))}
            </div>
        </GuestLayout>
    );
}
