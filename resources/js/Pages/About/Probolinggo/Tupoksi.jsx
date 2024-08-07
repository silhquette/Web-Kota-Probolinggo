//import React
import React from "react";
import { Head, Link, useForm } from '@inertiajs/react';

//import layout
import GuestLayout from "../../../Layouts/GuestLayout";

export default function TupoksiIndex() {
    const tupoksiData = [
        { name: "TUPOKSI SEKRETARIAT DAERAH", link: 'https://ppid.probolinggokota.go.id/wp-content/uploads/2023/09/1.-TUPOKSI-SEKRETARIAT-DAERAH.pdf' },
        { name: "TUPOKSI SEKRETARIAT DPRD", link: 'https://ppid.probolinggokota.go.id/wp-content/uploads/2023/09/2.-TUPOKSI-SEKRETARIAT-DPRD.pdf' },
        { name: "TUPOKSI INSPEKTORAT", link: 'https://ppid.probolinggokota.go.id/wp-content/uploads/2023/09/3.-TUPOKSI-INSPEKTORAT.pdf' },
        { name: "TUPOKSI BAPPEDALITBANG", link: 'https://ppid.probolinggokota.go.id/wp-content/uploads/2023/09/4.-TUPOKSI-BAPPEDALITBANG.pdf' },
        { name: "TUPOKSI BPPKAD", link: 'https://ppid.probolinggokota.go.id/wp-content/uploads/2023/09/5.-TUPOKSI-BPPKAD.pdf' },
        { name: "TUPOKSI BKPSDM", link: 'https://ppid.probolinggokota.go.id/wp-content/uploads/2023/09/6.-TUPOKSI-BKPSDM.pdf' },
        { name: "TUPOKSI BAKESBANGPOL", link: 'https://ppid.probolinggokota.go.id/wp-content/uploads/2023/09/7.-TUPOKSI-BAKESBANGPOL.pdf' },
        { name: "TUPOKSI DINAS PENDIDIKAN DAN KEBUDAYAAN", link: 'https://ppid.probolinggokota.go.id/wp-content/uploads/2023/09/8.-TUPOKSI-DINAS-PENDIDIKAN-DAN-KEBUDAYAAN.pdf' },
        { name: "TUPOKSI DINAS KESEHATAN", link: 'https://ppid.probolinggokota.go.id/wp-content/uploads/2023/09/9.-TUPOKSI-DINAS-KESEHATAN.pdf' },
        { name: "TUPOKSI UOBK RSUD Dr. Moh. Saleh", link: 'https://ppid.probolinggokota.go.id/wp-content/uploads/2023/09/10.-TUPOKSI-UOBK-RSUD-Dr.-Moh.-Saleh.pdf' },
        { name: "TUPOKSI DPUPRPERKIM", link: 'https://ppid.probolinggokota.go.id/wp-content/uploads/2023/09/11.-TUPOKSI-DPUPRPERKIM.pdf' },
        { name: "TUPOKSI DINSOS PPPA & UPTD", link: 'https://ppid.probolinggokota.go.id/wp-content/uploads/2023/09/12.-TUPOKSI-DINSOS-PPPA-UPTD.pdf' },
        { name: "TUPOKSI DLH", link: 'https://ppid.probolinggokota.go.id/wp-content/uploads/2023/09/13.-TUPOKSI-DLH.pdf' },
        { name: "TUPOKSI DISPENDUKCAPIL", link: 'https://ppid.probolinggokota.go.id/wp-content/uploads/2023/09/14.-TUPOKSI-DISPENDUKCAPIL.pdf' },
        { name: "TUPOKSI DISHUB", link: 'https://ppid.probolinggokota.go.id/wp-content/uploads/2023/09/15.-TUPOKSI-DISHUB.pdf' },
        { name: "TUPOKSI DISKOMINFO", link: 'https://ppid.probolinggokota.go.id/wp-content/uploads/2023/09/16.-TUPOKSI-DISKOMINFO.pdf' },
        { name: "TUPOKSI DKUP", link: 'https://ppid.probolinggokota.go.id/wp-content/uploads/2023/09/17.-TUPOKSI-DKUP.pdf' },
        { name: "TUPOKSI DPMPTSP", link: 'https://ppid.probolinggokota.go.id/wp-content/uploads/2023/09/18.-TUPOKSI-DPMPTSP.pdf' },
        { name: "TUPOKSI DISPOPAR", link: 'https://ppid.probolinggokota.go.id/wp-content/uploads/2023/09/19.-TUPOKSI-DISPOPAR.pdf' },
        { name: "TUPOKSI DISPERINAKER", link: 'https://ppid.probolinggokota.go.id/wp-content/uploads/2023/09/20.-TUPOKSI-DISPERINAKER.pdf' },
        { name: "TUPOKSI DISPERPUSIP", link: 'https://ppid.probolinggokota.go.id/wp-content/uploads/2023/09/21.-TUPOKSI-DISPERPUSIP.pdf' },
        { name: "TUPOKSI DKPPP", link: 'https://ppid.probolinggokota.go.id/wp-content/uploads/2023/09/22.-TUPOKSI-DKPPP.pdf' },
        { name: "TUPOKSI SATPOL PP", link: 'https://ppid.probolinggokota.go.id/wp-content/uploads/2023/09/23.-TUPOKSI-SATPOL-PP.pdf' },
        { name: "TUPOKSI KECAMATAN", link: 'https://ppid.probolinggokota.go.id/wp-content/uploads/2023/09/24.-TUPOKSI-KECAMATAN.pdf' }
    ];

    return (
        <GuestLayout>
            <Head title="Tupoksi Pemerintah" />

            <div className="flex flex-col gap-4 max-w-[1024px] mx-auto my-8">
                <h1 className="text-3xl md:text-5xl font-serif text-center mt-4 font-semibold">Tupoksi Pemerintah Kota Probolinggo</h1>
                <div className="flex gap-4 w-full justify-center mb-4">
                    <caption className="flex gap-1 items-center">PPID Kota Probolinggo<svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-rosette-discount-check text-blue-700"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12.01 2.011a3.2 3.2 0 0 1 2.113 .797l.154 .145l.698 .698a1.2 1.2 0 0 0 .71 .341l.135 .008h1a3.2 3.2 0 0 1 3.195 3.018l.005 .182v1c0 .27 .092 .533 .258 .743l.09 .1l.697 .698a3.2 3.2 0 0 1 .147 4.382l-.145 .154l-.698 .698a1.2 1.2 0 0 0 -.341 .71l-.008 .135v1a3.2 3.2 0 0 1 -3.018 3.195l-.182 .005h-1a1.2 1.2 0 0 0 -.743 .258l-.1 .09l-.698 .697a3.2 3.2 0 0 1 -4.382 .147l-.154 -.145l-.698 -.698a1.2 1.2 0 0 0 -.71 -.341l-.135 -.008h-1a3.2 3.2 0 0 1 -3.195 -3.018l-.005 -.182v-1a1.2 1.2 0 0 0 -.258 -.743l-.09 -.1l-.697 -.698a3.2 3.2 0 0 1 -.147 -4.382l.145 -.154l.698 -.698a1.2 1.2 0 0 0 .341 -.71l.008 -.135v-1l.005 -.182a3.2 3.2 0 0 1 3.013 -3.013l.182 -.005h1a1.2 1.2 0 0 0 .743 -.258l.1 -.09l.698 -.697a3.2 3.2 0 0 1 2.269 -.944zm3.697 7.282a1 1 0 0 0 -1.414 0l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l2 2l.094 .083a1 1 0 0 0 1.32 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" /></svg></caption>
                    <caption>|</caption>
                    <caption>4 Agustus 2024</caption>
                </div>
                <img src="/assets/images/gambaran-umum-1.jpg" alt="Pemandangan Kota" className="my-2 rounded-xl max-h-[400px] object-top object-cover" />
                <div className="flex flex-col gap-2 w-full md:w-2/3 mx-auto">
                    <h2 className="text-xl md:text-3xl mt-4 font-semibold">Tupoksi Pemerintah Kota Probolinggo</h2>
                    <hr />
                    <ol className="list-decimal mx-4">
                        <li><a className="hover:text-blue-700" href="https://ppid.probolinggokota.go.id/wp-content/uploads/2023/09/Perda_No_7_Th_2016_ttg_Pembentukan_OPD.pdf">Peraturan Daerah Kota Probolinggo Nomor 7 Tahun 2016 Tentang Pembentukan Dan Susunan Perangkat Daerah</a></li>
                        <li><a className="hover:text-blue-700" href="https://ppid.probolinggokota.go.id/wp-content/uploads/2023/09/Perda_No_7_Th_2016_ttg_Pembentukan_OPD.pdf">Peraturan Daerah Kota Probolinggo Nomor 5 Tahun 2019 Tentang Perubahan Atas Peraturan Daerah Kota Probolinggo Nomor 7 Tahun 2016 Tentang Pembentukan Dan Susunan Perangkat Daerah</a></li>
                        <li><a className="hover:text-blue-700" href="https://ppid.probolinggokota.go.id/wp-content/uploads/2023/09/Perda.-No.-7-Th-2022_Perubahan-Kedua-Atas-Perda.-No.-7-Th-2016-ttg-Pembentukan-dan-Susunan-Perangkat-Da.pdf">Peraturan Daerah Kota Probolinggo Nomor 7 Tahun 2022 Tentang Perubahan Kedua Atas Peraturan Daerah Kota Probolinggo Nomor 7 Tahun 2016 Tentang Pembentukan Dan Susunan Perangkat Daerah</a></li>
                    </ol>
                    <h2 className="text-xl md:text-3xl mt-4 font-semibold">Tupoksi Perangkat Daerah</h2>
                    <hr />
                    <ol className="list-decimal mx-4">
                        {tupoksiData.map((item, index) => (
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
