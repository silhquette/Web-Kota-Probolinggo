//import React
import React from "react";

//import layout
import GuestLayout from "../../Layouts/GuestLayout";

//import Link
import { Head, Link, useForm } from "@inertiajs/react";

//import card
import ArticleCard from "@/Components/ArticleCard";

//import moment
import moment from 'moment';

//import splide
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/core';

export default function ArticleIndex({ latest, session }) {
    const trophies = [
        'Inews 2023.png',
        'Infomatif 2022.png',
        'Informatif 2023.png',
        'KompasTV 2023.png',
        'Menuju Informatif 2020.png',
        'Menuju Informatif 2021.png',
        'Penyedia Informasi Berkala 2021.png'
    ];

    return (
        <GuestLayout>
            <Head title="Beranda" />

            <div className="flex flex-col gap-6 max-w-[1440px] mx-auto">
                <div>
                    <h1 className="text-3xl md:text-5xl font-serif text-center mt-4 font-semibold">
                        Daftar Informasi Publik
                    </h1>
                    <h3 className="text-center text-gray-600 mt-2">
                        Deskripsi bagian akan diletakkan di sini
                    </h3>
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
                    <Link href={'/article/' + latest[0].slug} className="group relative flex flex-col md:col-span-2 md:row-span-2 gap-2 overflow-hidden rounded-xl transition-all">
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
                        Prestasi yang didapatkan oleh PPID Kota Probolinggo dalam berbagai kategori
                    </h3>
                </div>
                <Splide aria-label="My Favorite Images" options={{ type: 'loop', focus: 'center', perPage: 4, perMove: 1, gap:24, loop: true }}>
                    {trophies.map((trophy) => (
                        <SplideSlide>
                            <div className="w-full rounded-xl overflow-hidden">
                            <img src={"/assets/images/trophies/" + trophy} className="hover:scale-105 transition-all    " alt="Image 2"/>
                            </div>
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </GuestLayout>
    );
}
