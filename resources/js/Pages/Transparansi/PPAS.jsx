//import React
import React from "react";
import { Head, Link, useForm } from "@inertiajs/react";

//import layout
import GuestLayout from "../../Layouts/GuestLayout";

export default function LaporanIndex() {
  const dokumenPPAS = [
        { title: "Kebijakan Umum APBD (KUA) Tahun Anggaran 2024", link: "/assets/documents/KUA-2024-Pasca-Kesepakatan-Cetak-SKPD.pdf" },
        { title: "Prioritas dan Plafon Anggaran Sementara Tahun Anggaran 2024", link: "/assets/documents/PPAS-2024-Pasca-Kesepakatan-Cetak-SKPD.pdf" },
        { title: "Kebijakan Umum APBD (KUA) Tahun Anggaran 2023", link: "https://ppid.probolinggokota.go.id/wp-content/uploads/2023/09/2A.-KUA-2023-1.pdf" },
        { title: "Prioritas dan Plafon Anggaran Sementara Tahun Anggaran 2023", link: "https://ppid.probolinggokota.go.id/wp-content/uploads/2023/09/2B.-PPAS-2023-1.pdf" },
    ];
  

    return (
        <GuestLayout>
            <Head title="KUA / PPAS" />

            <div className="flex flex-col gap-4 max-w-[1024px] mx-auto my-8 px-6">
                <h1 className="text-3xl md:text-5xl font-serif text-center mt-4 font-semibold">
                    Kebijakan Umum APBD dan Prioritas dan Plafon Anggaran Sementara
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
                            Daftar Kebijakan Umum APBD dan Prioritas dan Plafon Anggaran Sementara
                        </h2>
                        <hr />
                        <ol className="list-decimal mx-4">
                            {dokumenPPAS  .map((item, index) => (
                                <li key={index}>
                                    <Link href={item.link} className="hover:text-blue-700 after:content-['_↗']">
                                        <span>{item.title}</span>
                                    </Link>
                                    
                                </li>
                            ))}
                        </ol>
                    </div>

            </div>
        </GuestLayout>
    );
}
