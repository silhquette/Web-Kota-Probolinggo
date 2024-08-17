//import React
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

//import layout
import GuestLayout from "../../Layouts/GuestLayout";

//import Link
import { Head, Link, useForm } from "@inertiajs/react";

//import card
import ArticleCard from "@/Components/ArticleCard";

export default function ArticleIndex({ articles }) {
    const [temp, setTemp] = useState([]);
    const [query, setQuery] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Tangkap query string dari URL
        var queryString = window.location.search;
        // Buat objek URLSearchParams dari query string
        var urlParams = new URLSearchParams(queryString);
        // Ambil nilai parameter 'query'
        var query = urlParams.get('query');

        if (query) {
                setLoading(true)
                // Fetch data artikel berdasarkan query
                fetch(`http://127.0.0.1:8000/api/articles?query=${query}`)
                    .then(response => response.json())
                    .then(data => {
                        setTemp(data);
                        setLoading(false);
                    })
                    .catch(error => console.error('Error fetching articles:', error));
        } else {
            setLoading(false)
        }
    }, []);

    // update articles
    articles = temp;
    console.log(temp);

    return (
        <GuestLayout>
            <Head title="Berita" />

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center max-w-[1440px] mx-auto mt-12 mb-8 px-6">
                {query ? (
                    <h1 className="text-4xl font-extrabold">Seluruh Berita</h1>
                ) : (
                    <h1 className="text-4xl font-extrabold">Hasil Pencarian "{query}"</h1>
                )}
                {/* <Link href="" className="flex gap-2 text-blue-700 font-semibold h-fit" >Lihat lebih banyak<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.5"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M13 18l6 -6" /><path d="M13 6l6 6" /></svg></Link> */}
            </div>
            {/* Loading */}
            {loading && (<p className="text-center text-lg">Loading...</p>)}
            {/* Card */}
            {articles.length ? (
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-[1440px] mx-auto px-6">
                    {articles.map((article, index) => (
                        <ArticleCard article={article} index={index} />
                    ))}
                </div>
            ) : (
                !loading && (<p className="text-center text-lg">Berita tidak ditemukan.</p>)
            )}
        </GuestLayout>
    );
}
