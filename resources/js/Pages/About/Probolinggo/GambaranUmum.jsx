//import React
import React from "react";
import { Head, Link, useForm } from '@inertiajs/react';

//import layout
import GuestLayout from "../../../Layouts/GuestLayout";

export default function GambaranUmum({session }) {

    return (
        <GuestLayout>
            <Head title="Gambaran Umum" />

            <div className="flex flex-col gap-4 max-w-[1024px] mx-auto my-8">
                <h1 className="text-3xl md:text-5xl font-serif text-center mt-4 font-semibold">Gambaran Umum Kota Probolinggo</h1>
                <div className="flex gap-4 w-full justify-center mb-4">
                    <caption className="flex gap-1 items-center">PPID Kota Probolinggo<svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-rosette-discount-check text-blue-700"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12.01 2.011a3.2 3.2 0 0 1 2.113 .797l.154 .145l.698 .698a1.2 1.2 0 0 0 .71 .341l.135 .008h1a3.2 3.2 0 0 1 3.195 3.018l.005 .182v1c0 .27 .092 .533 .258 .743l.09 .1l.697 .698a3.2 3.2 0 0 1 .147 4.382l-.145 .154l-.698 .698a1.2 1.2 0 0 0 -.341 .71l-.008 .135v1a3.2 3.2 0 0 1 -3.018 3.195l-.182 .005h-1a1.2 1.2 0 0 0 -.743 .258l-.1 .09l-.698 .697a3.2 3.2 0 0 1 -4.382 .147l-.154 -.145l-.698 -.698a1.2 1.2 0 0 0 -.71 -.341l-.135 -.008h-1a3.2 3.2 0 0 1 -3.195 -3.018l-.005 -.182v-1a1.2 1.2 0 0 0 -.258 -.743l-.09 -.1l-.697 -.698a3.2 3.2 0 0 1 -.147 -4.382l.145 -.154l.698 -.698a1.2 1.2 0 0 0 .341 -.71l.008 -.135v-1l.005 -.182a3.2 3.2 0 0 1 3.013 -3.013l.182 -.005h1a1.2 1.2 0 0 0 .743 -.258l.1 -.09l.698 -.697a3.2 3.2 0 0 1 2.269 -.944zm3.697 7.282a1 1 0 0 0 -1.414 0l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l2 2l.094 .083a1 1 0 0 0 1.32 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" /></svg></caption>
                    <caption>|</caption>
                    <caption>4 Agustus 2024</caption>
                </div>
                <img src="/assets/images/gambaran-umum-1.jpg" alt="Pemandangan Kota" className="my-2 rounded-xl max-h-[400px] object-top object-cover" />
                <h2 className="text-xl md:text-3xl mt-4 font-semibold">Gambaran Umum Kota Probolinggo</h2>
                <hr />
                <p className="indent-8">Pertumbuhan penduduk adalah perubahan populasi sewaktu-waktu dan dapat dihitung sebagai perubahan atas jumlah individu dalam sebuah populasi menggunakan “per waktu unit” untuk pengukuran. Pertumbuhan penduduk yang makin cepat, mendorong pertumbuhan aspek-aspek kehidupan yang meliputi aspek sosial, ekonomi, politik, kebudayaan, dan sebagainya. Perkembangan kependudukan di Kota Probolinggo selama ini menunjukkan peningkatan dari tahun ke tahun dan cukup dinamis dengan pemerataan jumlah penduduk seiring dengan keseimbangan pembangunan di wilayah utara dan wilayah selatan Kota Probolinggo.</p>
                <p className="indent-8">Berdasarkan data dari Badan Pusat Statistik, Hasil Proyeksi Penduduk Interim 2020-2023, jumlah penduduk Kota Probolinggo pada tahun 2023 adalah sebesar 245.174 jiwa yang terdiri dari 121.500 orang laki-laki dan 123.674 orang perempuan. Angka rasio jenis kelamin penduduk laki-laki terhadap penduduk perempuan sebesar 98,24. Artinya ada sebanyak 98 orang laki-laki setiap 100 orang perempuan.</p>
                <p className="indent-8">Persebaran penduduk di Kota Probolinggo terpusat di wilayah pusat kota bagian utara yang terhubung langsung dengan Pelabuhan dan dekat dengan pusat bisnis dibandingkan dengan di wilayah bagian selatan kota yang merupakan kawasan perbatasan yang masih bersifat agraris. Karenanya jumlah penduduk di setiap Kecamatan sangat bervariasi. Menurut data penduduk yang teregistrasi pada Dinas Kependudukan dan Pencatatan Sipil Kota Probolinggo hingga semester 1 tahun 2023, kecamatan yang memiliki jumlah penduduk tertinggi yaitu Kecamatan Mayangan dengan jumlah penduduk sebesar 63.032 jiwa. Sedangkan yang terendah yaitu Kecamatan Wonoasih dengan jumlah penduduk sebesar 35.714 jiwa.</p>
                <div className="flex flex-col gap-2 items-center justify-center">
                    <img src="/assets/images/gambaran-umum-2.jpg" alt="Statistik" className="my-2 rounded-xl w-full md:w-1/2 mx-auto h-[400px] object-cover" />
                    <caption className="text-sm text-gray-500">Sumber : Dinas Kependudukan dan Pencatatan Sipil Kota Probolinggo</caption>
                    <caption className="text-sm font-semibold">Gambar 1. Jumlah dan Persentase Penduduk Menurut Kecamatan di Kota Probolinggo Semester 1 Tahun 2023</caption>
                </div>
                <p className="indent-8">Selain dilihat dari komposisi berdasarkan wilayah kecamatan, struktur penduduk di Kota Probolinggo juga dapat dilihat berdasarkan klasifikasi kelompok umur sebagaimana grafik berikut :</p>
                <div className="flex flex-col gap-2 items-center justify-center">
                    <img src="/assets/images/gambaran-umum-3.jpg" alt="Statistik" className="my-2 rounded-xl w-full md:w-1/2 mx-auto h-[400px] object-cover" />
                    <caption className="text-sm text-gray-500">Sumber : Dinas Kependudukan dan Pencatatan Sipil Kota Probolinggo</caption>
                    <caption className="text-sm font-semibold">Gambar 2. Jumlah Penduduk Teregistrasi Menurut Usia dan Jenis Kelamin di Kota Probolinggo Semester 1 Tahun 2023</caption>
                </div>
                <p className="indent-8">Dari data yang tersaji dapat dilihat bahwa Angka Beban Ketergantungan (dependency ratio) yang menggambarkan beban penduduk produktif terhadap penduduk yang tidak produktif, dimana Angka Beban Ketergantungan memberikan gambaran perbandingan antara jumlah penduduk yang produktif (struktur usia 15-64 tahun) dengan jumlah penduduk yang tidak produktif (struktur usia 0-14 tahun dan 65 tahun ke atas). Untuk penduduk yang mempunyai struktur muda atau sangat tua sekali, maka beban ketergantungannya cenderung sangat tinggi.</p>
                <p className="indent-8">Kualitas penduduk Kota Probolinggo yang menjadi modal bagi pembangunan daerah tersebut juga turut didukung oleh struktur umur penduduknya. Berdasar pada data penduduk Kota Probolinggo menurut kelompok umur di atas, komposisi penduduk Kota Probolinggo pada semester 1 tahun 2023 dapat digolongkan ke dalam dua kelompok penduduk yaitu kelompok usia 15-64 tahun sebesar 69,92 persen yang memenuhi kriteria Penduduk Produktif, sedangkan pada kelompok usia 0-14 tahun adalah sebesar 23,22 persen dan pada kelompok usia 65 tahun keatas adalah sebesar 6,86 persen yang termasuk dalam kriteria Penduduk Tidak Produktif. Angka tersebut memberikan gambaran bahwa angka beban ketergantungan (Age Depency Ratio) penduduk Kota Probolinggo pada semester 1 tahun 2023 adalah sebesar 43,02 persen, ini berarti bahwa secara hipotesis setiap 100 penduduk usia produktif menanggung sekitar 43 sampai 44 jiwa penduduk usia tidak produktif.</p>
            </div>
        </GuestLayout>
    );
}
