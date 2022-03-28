import Head from 'next/head'
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import utilStyles from '../styles/utils.module.css'
import homeStyles from './index.module.css';

export async function getStaticProps () {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${homeStyles.main}`}>
        <p>Software Engineer . Travel Enthusiast . Loves to talk</p>
        <Link href='/post-list'>Blog</Link>
      </section>
    </Layout>
  )
}