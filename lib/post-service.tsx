import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import renderToString from 'next-mdx-remote/render-to-string'
import { postFilePaths, POSTS_PATH } from './mdx-utils'

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
    // a: CustomLink,
    // It also works with dynamically-imported components, which is especially
    // useful for conditionally loading components for certain routes.
    // See the notes in README.md for more details.
    // TestComponent: dynamic(() => import('../../components/TestComponent')),
}

export function getSortedPostsData() {
    // Get file names under /posts
    const allPostsData = postFilePaths.map((filePath) => {
        const slug = filePath.replace(/\.mdx?$/, '')
        // Read markdown file as string
        const fullPath = path.join(POSTS_PATH, filePath)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents)

        // Combine the data with the id
        return {
            slug,
            ...(matterResult.data as { date: string; title: string }),
        }
    })
    // Sort posts by date
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1
        } else {
            return -1
        }
    })
}

export function getAllPostSlugs() {
    return (
        postFilePaths
            // Remove file extensions for page paths
            .map((path) => path.replace(/\.mdx?$/, ''))
            // Map the path into the static paths object required by Next.js
            .map((slug) => ({ params: { slug } }))
    )
}

export async function getPostData(slug) {
    const fullPath = path.join(POSTS_PATH, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const { content, data } = matter(fileContents)

    const mdxSource = await renderToString(content, {
        components,
        // Optionally pass remark/rehype plugins
        mdxOptions: {
            remarkPlugins: [],
            rehypePlugins: [],
        },
        scope: data,
    })

    // Combine the data with the id and contentHtml
    return {
        slug,
        source: mdxSource,
        ...(data as { date: string; title: string; description: string }),
    }
}
