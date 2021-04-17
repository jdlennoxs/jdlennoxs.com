import Head from 'next/head'
import Link from 'next/link'
import tw, { styled } from 'twin.macro'
import { getSortedPostsData } from '../lib/post-service'
import { GetStaticProps } from 'next'

const StyledHeader = styled.h1`
    ${tw`font-sans`}
`

const StyledMono = styled.h1`
    ${tw`font-mono text-3xl`}
`

const StyledText = styled.h1`
    ${tw`font-serif text-3xl`}
`

export default function Home({
    allPostsData,
}: {
    allPostsData: {
        date: string
        title: string
        description: string
        slug: string
    }[]
}) {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <StyledText>
                    <i>Some title of something</i>
                </StyledText>
                <StyledMono>PROJECT</StyledMono>
                <StyledHeader>
                    Welcome to <a href="https://nextjs.org">jdlennoxs!</a>
                </StyledHeader>

                <p>
                    Get started by editing <code>pages/index.js</code>
                </p>

                <ul>
                    {allPostsData.map(({ slug, date, title }) => (
                        <li key={slug}>
                            <Link as={`/posts/${slug}`} href={`/posts/[slug]`}>
                                <a>{title}</a>
                            </Link>
                            {date}
                        </li>
                    ))}
                </ul>
            </main>

            <footer>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by <img src="/vercel.svg" alt="Vercel Logo" />
                </a>
            </footer>
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const allPostsData = getSortedPostsData()
    return {
        props: { allPostsData },
    }
}
