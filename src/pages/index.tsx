import Head from 'next/head'
import { Inter as NextInter } from 'next/font/google'
import ArticleList from '@/components/articleList'

const inter = NextInter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head><title>Articles</title></Head>
      <main><ArticleList /></main>
    </>
  )
}
