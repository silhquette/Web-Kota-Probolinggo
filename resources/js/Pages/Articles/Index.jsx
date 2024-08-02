//import React
import React from "react";

//import layout
import GuestLayout from "../../Layouts/GuestLayout";

//import Link
import { Link } from "@inertiajs/inertia-react";

export default function ArticleIndex({ articles, session }) {
  const formatter = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
  // console.log(articles);

  return (
    <GuestLayout>
      <h1 className="text-3xl font-extrabold max-w-[1440px] mx-auto my-8">
        Selutuh Berita
      </h1>
      <div className="grid grid-cols-4 gap-8 max-w-[1440px] mx-auto">
        {/* Card */}
        {articles.map((articles, index) => (
          <div key={index} className="flex flex-col gap-2">
            <img
              src="/assets/images/thumbnail.webp"
              alt="thumbnail"
              className="aspect-square rounded-xl"
            />
            <div className="flex gap-2 text-gray-500">
              <caption>{articles.user.name}</caption> -{" "}
              <caption>
                {formatter.format(
                  Math.round(
                    new Date(articles.created_at) / 86400000
                  ),
                  "day"
                )}
              </caption>
            </div>
            <h2 className="text-2xl font-bold h-16">
              {articles.title}
            </h2>
            <p>
              {articles.excerpt.length > 125
                ? articles.excerpt.substring(0, 125) + "..."
                : articles.excerpt}
            </p>
            <div className="py-1 px-4 w-fit bg-blue-100 rounded-full text-blue-700">
              {articles.category.name}
            </div>
          </div>
        ))}
      </div>
    </GuestLayout>
  );
}
