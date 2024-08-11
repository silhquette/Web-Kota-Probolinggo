//import time difference
import moment from 'moment';

//import link
import { Link } from '@inertiajs/react';

export default function ArticleCard({
    article,
    index = 0,
    ImageHeight = 'square',
    excerpt = true,
    category = true,
    className = '',
}) {
    const formatter = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

    let getHeight = () => {
        switch (ImageHeight) {
            case "square":
                return "aspect-square";

            case "full":
                return "h-full";

            case "min":
                return "h-[190px]";

            default:
                break;
        }
    };

    return (
        <Link href={'/article/' + article.slug} key={index} className={"group transition-all flex flex-col gap-2 " + className}>
            <div className={'overflow-hidden rounded-xl ' + getHeight()}>
                <img
                    src="/assets/images/thumbnail.webp"
                    alt="thumbnail"
                    className="h-full w-full object-cover transition-all group-hover:shadow-md group-hover:scale-110 group-hover:shadow-blue-100"
                />
            </div>
            <div className="flex gap-2 text-gray-500">
                <caption>{article.user.name}</caption> -{" "}
                <caption>
                    {moment(article.created_at).fromNow()}
                </caption>
            </div>
            <h2 className="group-hover:text-blue-800 text-2xl font-semibold md:h-16 font-serif">
                {article.title.length > 35
                    ? article.title.substring(0, 35) + "..."
                    : article.title}
            </h2>
            { excerpt && (
                <p>
                    {article.excerpt.length > 155
                        ? article.excerpt.substring(0, 155) + "..."
                        : article.excerpt}
                </p>
            )}
            { category && (
                <div className="py-1 px-4 w-fit bg-blue-100 rounded-full text-blue-700">
                    {article.category.name}
                </div>
            )}
        </Link>
    );
}
