import Head from 'next/head'
import Link from 'next/link'
import hydrate from 'next-mdx-remote/hydrate'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getAllPostSlugs, getPostData } from '../../lib/post-service'
import CodeBlock from '@component/code-block/index'
import { MdxRemote } from 'next-mdx-remote/types'

export default function PostPage({
    postData,
}: {
    postData: {
        title: string
        date: string
        description: string
        source: MdxRemote.Source
    }
}) {
    const content = hydrate(postData.source, { components: {
        code: CodeBlock
    } })
    return (
        <>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <header>
                <nav>
                    <Link href="/">
                        <a>👈 Go back home</a>
                    </Link>
                </nav>
            </header>
            <div className="post-header">
                <h1>{postData.title}</h1>
                {postData.description && <p className="description">{postData.description}</p>}
            </div>
            <main>{content}</main>

            <style jsx>{`
                .post-header h1 {
                    margin-bottom: 0;
                }
                .post-header {
                    margin-bottom: 2rem;
                }
                .description {
                    opacity: 0.6;
                }
            `}</style>
        </>
    )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const postData = await getPostData(params.slug as string)
    return {
        props: {
            postData,
        },
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostSlugs()
    return {
        paths,
        fallback: false,
    }
}
