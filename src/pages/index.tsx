import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Button, Box, Stack, Footer } from '../components/components'

import { getSortedPostsData } from '../lib/post-service'

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
        <Box tw='max-w-4xl mx-auto my-2 px-2 sm:px-6 lg:px-8'>

          <Box tw='h-96' />

          <Stack >
            <p tw='font-serif'>
              Get started by editing <code>pages/index.js</code>

            </p>
            <p tw='font-serif' ><i>Almost before we knew it</i></p>
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
          </Stack>
        </Box>
        <Footer />
      </main>

    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: { allPostsData },
  }
}
