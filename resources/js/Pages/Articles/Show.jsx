//import React
import React from "react";

//import layout
import GuestLayout from "../../Layouts/GuestLayout";

//import Link
import { Head, Link, useForm } from "@inertiajs/react";

//import card
import ArticleCard from "@/Components/ArticleCard";

//import date time format
import { format, parseISO } from "date-fns";
import { id } from "date-fns/locale";

import './../../../css/custom-styles.css'

export default function ArticleIndex({ article, categories, latest, session }) {
    const transformHtml = (html) => {
        // Menambahkan kelas kustom pada elemen HTML
        return html
            .replace(/<h1>/g, '<h1 class="custom-h1">')
            .replace(/<h2>/g, '<h2 class="custom-h2">')
            .replace(/<h3>/g, '<h3 class="custom-h3">')
            .replace(/<p>/g, '<p class="custom-p">')
            .replace(/<a /g, '<a class="custom-a "')
            .replace(/<ul>/g, '<ul class="custom-ul">')
            .replace(/<ol>/g, '<ol class="custom-ol">')
            .replace(/<blockquote>/g, '<blockquote class="custom-blockquote">')
            .replace(/<img /g, '<img class="custom-img "')
            .replace(/<table>/g, '<table class="custom-table">');
    };

    return (
        <GuestLayout>
            <Head title="Berita" />

            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-16 max-w-full md:max-w-[1440px] mx-auto md:mt-16 px-6">
                <article className="col-span-2 justify-start items-stretch flex flex-col gap-4 text-justify">
                    <img
                        src="/assets/images/gambaran-umum-1.jpg"
                        alt="header berita"
                        className="rounded-xl"
                    />
                    <div className="flex flex-col md:flex-row gap-2 md:gap-6">
                        <div className="flex gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-blue-700 icon icon-tabler icons-tabler-outline icon-tabler-message"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M8 9h8" />
                                <path d="M8 13h6" />
                                <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z" />
                            </svg>
                            <span>{article.category.name}</span>
                        </div>
                        <div className="flex gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-blue-700 icon icon-tabler icons-tabler-outline icon-tabler-calendar"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" />
                                <path d="M16 3v4" />
                                <path d="M8 3v4" />
                                <path d="M4 11h16" />
                                <path d="M11 15h1" />
                                <path d="M12 15v3" />
                            </svg>
                            <span>
                                {format(
                                    parseISO(article.created_at),
                                    "d MMMM yyyy",
                                    { locale: id }
                                )}
                            </span>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold">
                            {article.title}
                        </h1>
                        <p className="text-gray-500 flex items-center gap-2 mt-1">
                            oleh <span className="font-semibold">{article.user.name}</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="icon icon-tabler icons-tabler-filled icon-tabler-rosette-discount-check text-blue-700"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M12.01 2.011a3.2 3.2 0 0 1 2.113 .797l.154 .145l.698 .698a1.2 1.2 0 0 0 .71 .341l.135 .008h1a3.2 3.2 0 0 1 3.195 3.018l.005 .182v1c0 .27 .092 .533 .258 .743l.09 .1l.697 .698a3.2 3.2 0 0 1 .147 4.382l-.145 .154l-.698 .698a1.2 1.2 0 0 0 -.341 .71l-.008 .135v1a3.2 3.2 0 0 1 -3.018 3.195l-.182 .005h-1a1.2 1.2 0 0 0 -.743 .258l-.1 .09l-.698 .697a3.2 3.2 0 0 1 -4.382 .147l-.154 -.145l-.698 -.698a1.2 1.2 0 0 0 -.71 -.341l-.135 -.008h-1a3.2 3.2 0 0 1 -3.195 -3.018l-.005 -.182v-1a1.2 1.2 0 0 0 -.258 -.743l-.09 -.1l-.697 -.698a3.2 3.2 0 0 1 -.147 -4.382l.145 -.154l.698 -.698a1.2 1.2 0 0 0 .341 -.71l.008 -.135v-1l.005 -.182a3.2 3.2 0 0 1 3.013 -3.013l.182 -.005h1a1.2 1.2 0 0 0 .743 -.258l.1 -.09l.698 -.697a3.2 3.2 0 0 1 2.269 -.944zm3.697 7.282a1 1 0 0 0 -1.414 0l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l2 2l.094 .083a1 1 0 0 0 1.32 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" />
                            </svg>
                        </p>
                    </div>
                    <hr />

                    {/* Body */}
                    <div dangerouslySetInnerHTML={{ __html: transformHtml(article.body) }} className="custom-prose"></div>
                </article>

                <aside className="flex flex-col gap-8 mt-8 md:mt-0">
                    <div className="p-8 border shadow-lg shadow-gray-100 rounded-xl flex flex-col gap-4 h-fit">
                        <h2 className="text-xl font-semibold">
                            Kategori berita lainnya
                        </h2>
                        <hr />
                        <div className="flex flex-wrap gap-4">
                            {categories.map((category) => (
                                <div className="py-2 px-4 rounded-lg bg-blue-50 text-blue-800">
                                    {category.name +
                                        " (" +
                                        category.articles.length +
                                        ")"}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="p-8 border shadow-lg shadow-gray-100 rounded-xl flex flex-col gap-4 h-fit">
                        <h2 className="text-xl font-semibold">
                            Berita terbaru
                        </h2>
                        <hr />
                        <div className="flex flex-col gap-6">
                            {latest.map((article) => (
                                <div className="flex w-full gap-4">
                                    <img src="/assets/images/thumbnail.webp" alt="thumbnail" className="h-28 aspect-square object-cover rounded-lg" />
                                    <div className="flex flex-col">
                                        <h3 className="text-lg font-semibold">
                                            {article.title.slice(0,45)}...
                                        </h3>
                                        <p className="text-gray-500 hidden md:inline">
                                            {article.excerpt.slice(0,25)}...
                                        </p>
                                        <caption className="flex gap-2 mt-1">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="text-blue-700 icon icon-tabler icons-tabler-outline icon-tabler-calendar"
                                            >
                                                <path
                                                    stroke="none"
                                                    d="M0 0h24v24H0z"
                                                    fill="none"
                                                />
                                                <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" />
                                                <path d="M16 3v4" />
                                                <path d="M8 3v4" />
                                                <path d="M4 11h16" />
                                                <path d="M11 15h1" />
                                                <path d="M12 15v3" />
                                            </svg>
                                            <span>
                                                {format(
                                                    parseISO(article.created_at),
                                                    "d MMMM yyyy",
                                                    { locale: id }
                                                )}
                                            </span>
                                        </caption>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </aside>
            </div>
        </GuestLayout>
    );
}
