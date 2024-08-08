//import React
import React from "react";

//import layout
import GuestLayout from "../../Layouts/GuestLayout";

//import Link
import { Head, Link, useForm } from "@inertiajs/react";

//import card
import ArticleCard from "@/Components/ArticleCard";

export default function ArticleIndex({ latest, session }) {

    return (
        <GuestLayout>
            <Head title="Beranda" />

            <div className="flex flex-col gap-4 max-w-[1440px] mx-auto">
                <div>
                    <h1 className="text-3xl md:text-5xl font-serif text-center mt-4 font-semibold">Berita Terkini</h1>
                    <h3 className="text-center text-gray-600 mt-2">Dapatkan informasi terbaru dari artikel yang dirilis resmi oleh PPID Kota Probolinggo</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-[1440px] mx-auto">
                    {/* Card */}
                    {latest.map((article, index) => (
                        <ArticleCard article={article} index={index} />
                    ))}
                </div>
            </div>
        </GuestLayout>
    );
}