//import React
import React from "react";
import { Head, Link, useForm } from '@inertiajs/react';

//import layout
import GuestLayout from "../../../Layouts/GuestLayout";

export default function MaskotIndex() {
    const maskotAttributes = [
        "Bagian kepala terdapat satu helai rambut dari daun anggur",
        "Daun anggur yang berdiri seperti hembusan angin di Kota Probolinggo",
        "Udeng (ikat kepala) khas Jawa Timur yang digunakan menandakan ciri khas masyarakat Kota Probolinggo",
        "Maskot menggunakan pakaian berupa kaos dengan gambar logo Kota Probolinggo untuk mengenalkan diri dan menempatkan nama Bayuangga pada hati masyarakat",
        "Maskot berupa maskot yang ramah dan bersahaja",
        "Daun mangga dalam bentuk sayap",
        "Kedua tangan terbuka melambangkan bahwa Kota Probolinggo siap dan terbuka terhadap perubahan melalui budaya khas pendalungan",
        "BAGA merujuk pada kamus bahasa Sansekerta bahwa mempunyai arti Orang Yang Kuat dan Teguh sesuai ciri khas masyarakat Kota Probolinggo yang kuat dan teguh memegang prinsip-prinsip kehidupan sebagai orang timur",
        "BAGA melambangkan sebagai penjaga dan penyeimbang keharmonisan di Kota Probolinggo"
    ];

    return (
        <GuestLayout>
            <Head title="Maskot Kota" />

            <div className="flex flex-col gap-4 max-w-[1024px] mx-auto my-8">
                <h1 className="text-3xl md:text-5xl font-serif text-center mt-4 font-semibold">Maskot Kota Probolinggo</h1>
                <div className="flex gap-4 w-full justify-center mb-4">
                    <caption className="flex gap-1 items-center">PPID Kota Probolinggo<svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-rosette-discount-check text-blue-700"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12.01 2.011a3.2 3.2 0 0 1 2.113 .797l.154 .145l.698 .698a1.2 1.2 0 0 0 .71 .341l.135 .008h1a3.2 3.2 0 0 1 3.195 3.018l.005 .182v1c0 .27 .092 .533 .258 .743l.09 .1l.697 .698a3.2 3.2 0 0 1 .147 4.382l-.145 .154l-.698 .698a1.2 1.2 0 0 0 -.341 .71l-.008 .135v1a3.2 3.2 0 0 1 -3.018 3.195l-.182 .005h-1a1.2 1.2 0 0 0 -.743 .258l-.1 .09l-.698 .697a3.2 3.2 0 0 1 -4.382 .147l-.154 -.145l-.698 -.698a1.2 1.2 0 0 0 -.71 -.341l-.135 -.008h-1a3.2 3.2 0 0 1 -3.195 -3.018l-.005 -.182v-1a1.2 1.2 0 0 0 -.258 -.743l-.09 -.1l-.697 -.698a3.2 3.2 0 0 1 -.147 -4.382l.145 -.154l.698 -.698a1.2 1.2 0 0 0 .341 -.71l.008 -.135v-1l.005 -.182a3.2 3.2 0 0 1 3.013 -3.013l.182 -.005h1a1.2 1.2 0 0 0 .743 -.258l.1 -.09l.698 -.697a3.2 3.2 0 0 1 2.269 -.944zm3.697 7.282a1 1 0 0 0 -1.414 0l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l2 2l.094 .083a1 1 0 0 0 1.32 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" /></svg></caption>
                    <caption>|</caption>
                    <caption>4 Agustus 2024</caption>
                </div>
                <img src="/assets/images/maskot.png" alt="Pemandangan Kota" className="my-2 rounded-xl max-h-[400px] object-top object-contain" />
                <div className="flex flex-col gap-2 w-full md:w-2/3 mx-auto">
                    <h2 className="text-xl md:text-3xl mt-4 font-semibold">Siapa itu BAGA?</h2>
                    <hr />
                    <p className="indent-8">Merujuk pada kamus bahasa sansekerta BAGA mempunyai arti “Orang yang Kuat dan Teguh” sesuai dengan ciri khas masyarakat Kota Probolinggo yang kuat dan teguh memegang prinsip-prinsip kehidupan sebagai orang timur, dan “BAGA” merupakan singkatan dari BAYUANGGA. BAYUANGGA adalah nama akronim yang mewakili ciri khas Kota Probolinggo yaitu angin, anggur, dan mangga yang dijelaskan di dalam visi pada pasal 4 bab III peraturan Pemerintah Daerah Kota Probolinggo nomor 2 tahun 2006. “BAGA” menggambarkan sosok masyarakat Kota Probolinggo yang berwawasan dan kepribadian BESTARI (Bersih, Sehat, Tertib, Aman, Rapi dan Indah). Bagian kepala terdapat satu helai rambut (dalam bentuk daun anggur) yang berdiri seperti hembusan angin di Kota Probolinggo dan dengan khas songkok jawa timur yang digunakan menandakan ciri khas masyarakat Kota Probolinggo. Maskot menggunakan pakaian berupa kaos dengan gambar logo Kota Probolinggo untuk mengenalkan diri dan menempatkan nama BAYUANGGA pada hati masyarakat.</p>
                    <p className="indent-8">“BAGA” melambangkan sebagai penjaga dan penyeimbang keharmonisan di Kota Probolinggo.</p>
                    <h2 className="text-xl md:text-3xl mt-4 font-semibold">Tentang Maskot BAGA</h2>
                    <hr />
                    <ol className="list-decimal mx-4">
                        {maskotAttributes.map((item, index) => (
                            <li key={index}>
                                {item}
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </GuestLayout>
    );
}
