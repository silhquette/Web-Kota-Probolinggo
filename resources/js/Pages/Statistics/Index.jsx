//import React
import React from "react";

//import layout
import GuestLayout from "../../Layouts/GuestLayout";

//import Link
import { Link } from "@inertiajs/inertia-react";

export default function StatisticIndex({ statistics, session }) {
    console.log(statistics);

    return (
        <GuestLayout>
            <h1 className="text-3xl font-extrabold max-w-[1440px] mx-auto my-8">
                Selutuh Berita
            </h1>
            <div className="grid grid-cols-4 gap-12 text-center max-w-[1440px] mx-auto">
                {/* Card */}
                {statistics.map((statistics, index) => (
                    <a href={statistics.link} rel="noopener noreferrer" target="_blank" key={index} className="flex flex-col gap-2 hover:text-blue-700">
                        <p>{statistics.name}</p>
                    </a>
                ))}
            </div>
        </GuestLayout>
    );
}
