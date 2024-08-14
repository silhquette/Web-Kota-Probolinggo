//import React
import React from "react";
import { Head, Link, useForm } from "@inertiajs/react";

//import layout
import GuestLayout from "../../Layouts/GuestLayout";

export default function LaporanIndex() {
    const laporan = [
        {
          action: "Laporan Neraca Per 31 Desember 2022 & 2021",
          link: "https://ppid.probolinggokota.go.id/wp-content/uploads/2023/09/NERACA-PER-31-DESEMBER-2022-dan-2021.pdf"
        },
        {
          action: "Laporan Neraca Per 31 Desember 2021 & 2020",
          link: "https://ppid.probolinggokota.go.id/wp-content/uploads/2022/10/2.-Laporan-Neraca-TA.-2021-Kota-Probolinggo.pdf"
        },
        {
          action: "Laporan Neraca Per 31 Desember 2020 & 2019",
          link: "https://ppid.probolinggokota.go.id/wp-content/uploads/2021/09/necara-2020.pdf"
        },
        {
          action: "Laporan Neraca Per 31 Desember 2019 & 2018",
          link: "https://drive.google.com/file/d/1dSds3LIUWxM3a2hZrCvPGUEQBGvOB_FC/view?usp=sharing"
        },
        {
          action: "Laporan Neraca Per 31 Desember 2018 & 2017",
          link: "https://ppid.probolinggokota.go.id/wp-content/uploads/2019/08/Neraca-2018.pdf"
        },
        {
          action: "Laporan Neraca Per 31 Desember 2016 & 2015",
          link: "https://ppid.probolinggokota.go.id/wp-content/uploads/2017/09/Neraca-Per-2016-2015.pdf"
        },
        {
          action: "Laporan Neraca Per 31 Desember 2015 & 2014",
          link: "https://ppid.probolinggokota.go.id/wp-content/uploads/2016/08/Laporan-Neraca-2015-2014.pdf"
        },
        {
          action: "Laporan Neraca Per 31 Desember 2014 & 2013",
          link: "https://ppid.probolinggokota.go.id/wp-content/uploads/2015/10/Laporan-Neraca-Tahun-2014.pdf"
        },
        {
          action: "Laporan Neraca Per 31 Desember 2013 & 2012",
          link: "https://ppid.probolinggokota.go.id/wp-content/uploads/2015/01/Neraca-2012-2013.pdf"
        },
    ];

    return (
        <GuestLayout>
            <Head title="Laporan Neraca" />

            <div className="flex flex-col gap-4 max-w-[1024px] mx-auto my-8 px-6">
                <h1 className="text-3xl md:text-5xl font-serif text-center mt-4 font-semibold">
                    Laporan Neraca PPID Kota Probolinggo
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
                    <div
                        className="flex flex-col gap-2 w-full mx-auto"
                    >
                        <h2 className="text-xl md:text-3xl mt-4 font-semibold">
                            Daftar Laporan Neraca PPID
                        </h2>
                        <hr />
                        <ol className="list-decimal mx-4">
                            {laporan.map((item, index) => (
                                <li key={index}>
                                    <Link href={item.link} className="hover:text-blue-700 after:content-['_↗']">
                                        <span>{item.action}</span>
                                    </Link>
                                    
                                </li>
                            ))}
                        </ol>
                    </div>

            </div>
        </GuestLayout>
    );
}
