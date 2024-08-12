//import React
import React from "react";

//import layout
import GuestLayout from "../../Layouts/GuestLayout";

//import Link
import { Head, Link, useForm } from "@inertiajs/react";

//import card
import ArticleCard from "@/Components/ArticleCard";

//import moment
import moment from "moment";

//import splide
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/core";

export default function ArticleIndex({ latest, session }) {
    const trophies = [
        "Inews 2023.png",
        "Infomatif 2022.png",
        "Informatif 2023.png",
        "KompasTV 2023.png",
        "Menuju Informatif 2020.png",
        "Menuju Informatif 2021.png",
        "Penyedia Informasi Berkala 2021.png",
    ];

    const informations = [
        {
            image: '2.jpg',
            title: 'Daftar Informasi Publik',
            desc: 'Daftar Informasi Publik Pemerintah Kota Madiun sesuai dengan PERKI Nomor 1 Tahun 2021 tentang Standar Layanan Informasi Publik.',
            link: 'https://ppid.madiunkota.go.id/daftar/informasipublik'
        },
        {
            image: '3.jpg',
            title: 'Informasi Berkala',
            desc: 'Informasi berkala adalah informasi yang diperbaharui kemudian disediakan dandiumumkan kepada publik secara rutin atau berkala sekurang-kurangnya setiap 6 bulan sekali.',
            link: 'https://ppid.madiunkota.go.id/informasi/informasi-secara-berkala'
        },
        {
            image: '4.jpg',
            title: 'Informasi Serta Merta',
            desc: 'Informasi serta merta harus diumumkan kepada publik. Hal ini bertujuan agar masyarakat dapat mengantisipasi keadaan darurat atau bahaya sehingga dapat meminimalisir akibat/dampak buruk yang ditimbulkan.',
            link: 'https://ppid.madiunkota.go.id/informasi/informasi-serta-merta'
        },
        {
            image: '5.jpg',
            title: 'Informasi Setiap Saat',
            desc: 'Informasi yang harus disediakan oleh Badan Publik dan siap tersedia untuk bisa langsung diberikan kepada Pemohon Informasi Publik ketika terdapat permohonan terhadap Informasi Publik tersebut.',
            link: 'https://ppid.madiunkota.go.id/informasi/informasi-setiap-saat'
        },
        {
            image: '6.png',
            title: 'Informasi Dikecualikan Penetapan dan Proses Uji Konsekuensi',
            desc: 'Informasi yang tidak dapat diakses oleh pemohon informasi publik sebagaimana dimaksud dalam Undang – Undang Nomor 14 Tahun 2008 tentang Keterbukaan Informasi Publik.',
            link: 'https://ppid.madiunkota.go.id/informasi/informasi-dikecualikan'
        },
        
    ]

    const services = [
        {
            title: 'Form Permohonan Informasi',
            link: '',
            icon: <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.5"  stroke-linecap="round"  stroke-linejoin="round"  className="group-hover:text-blue-900 icon icon-tabler icons-tabler-outline icon-tabler-list-details"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M13 5h8" /><path d="M13 9h5" /><path d="M13 15h8" /><path d="M13 19h5" /><path d="M3 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M3 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /></svg>
        },
        {
            title: 'Tata Cara Permohonan',
            link: '',
            icon: <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.5"  stroke-linecap="round"  stroke-linejoin="round"  className="group-hover:text-blue-900 icon icon-tabler icons-tabler-outline icon-tabler-list-numbers"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M11 6h9" /><path d="M11 12h9" /><path d="M12 18h8" /><path d="M4 16a2 2 0 1 1 4 0c0 .591 -.5 1 -1 1.5l-3 2.5h4" /><path d="M6 10v-6l-2 2" /></svg>
        },
        {
            title: 'Kanal Pengaduan Resmi Informasi',
            link: '',
            icon: <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  className="group-hover:text-blue-900 icon icon-tabler icons-tabler-filled icon-tabler-shield-half"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M11.998 2l.032 .002l.086 .005a1 1 0 0 1 .342 .104l.105 .062l.097 .076l.016 .015l.247 .21a11 11 0 0 0 7.189 2.537l.342 -.01a1 1 0 0 1 1.005 .717a13 13 0 0 1 -9.208 16.25a1 1 0 0 1 -.502 0a13 13 0 0 1 -9.209 -16.25a1 1 0 0 1 1.005 -.717a11 11 0 0 0 7.791 -2.75l.046 -.036l.053 -.041a1 1 0 0 1 .217 -.112l.075 -.023l.036 -.01a1 1 0 0 1 .12 -.022l.086 -.005zm.002 2.296l-.176 .135a13 13 0 0 1 -7.288 2.572l-.264 .006l-.064 .31a11 11 0 0 0 1.064 7.175l.17 .314a11 11 0 0 0 6.49 5.136l.068 .019z" /></svg>
        },
        {
            title: 'Transparansi Anggaran',
            link: '',
            icon: <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.5"  stroke-linecap="round"  stroke-linejoin="round"  className="group-hover:text-blue-900 icon icon-tabler icons-tabler-outline icon-tabler-coins"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 14c0 1.657 2.686 3 6 3s6 -1.343 6 -3s-2.686 -3 -6 -3s-6 1.343 -6 3z" /><path d="M9 14v4c0 1.656 2.686 3 6 3s6 -1.344 6 -3v-4" /><path d="M3 6c0 1.072 1.144 2.062 3 2.598s4.144 .536 6 0c1.856 -.536 3 -1.526 3 -2.598c0 -1.072 -1.144 -2.062 -3 -2.598s-4.144 -.536 -6 0c-1.856 .536 -3 1.526 -3 2.598z" /><path d="M3 6v10c0 .888 .772 1.45 2 2" /><path d="M3 11c0 .888 .772 1.45 2 2" /></svg>
        },
    ]

    return (
        <GuestLayout>
            <Head title="Beranda" />

            <img src="/assets/images/Background/1.jpg" alt="Header Website" className="w-full md:h-[100vh] relative -top-6 md:-top-16 object-cover" />
            <div className="flex flex-col gap-6 max-w-[1440px] mx-auto px-6">
                <div>
                    <h1 className="text-3xl md:text-5xl font-serif text-center mt-4 font-semibold">
                        Layanan Permohonan Publik
                    </h1>
                    <h3 className="text-center text-gray-600 mt-2">
                        Deskripsi bagian akan diletakkan di sini
                    </h3>
                </div>
                <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-12">
                    {services.map((service) => (
                        <div className="basis-1/4 flex gap-2 items-center justify-center rounded-xl p-4 border hover:border-blue-700 group transition-all">
                            <div className="p-2 rounded-full bg-gray-100 group-hover:bg-blue-100 transition-all">{service.icon}</div>
                            <Link href={service.link}>{service.title}</Link>
                        </div>
                    ))}
                </div>

                <div>
                    <h1 className="text-3xl md:text-5xl font-serif text-center mt-4 font-semibold">
                        Daftar Informasi Publik
                    </h1>
                    <h3 className="text-center text-gray-600 mt-2">
                        Deskripsi bagian akan diletakkan di sini
                    </h3>
                </div>
                <div className="flex flex-col gap-8">
                    {informations.map((information, index) => (
                        <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-12 p-4 items-center justify-between group border border-transparent hover:border-gray-200 hover:shadow-lg rounded-xl">
                            <div className="text-3xl font-semibold basis-1/3">
                                {information.title}
                            </div>
                            <div className="basis-1/4 rounded-xl overflow-hidden">
                                <img
                                    src={"/assets/images/Background/" + information.image}
                                    alt=""
                                    className="h-32 w-full aspect-video object-cover group-hover:scale-110 transition-all"
                                />
                            </div>
                            <div className="text-gray-600 basis-1/3">
                                {information.desc}
                            </div>
                            <Link
                                href={information.link}
                                className="text-lg px-12 py-2 rounded-full border hover:bg-blue-50 transition-all border-blue-800 h-fit"
                            >
                                Jelajahi
                            </Link>
                        </div>
                    ))}
                </div>

                <div>
                    <h1 className="text-3xl md:text-5xl font-serif text-center mt-4 font-semibold">
                        Berita Terkini
                    </h1>
                    <h3 className="text-center text-gray-600 mt-2">
                        Dapatkan informasi terbaru dari artikel yang dirilis
                        resmi oleh PPID Kota Probolinggo
                    </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-[1440px] mx-auto">
                    {/* Card */}
                    <ArticleCard
                        article={latest[0]}
                        ImageHeight="full"
                        className="md:row-span-2"
                    />
                    <Link
                        href={"/article/" + latest[0].slug}
                        className="group relative flex flex-col md:col-span-2 md:row-span-2 gap-2 overflow-hidden rounded-xl transition-all"
                    >
                        <img
                            src="/assets/images/thumbnail.webp"
                            alt="thumbnail"
                            className="aspect-square object-cover group-hover:scale-110 transition-all"
                        />
                        <div className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-b to-black from-transparent"></div>
                        <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-2">
                            <div className=" flex gap-2 text-gray-400">
                                <caption>{latest[2].user.name}</caption> -{" "}
                                <caption>
                                    {moment(latest[2].created_at).fromNow()}
                                </caption>
                            </div>
                            <h2 className="group-hover:text-blue-400 text-2xl font-semibold font-serif text-white">
                                {latest[2].title.length > 40
                                    ? latest[2].title.substring(0, 40) + "..."
                                    : latest[2].title}
                            </h2>
                            <p className="text-gray-300 hidden md:inline">
                                {latest[2].excerpt.length > 155
                                    ? latest[2].excerpt.substring(0, 155) +
                                      "..."
                                    : latest[2].excerpt}
                            </p>
                            <div className="w-fit text-blue-400">
                                {latest[2].category.name}
                            </div>
                        </div>
                    </Link>
                    <ArticleCard
                        article={latest[2]}
                        ImageHeight="min"
                        excerpt={false}
                    />
                    <ArticleCard
                        article={latest[3]}
                        ImageHeight="min"
                        excerpt={false}
                    />
                </div>

                <div>
                    <h1 className="text-3xl md:text-5xl font-serif text-center mt-4 font-semibold">
                        Penghargaan
                    </h1>
                    <h3 className="text-center text-gray-600 mt-2">
                        Prestasi yang didapatkan oleh PPID Kota Probolinggo
                        dalam berbagai kategori
                    </h3>
                </div>
                <Splide
                    aria-label="My Favorite Images"
                    options={{
                        type: "loop",
                        focus: "center",
                        perPage: 4,
                        perMove: 1,
                        gap: 24,
                        loop: true,
                    }}
                >
                    {trophies.map((trophy) => (
                        <SplideSlide>
                            <div className="w-full rounded-xl overflow-hidden">
                                <img
                                    src={"/assets/images/trophies/" + trophy}
                                    className="hover:scale-105 transition-all    "
                                    alt="Image 2"
                                />
                            </div>
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </GuestLayout>
    );
}
