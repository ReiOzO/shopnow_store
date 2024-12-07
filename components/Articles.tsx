import { getArticles } from '@/lib/actions/actions'
import Image from 'next/image'
import Link from 'next/link'

const Articles = async () => {
    const articles = await getArticles()

    return (
        <div className='flex flex-col items-center gap-10 py-8 px-5'>
            <p className='text-heading1-bold'>Articles</p>
            {!articles || articles.length === 0 ? (
                <p className='text-body-bold'>No articles found</p>
            ) : (
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                    {articles.map((article: ArticleType) => (
                        <Link href={`/articles/${article._id}`} key={article._id}>
                            <Image
                                key={article._id}
                                src={article.image}
                                alt={article.title}
                                width={350}
                                height={200}
                                className='rounded-lg cursor-pointer' />
                        </Link>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Articles