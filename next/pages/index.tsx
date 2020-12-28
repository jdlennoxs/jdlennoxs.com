import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
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
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <StyledText>
                    <i>Some title of something</i>
                </StyledText>
                <StyledMono>PROJECT</StyledMono>
                <StyledHeader className={styles.title}>
                    Welcome to <a href="https://nextjs.org">jdlennoxs!</a>
                </StyledHeader>

                <p className={styles.description}>
                    Get started by editing <code className={styles.code}>pages/index.js</code>
                </p>

                <div className={styles.grid}>
                    <a href="https://nextjs.org/docs" className={styles.card}>
                        <h3>Documentation &rarr;</h3>
                        <StyledText>There's so much more I wish I could have included.</StyledText>
                    </a>

                    <a href="https://nextjs.org/learn" className={styles.card}>
                        <h3>Learn &rarr;</h3>
                        <p>Learn about Next.js in an interactive course with quizzes!</p>
                    </a>

                    <a href="https://github.com/vercel/next.js/tree/master/examples" className={styles.card}>
                        <h3>Examples &rarr;</h3>
                        <p>Discover and deploy boilerplate example Next.js projects.</p>
                    </a>

                    <a
                        href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        className={styles.card}
                    >
                        <h3>Deploy &rarr;</h3>
                        <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
                    </a>
                </div>
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

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
                </a>
            </footer>
        </div>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const allPostsData = getSortedPostsData()
    return {
        props: { allPostsData },
    }
}
