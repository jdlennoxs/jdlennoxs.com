import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import hydrate from 'next-mdx-remote/hydrate'
import { MdxRemote } from 'next-mdx-remote/types'
import { Box, CodeBlock, Stack } from '../../components/components'

import { getAllPostSlugs, getPostData } from '../../lib/post-service'

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
  const content = hydrate(postData.source, {
    components: {
      code: CodeBlock,
    },
  })
  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>

      <Box tw='max-w-4xl m-auto p-6 font-serif' >
        <header>
          <nav>
            <Link href="/">
              <a>
                <span role="img" aria-label="back">
                  👈
              </span>{' '}
              Go back home
            </a>
            </Link>
          </nav>
        </header>
        <Stack>
          <div className="post-header">
            <h1>{postData.title}</h1>
            {postData.description && <p className="description">{postData.description}</p>}
          </div>
          <div tw="flex">
            <main>{content}</main>
            <div tw='w-96'></div>
          </div>
        </Stack>

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
      </Box>
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
