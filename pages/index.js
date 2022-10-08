import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="w-full+70 background-image z+1 h-screen bg-center bg-no-repeat">
        <div className="flex h-screen w-full items-center justify-center bg-black bg-opacity-0 dark:bg-opacity-20">
          <div className="mx-4 text-center text-white">
            <h1 className="mb-4 text-9xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              MUA
            </h1>
            <h3 className="mb-12 text-6xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              Love, Play, Adventure, Together.
            </h3>
          </div>
        </div>
      </div>
    </>
  )
}
