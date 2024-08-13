//import React
import React from "react";
import { Head, Link, useForm } from '@inertiajs/react';

//import layout
import GuestLayout from "../../Layouts/GuestLayout";

export default function PermohonanIndex() {
    const informasiPublik = [
        "Pemohon informasi datang langsung ke desk layanan informasi di ruang PPID Kota Probolinggo.",
        "Mengisi buku tamu PPID dan mengisi formulir permohonan informasi dengan melampirkan fotocopy KTP pemohon.",
        "Pemohon menuliskan data lengkap sesuai formulir permohonan informasi yang telah disediakan, termasuk menjelaskan maksud serta tujuan penggunaan informasi yang akan diminta.",
        "Petugas memberi tanda bukti penerimaan permohonan informasi publik kepada pemohon informasi.",
        "Petugas memproses permintaan permohonan informasi publik sesuai dengan formulir permintaan informasi publik yang sudah ditanda tangani pemohon informasi dan petugas.",
        "Petugas memproses formulir permohonan informasi publik serta mulai melakukan pengecekan apakah informasi yang diminta oleh pemohon, termasuk informasi yang terbuka atau dikecualikan yang kemudian diteruskan kepada PPID. Jika informasi termasuk dalam kategori informasi dikecualikan, PPID menyampaikan alasan sesuai dengan perundangan yang berlaku.",
        "Waktu untuk PPID menjawab permohonan informasi tersebut, sesuai Undang-Undang No. 14 Tahun 2008 tentang Keterbukaan Informasi Publik yaitu 10 hari kerja + 7 hari kerja.",
        "Jika informasi yang diminta termasuk dalam informasi terbuka, maka PPID akan memberitahu si pemohon informasi melalui telepon yang telah tercatat di formulir permohonan informasi ataupun melalui surat kepada pemohon informasi dengan catatan, semua biaya penggandaan dibebankan kepada pemohon informasi.",
        "Jika informasi yang diminta termasuk dalam informasi yang dikecualikan, maka PPID akan memberitahukan secara langsung melalui telepon ataupun surat kepada pemohon informasi.",
        "Jika pemohon informasi puas terhadap jawaban PPID, maka permintaan informasi selesai, namun jika tidak puas, pemohon informasi dapat mengajukan keberatan kepada PPID dengan mendatangi meja layanan informasi ataupun melalui surat.",
        "Petugas akan mencatat dan memberikan formulir keberatan informasi publik kepada pemohon informasi untuk diisi. Setelah diisi, maka petugas akan memberikan tanda bukti penerimaan keberatan informasi publik.",
        "Waktu PPID untuk menjawab keberatan ini adalah 30 hari kerja sejak diterimanya keberatan informasi publik.",
        "Jika setelah diberikan jawaban atas keberatan informasi publik oleh PPID, pemohon tidak puas, maka pemohon informasi publik dapat mengajukan sengketa informasi publik kepada Komisi Informasi Provinsi Jawa Timur."
      ];
      

    return (
        <GuestLayout>
            <Head title="Permohonan Informasi" />

            <div className="flex flex-col gap-4 max-w-[1440px] mx-auto my-8 px-6">
                <h1 className="text-3xl md:text-5xl font-serif text-center mt-4 font-semibold">Alur dan Tata Cara Permohonan Informasi Publik</h1>
                <div className="flex gap-4 w-full justify-center mb-4">
                    <caption className="flex gap-1 items-center">PPID Kota Probolinggo<svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-rosette-discount-check text-blue-700"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12.01 2.011a3.2 3.2 0 0 1 2.113 .797l.154 .145l.698 .698a1.2 1.2 0 0 0 .71 .341l.135 .008h1a3.2 3.2 0 0 1 3.195 3.018l.005 .182v1c0 .27 .092 .533 .258 .743l.09 .1l.697 .698a3.2 3.2 0 0 1 .147 4.382l-.145 .154l-.698 .698a1.2 1.2 0 0 0 -.341 .71l-.008 .135v1a3.2 3.2 0 0 1 -3.018 3.195l-.182 .005h-1a1.2 1.2 0 0 0 -.743 .258l-.1 .09l-.698 .697a3.2 3.2 0 0 1 -4.382 .147l-.154 -.145l-.698 -.698a1.2 1.2 0 0 0 -.71 -.341l-.135 -.008h-1a3.2 3.2 0 0 1 -3.195 -3.018l-.005 -.182v-1a1.2 1.2 0 0 0 -.258 -.743l-.09 -.1l-.697 -.698a3.2 3.2 0 0 1 -.147 -4.382l.145 -.154l.698 -.698a1.2 1.2 0 0 0 .341 -.71l.008 -.135v-1l.005 -.182a3.2 3.2 0 0 1 3.013 -3.013l.182 -.005h1a1.2 1.2 0 0 0 .743 -.258l.1 -.09l.698 -.697a3.2 3.2 0 0 1 2.269 -.944zm3.697 7.282a1 1 0 0 0 -1.414 0l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l2 2l.094 .083a1 1 0 0 0 1.32 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" /></svg></caption>
                    <caption>|</caption>
                    <caption>4 Agustus 2024</caption>
                </div>
                <img src="/assets/images/alur-permohonan-informasi.jpeg" alt="Pemandangan Kota" className="my-2 rounded-xl max-h-[400px] object-top object-contain" />
                <div className="flex flex-col gap-2 w-full md:w-2/3 mx-auto">
                    <h2 className="text-xl md:text-3xl mt-4 font-semibold">Permohonan Informasi</h2>
                    <hr />
                    <p>Berikut ini merupakan alur permohonan informasi pada PPID Kota Probolinggo :</p>
                    <ol className="list-decimal mx-4">
                        {informasiPublik.map((item, index) => (
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
