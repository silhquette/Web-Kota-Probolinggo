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
        <div key={index} className={"flex flex-col gap-2 " + className}>
            <img
                src="/assets/images/thumbnail.webp"
                alt="thumbnail"
                className={"object-cover rounded-xl " + getHeight()}
            />
            <div className="flex gap-2 text-gray-500">
                <caption>{article.user.name}</caption> -{" "}
                <caption>
                    {formatter.format(
                        Math.round(new Date(article.created_at) / 86400000),
                        "day"
                    )}
                </caption>
            </div>
            <h2 className="text-2xl font-semibold h-16 font-serif">
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
        </div>
    );
}
