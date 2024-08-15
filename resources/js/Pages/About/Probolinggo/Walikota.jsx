//import React
import React from "react";
import { Head, Link, useForm } from "@inertiajs/react";

//import layout
import GuestLayout from "../../../Layouts/GuestLayout";

import penghargaan from "./penghargaan-walikota";

export default function MaskotIndex() {
    const penghargaanWalikota = penghargaan()
    console.log(penghargaanWalikota);

    const dataWalikota = {
        'Data Pribadi': [
            "Nama Lengkap: Dr. NURKHOLIS, S.Sos, M.Si, CIPA, CICHM",
            "Tempat/ Tanggal Lahir: Banyuwangi, 17 Januari 1968",
            "Alamat Tempat Tinggal: Jl. Gayungsari Timur IV, Gayungsari, Kota Surabaya, Jawa Timur – 60234",
            "Jenis Kelamin: Laki ­laki",
            "Status Perkawinan: Kawin",
            "Agama: Islam",
        ],
        'Riwayat Pendidikan': [
            "Diploma III (D3) Ilmu Pemerintahan, APDN, 1991",
            "Sarjana (S1) Ilmu Administrasi, Universitas Bhayangkara, 1996",
            "Magister (S2) Ilmu Administrasi, Universitas 17 Agustus 1945 Surabaya, 2001",
            "Doktor (S3) Ilmu Administrasi, Universitas Brawijaya, 2020",
        ],
        'Riwayat Pendidikan Pengembangan Umum': [
            "Pelatihan Kepemimpinan Nasional Tingkat IV, 2008",
            "Pelatihan Kepemimpinan Nasional Tingkat III, 2011",
            "Pelatihan Kepemimpinan Nasional Tingkat II, 2012",
            "Pelatihan Kepemimpinan Nasional Tingkat I, 2020",
        ],
        'Riwayat Pangkat': [
            "Pengatur Muda (II/a), 1989",
            "Pengatur Muda Tk I (II/b), 1993",
            "Pengatur (II/c), 1995",
            "Penata Muda (III/a), 1997",
            "Penata Muda Tk I (III/b), 2001",
            "Penata (III/c), 2005",
            "Penata Tk I (III/d), 2009",
            "Pembina (IV/a), 2011",
            "Pembina Tk I (IV/b), 2015",
            "Pembina Utama Muda (IV/c), 2019",
            "Pembina Utama Madya (IV/d), 2023",
        ],
        'Pengalaman Jabatan': [
            "Kepala Biro Organisasi Setdaprov Jatim, 2018",
            "Kepala BKD Prov Jatim, 2020",
            "Kepala Dinas ESDM Prov Jatim, 2021",
        ],
    };


    return (
        <GuestLayout>
            <Head title="Wali Kota" />

            <div className="flex flex-col gap-4 max-w-[1024px] mx-auto my-8 px-6">
                <h1 className="text-3xl md:text-5xl font-serif text-center mt-4 font-semibold">
                    Profil PJ. Wali Kota Probolinggo
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
                            class="icon icon-tabler icons-tabler-filled icon-tabler-rosette-discount-check text-blue-700"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M12.01 2.011a3.2 3.2 0 0 1 2.113 .797l.154 .145l.698 .698a1.2 1.2 0 0 0 .71 .341l.135 .008h1a3.2 3.2 0 0 1 3.195 3.018l.005 .182v1c0 .27 .092 .533 .258 .743l.09 .1l.697 .698a3.2 3.2 0 0 1 .147 4.382l-.145 .154l-.698 .698a1.2 1.2 0 0 0 -.341 .71l-.008 .135v1a3.2 3.2 0 0 1 -3.018 3.195l-.182 .005h-1a1.2 1.2 0 0 0 -.743 .258l-.1 .09l-.698 .697a3.2 3.2 0 0 1 -4.382 .147l-.154 -.145l-.698 -.698a1.2 1.2 0 0 0 -.71 -.341l-.135 -.008h-1a3.2 3.2 0 0 1 -3.195 -3.018l-.005 -.182v-1a1.2 1.2 0 0 0 -.258 -.743l-.09 -.1l-.697 -.698a3.2 3.2 0 0 1 -.147 -4.382l.145 -.154l.698 -.698a1.2 1.2 0 0 0 .341 -.71l.008 -.135v-1l.005 -.182a3.2 3.2 0 0 1 3.013 -3.013l.182 -.005h1a1.2 1.2 0 0 0 .743 -.258l.1 -.09l.698 -.697a3.2 3.2 0 0 1 2.269 -.944zm3.697 7.282a1 1 0 0 0 -1.414 0l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l2 2l.094 .083a1 1 0 0 0 1.32 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" />
                        </svg>
                    </caption>
                    <caption>|</caption>
                    <caption>4 Agustus 2024</caption>
                </div>
                <img
                    src="/assets/images/walikota.png"
                    alt="Pemandangan Kota"
                    className="my-2 rounded-xl max-h-[500px] object-top object-contain"
                />
                <div className="flex flex-col gap-2 w-full md:w-2/3 mx-auto">
                    {Object.keys(dataWalikota).map((key, index) => (
                        <>
                            <h2 className="text-xl md:text-3xl mt-4 font-semibold">
                                {key}
                            </h2>
                            <hr />
                            <ol className="list-disc mx-4">
                                {dataWalikota[key].map((data, index) => (
                                    <li key={index}>{data}</li>
                                ))}
                            </ol>
                        </>
                    ))}

                    <h2 className="text-xl md:text-3xl mt-4 font-semibold">
                        Prestasi dan Penghargaan Wali Kota
                    </h2>
                    <hr />
                    <table className="table-auto relative w-[1024px] -translate-x-1/2 left-1/2 mt-4">
                        <thead>
                            <tr>
                                <th className="py-2 px-4">No</th>
                                <th className="py-2 px-4">Prestasi/Penghargaan</th>
                                <th className="py-2 px-4">Diberikan Oleh</th>
                                <th className="py-2 px-4">Tahun</th>
                                <th className="py-2 px-4">Keterangan</th>
                            </tr>
                        </thead>
                        <tbody>
                            {penghargaanWalikota.map((item, index) => (
                                <tr key={index} className="border-y odd:bg-gray-50 even:bg-white">
                                    <td className="py-2 px-4">{item.no}</td>
                                    <td className="py-2 px-4">{item.prestasi}</td>
                                    <td className="py-2 px-4">{item.diberikanOleh}</td>
                                    <td className="py-2 px-4">{item.tahun}</td>
                                    <td className="py-2 px-4">{item.keterangan}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <h2 className="text-xl md:text-3xl mt-4 font-semibold">
                        Wali kota Probolinggo
                    </h2>
                    <hr />
                    <img
                        src="/assets/images/walikota-walikota-probolinggo.png"
                        alt="Pemandangan Kota"
                        className="my-2 rounded-xl max-h-[900px] object-top object-contain"
                    />
                </div>
            </div>
        </GuestLayout>
    );
}
