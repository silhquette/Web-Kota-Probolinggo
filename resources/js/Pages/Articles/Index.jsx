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

export default function ArticleIndex({ latest, categories, session }) {

    return (
        <GuestLayout>
            <Head title="Berita" />

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center max-w-[1440px] mx-auto mt-12 mb-8 px-6">
                <h1 className="text-4xl font-extrabold">Berita Terbaru</h1>
                {/* <Link href="" className="flex gap-2 text-blue-700 font-semibold h-fit" >Lihat lebih banyak<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.5"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M13 18l6 -6" /><path d="M13 6l6 6" /></svg></Link> */}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-[1440px] mx-auto">
                {/* Card */}
                {latest.map((article, index) => (
                    <ArticleCard article={article} index={index} />
                ))}
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center max-w-[1440px] mx-auto mt-12 mb-8">
                <h1 className="text-4xl font-extrabold">Disarankan Penulis</h1>
                {/* <Link href="" className="flex gap-2 text-blue-700 font-semibold h-fit" >Lihat lebih banyak<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.5"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M13 18l6 -6" /><path d="M13 6l6 6" /></svg></Link> */}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-[1440px] mx-auto">
                {/* Card */}
                <ArticleCard
                    article={latest[0]}
                    ImageHeight="full"
                    className="row-span-2"
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

            <div className="grid grid-cols-2 max-w-[1440px] gap-8 mx-auto my-12">
                {categories.slice(0, 2).map((category, index) => (
                    <div className="flex flex-col" key={index}>
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center my-8">
                            <h1 className="text-4xl font-extrabold">
                                {category.name}
                            </h1>
                            <Link
                                href=""
                                className="flex gap-2 text-blue-700 font-semibold h-fit"
                            >
                                Lihat lebih banyak
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right"
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                    />
                                    <path d="M5 12l14 0" />
                                    <path d="M13 18l6 -6" />
                                    <path d="M13 6l6 6" />
                                </svg>
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Card */}
                            {category.articles
                                .slice(0, 2)
                                .map((article, index) => (
                                    <ArticleCard
                                        article={article}
                                        index={index}
                                        category={false}
                                    />
                                ))}
                        </div>
                    </div>
                ))}
            </div>
        </GuestLayout>
    );
}
