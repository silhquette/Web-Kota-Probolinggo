//import React
import React from "react";
import { Head, Link, useForm } from '@inertiajs/react';

//import layout
import GuestLayout from "../../../Layouts/GuestLayout";

export default function StatisticIndex({ statistics, session }) {
    console.log(statistics);

    return (
        <GuestLayout>
            <Head title="Lambang Daerah" />
            
            <div className="flex flex-col gap-4 max-w-[1024px] mx-auto my-8 px-6">
                <h1 className="text-3xl md:text-5xl font-serif text-center mt-4 font-semibold">
                    Lambang Kota Probolinggo
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
                    src="/assets/images/logo-kota-probolinggo.png"
                    alt="Lambang Kota"
                    className="my-2 rounded-xl max-h-[350px] object-contain"
                />
                <h2 className="text-xl md:text-3xl mt-4 font-semibold">
                    Penjelasan Lambang Daerah
                </h2>
                <hr />
                <div>
                    <p className="text-center">Ditetapkan dengan</p>
                    <p className="text-center">
                        KEPUTUSAN PRESIDEN REPUBLIK INDONESIA
                    </p>
                    <p className="text-center">Nomor 203 tahun 1956</p>
                </div>
                <img
                    src="/assets/images/logo-kota-probolinggo.png"
                    alt="Lambang Kota"
                    className="my-2 rounded-xl w-full md:w-1/2 mx-auto h-[350px] object-contain"
                />
                <table class="table-auto w-full mx-auto">
                    <tbody>
                        <tr className="border-b">
                            <td className="p-2 font-semibold w-fit md:w-48">Ukuran Lambang</td>
                            <td className="p-2">28 x 36 cm</td>
                        </tr>
                        <tr className="border-b">
                            <td className="p-2 font-semibold">Bentuk Lambang</td>
                            <td className="p-2">Perisai; Dimaksudkan sebagai tanda perkenalan dalam perjuangan menegakkan kemerdekaan negara dan daerahnya yang telah tercapai.</td>
                        </tr>
                        <tr className="border-b">
                            <td className="p-2 font-semibold">Dasar Biru Muda</td>
                            <td className="p-2">melambangkan Kota Probolinggo sebagai daerah pantai.</td>
                        </tr>
                        <tr className="">
                            <td className="p-2 font-semibold">Isi</td>
                            <td className="p-2">”Probolinggo” yang ada hubungannya dengan cerita kuno, yaitu jatuhnya sebuah benda bercahaya (meteor) – dalam lambung dilukiskan sebagai bintang dan tempat jatuhnya benda tersebut oleh raja-raja dahulu dipilih sebagai tempat untuk mendapatkean perdamaian dan mengakhiri perselisihan.</td>
                        </tr>
                        <tr className="">
                            <td className="p-2 font-semibold"></td>
                            <td className="p-2">PROBO dalam bahasa Sansekerta berari sinar, sedang LINGGA berarti tanda, dalam hal ini tanda perdamaian. Dapat juga diartikan : asli atau sederhana (seperti perwujudan seluruh lambang yang sederhana).</td>
                        </tr>
                        <tr className="border-b">
                            <td className="p-2 font-semibold"></td>
                            <td className="p-2">Dengan lambang ini diharapkan jiwa nurani segenap penduduk Kota probolinggo selalu mendapat tuntunan cahaya terang sehingga sehingga alam pikiran dan perbuatannya selalu ditujukan pada usaha tercapainya masyarakat adil makmur,s esuai dengan cita-cita proklamasi kemerdekaan 17 Agustus 1945.</td>
                        </tr>
                        <tr className="border-b">
                            <td className="p-2 font-semibold"> Daun Anggur dan Mangga</td>
                            <td className="p-2">Mengingatkan Kota Probolinggo sebagai penghasil buah-buahan Anggur dan Mangga yang terkenal seluruh Indonesia.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </GuestLayout>
    );
}
