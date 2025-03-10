import {DUMMY_NEWS} from '@/const/data';
import Image from 'next/image';
import {notFound} from 'next/navigation';

export default async function NewsDetailPage({params}) {
    const {slug} = await params;
    const article = DUMMY_NEWS.find(article => article.slug === slug);

    if (!article) notFound();

    const {title, content, date, image} = article;

    return (
        <article className="news-article">
            <header>
                <div className="news-article-img">
                    <Image src={`/images/news/${image}`} alt={title} fill={true} />
                </div>
                <h1>{title}</h1>
                <time dateTime={date}>{date}</time>
            </header>
            <p>{content}</p>
        </article>
    );
}
