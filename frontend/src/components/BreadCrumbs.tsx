import Link from "next/link";

type BreadCrumb = {
    title: string;
    url: string;
}
function BreadCrumbs({ items }: { items: BreadCrumb[] }) {
    return (
        <div className="breadcrumbs text-sm text-black shadow-2xl">
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        <Link href={item.url}>
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export { BreadCrumbs };