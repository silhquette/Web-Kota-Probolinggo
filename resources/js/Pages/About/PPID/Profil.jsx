//import React
import React from "react";
import { Head, Link, useForm } from '@inertiajs/react';

//import layout
import GuestLayout from "../../../Layouts/GuestLayout";

export default function ProfileIndex() {
    return (
        <GuestLayout>
            <Head title="Profil PPID" />
            
            <div className="flex flex-col gap-4 max-w-[1024px] mx-auto my-8 px-6">
                <h1 className="text-3xl md:text-5xl font-serif text-center mt-4 font-semibold">
                    Pejabat Pengelola Informasi dan Dokumentasi
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
                    src="/assets/images/ICON-DISKOMINFO.jpg"
                    alt="Lambang Kota"
                    className="my-2 rounded-xl max-h-[350px] object-contain"
                />
                <h2 className="text-xl md:text-3xl mt-4 font-semibold">
                    Profil PPID Kota Probolinggo
                </h2>
                <hr />
                <p className="inline-block text-center w-full font-semibold">Salam Transparansi,</p>
                <p className="indent-8">Salah satu elemen penting dalam mewujudkan penyelenggaraan negara yang terbuka adalah hak publik untuk memperoleh Informasi sesuai dengan peraturan perundang¬undangan. Hak atas Informasi menjadi sangat penting karena makin terbuka penyelenggaraan negara untuk diawasi publik, penyelenggaraan negara tersebut makin dapat dipertanggung jawabkan. Hak setiap Orang untuk memperoleh Informasi juga relevan untuk meningkatkan kualitas pelibatan masyarakat dalam proses pengambilan keputusan publik. Partisipasi atau pelibatan masyarakat tidak banyak berarti tanpa jaminan keterbukaan Informasi Publik.</p>
                <p className="indent-8">Keberadaan Undang-¬undang tentang Keterbukaan Informasi Publik sangat penting sebagai landasan hukum yang berkaitan dengan (1) hak setiap Orang untuk memperoleh Informasi; (2) kewajiban Badan Publik menyediakan dan melayani permintaan Informasi secara cepat, tepat waktu, biaya ringan/proporsional, dan cara sederhana; (3) pengecualian bersifat ketat dan terbatas; (4) kewajiban Badan Publik untuk membenahi sistem dokumentasi dan pelayanan Informasi.</p>
                <p className="indent-8">Setiap Badan Publik mempunyai kewajiban untuk membuka akses atas Informasi Publik yang berkaitan dengan Badan Publik tersebut untuk masyarakat luas. Lingkup Badan Publik dalam Undang-undang ini meliputi lembaga eksekutif, yudikatif, legislatif, serta penyelenggara negara lainnya yang mendapatkan dana dari Anggaran Pendapatan dan Belanja Negara (APBN)/Anggaran Pendapatan dan Belanja Daerah (APBD) dan mencakup pula organisasi nonpemerintah, baik yang berbadan hukum maupun yang tidak berbadan hukum, seperti lembaga swadaya masyarakat, perkumpulan, serta organisasi lainnya yang mengelola atau menggunakan dana yang sebagian atau seluruhnya bersumber dari APBN/APBD, sumbangan masyarakat, dan/atau luar negeri.</p>
                <p className="indent-8">Sesuai dengan amanat pasal 13 UU No.14 Tahun 2008, Dinas Komunikasi dan Informatika Kota Probolinggo sebagai salah satu Badan Publik telah membentuk Pejabat Pengelola Informasi dan Dokumentasi (PPID) melalui Keputusan Walikota Nomor : 188.45/14/KEP/425.012/2012 Tentang Pejabat Pengelola Informasi dan Dokumentasi (PPID) dan Pejabat Pengelola Informasi dan Dokumentasi (PPID) Pembantu Kota Probolinggo. Dengan terbentuknya PPID pemohon informasi sesuai dengan haknya dapat memperoleh informasi public yang dihasilkan oleh Kementerian Komunikasi dan Informatika sesuai dengan ketentuan dalam UU No. 14 Tahun 2008.</p>
            </div>
        </GuestLayout>
    );
}
