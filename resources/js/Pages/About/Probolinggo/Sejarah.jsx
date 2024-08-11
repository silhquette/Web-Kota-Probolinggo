//import React
import React from "react";
import { Head, Link, useForm } from '@inertiajs/react';

//import layout
import GuestLayout from "../../../Layouts/GuestLayout";

export default function SejarahIndex({session }) {

    return (
        <GuestLayout>
            <Head title="Sejarah Probolinggo" />
            
            <div className="flex flex-col gap-4 max-w-[1024px] mx-auto my-8 px-6">
                <h1 className="text-3xl md:text-5xl font-serif text-center mt-4 font-semibold">Sejarah Kota Probolinggo</h1>
                <div className="flex gap-4 w-full justify-center mb-4">
                    <caption className="flex gap-1 items-center">PPID Kota Probolinggo<svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-rosette-discount-check text-blue-700"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12.01 2.011a3.2 3.2 0 0 1 2.113 .797l.154 .145l.698 .698a1.2 1.2 0 0 0 .71 .341l.135 .008h1a3.2 3.2 0 0 1 3.195 3.018l.005 .182v1c0 .27 .092 .533 .258 .743l.09 .1l.697 .698a3.2 3.2 0 0 1 .147 4.382l-.145 .154l-.698 .698a1.2 1.2 0 0 0 -.341 .71l-.008 .135v1a3.2 3.2 0 0 1 -3.018 3.195l-.182 .005h-1a1.2 1.2 0 0 0 -.743 .258l-.1 .09l-.698 .697a3.2 3.2 0 0 1 -4.382 .147l-.154 -.145l-.698 -.698a1.2 1.2 0 0 0 -.71 -.341l-.135 -.008h-1a3.2 3.2 0 0 1 -3.195 -3.018l-.005 -.182v-1a1.2 1.2 0 0 0 -.258 -.743l-.09 -.1l-.697 -.698a3.2 3.2 0 0 1 -.147 -4.382l.145 -.154l.698 -.698a1.2 1.2 0 0 0 .341 -.71l.008 -.135v-1l.005 -.182a3.2 3.2 0 0 1 3.013 -3.013l.182 -.005h1a1.2 1.2 0 0 0 .743 -.258l.1 -.09l.698 -.697a3.2 3.2 0 0 1 2.269 -.944zm3.697 7.282a1 1 0 0 0 -1.414 0l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l2 2l.094 .083a1 1 0 0 0 1.32 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" /></svg></caption>
                    <caption>|</caption>
                    <caption>4 Agustus 2024</caption>
                </div>
                <img src="/assets/images/SejarahKota.png" alt="Pemandangan Kota" className="my-2 rounded-xl" />
                <h2 className="text-xl md:text-3xl mt-4 font-semibold">Sejarah Kota Probolinggo</h2>
                <hr />
                <p className="indent-8">“Pada zaman Pemerintahan Prabu Radjasanagara (Sri Nata Hayam Wuruk) raja Majapahit yang ke IV (1350-1389), Probolinggo dikenal dengan nama “Banger”, nama sungai yang mengalir di tengah daerah Banger ini. Banger merupakan pedukuhan kecil di bawah pemerintahan Akuwu di Sukodono. Nama Banger dikenal dari buku Negarakertagama yang ditulis oleh Pujangga Kerajaan Majapahit yang terkenal, yaitu Prapanca.</p>
                <p className="indent-8">Sejalan dengan perkembangan politik kenegaraan/kekuasaan di zaman Kerajaan Majapahit, pemerintahan di Banger juga mengalami perubahan-perubahan/perkembangan seirama dengan perkembangan zaman. Semula merupakan pedukuhan kecil di muara kali Banger, kemudian berkembang manjadi Pakuwon yang dipimpin oleh seorang Akuwu, di bawah kekuasaan kerajaan Majapahit. Pada saat Bre Wirabumi (Minakjinggo), Raja Blambangan berkuasa, Banger yang merupakan perbatasan antara Majapahit dan Blambangan, dikuasai pula oleh Bre Wirabumi. Bahkan Banger menjadi kancah perang saudara antara Bre Wirabumi (Blambangan) dengan Prabu Wikramawardhana (Majapahit) yang dikenal dengan “Perang Paregreg”.</p>
                <img src="/assets/images/SejarahKota2.png" alt="Pemandangan Kota" className="my-2 rounded-xl w-full md:w-1/2 mx-auto h-[400px] object-cover" />
                <p className="indent-8">Pada masa Pemerintahan VOC, setelah kompeni dapat meredakan Mataram, dalam perjanjian yang dipaksakan kepada Sunan Pakubuwono II di Mataram, seluruh daerah di sebelah Timur Pasuruan  (termasuk Banger) diserahkan kepada VOC pada tahun 1743. Untuk memimpin pemerintahan di Banger, pada tahun 1746 VOC mengengkat Kyai Djojolelono sebagai Bupati Pertama di Banger, dengan gelar Tumenggung. Kabupatennya terletak di Desa Kebonsari Kulon. Kyai Djojolelono adalah putera Kyai Boen Djolodrijo (Kiem Boen), Patih Pasuruan. Patihnya Bupati Pasuruan Tumenggung Wironagoro (Untung Suropati). Kompeni (VOC) terkenal dengan politik adu dombanya. Kyai Djojolelono dipengaruhi , diadu untuk menangkap/membunuh Panembahan Semeru, Patih Tengger, keturunan Untung Suropati yang turut memusuhi kompeni. Panembahan Semeru akhirnya terbunuh oleh Kyai Djojolelono. Setelah menyadari akan kekhilafannya, terpengaruh oleh politik adu domba kompeni, Kyai Djojolelono menyesali tindakannya. Kyai Djojolelono mewarisi darah ayahnya dalam menentang/melawan kompeni. Sebagai tanda sikap permusuhannya tersebut, Kyai Djojolelono kemudian menyingkir, meninggalkan istana dan jabatannya sebagai Bupati Banger pada tahun 1768, terus mengembara/lelono.</p>
                <p className="indent-8">Sebagai pengganti Kyai Djojolelono, kompeni mengangkat Raden Tumenggung Djojonegoro, putra Raden Tumenggung Tjondronegoro, Bupati Surabaya ke 10 sebagai Bupati Banger kedua. Rumah kabupatennya dipindahkan ke Benteng Lama. Kompeni tetap kompeni, bukan kompeni kalau tidak adu domba. Karena politik adu domba kompeni, Kyai Djojolelono yang tetap memusuhi kompeni ditangkap oleh Tumenggung Djojonegoro. Setelah wafat, Kyai Djojolelono dimakamkan di pasarean “Sentono”, yang oleh masyarakat dianggap sebagai makam keramat.</p>
                <p className="indent-8">Di bawah pimpinan Tumenggung Djojonegoro, daerah Banger tampak makin makmur, penduduk tambah banyak. Beliau juga mendirikan Masjid Jami’ (± Tahun 1770). Karena sangat disenangi masyarakat, beliau mendapat sebutan “Kanjeng Djimat”. Pada tahun 1770 nama Banger oleh Tumenggung Djojonegoro  (Kanjeng Djimat) diubah menjadi “Probolinggo” (Probo : sinar, linggo : tugu, badan, tanda peringatan, tongkat). Probolinggo : sinar yang berbentuk tugu, gada, tongkat (mungkin yang dimaksud adalah meteor/bintang jatuh). Setelah wafat Kanjeng Djimat dimakamkan di pasarean belakang Masjid Jami’.”</p>
            </div>
        </GuestLayout>
    );
}
