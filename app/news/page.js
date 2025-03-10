import {DUMMY_NEWS} from '@/const/data';
import Image from 'next/image';
import Link from 'next/link';

export default function NewsPage() {
    return (
        <>
            <h1>News Page</h1>
            <ul className="news-list">
                {DUMMY_NEWS.map(({id, slug, title, image}) => (
                    <li key={id}>
                        <Link href={`/news/${slug}`}>
                            <Image src={`/images/news/${image}`} alt={title} width={1024} height={1024} />
                            {title}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
}
