import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import homeStyles from './index.module.css';

const subTitle = "Software Engineer";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <header>
        <h1 className={`${utilStyles.headingLg} ${homeStyles.title} ${homeStyles.headings}`}>{siteTitle}</h1>
        <h2 className={homeStyles.subtitle}>
          {subTitle} | Currently @
          <a href='https://lowes.co.in/' target="_blank">Lowe's India</a>
        </h2>
      </header>
      <div className={homeStyles.mediaLinks}>
        <a href='https://www.linkedin.com/in/shubhamjawandhiya/' target='_blank'>
          <img src='/images/linkedin.svg' height={25}  className={homeStyles.mediaImg} />
        </a>
        <a href='https://github.com/ShubhamRJ' target='_blank'>
          <img src='/images/github.svg' height={25}  className={homeStyles.mediaImg} />
        </a>
        <a href='https://twitter.com/ShubhamRJ28' target='_blank'>
          <img src='/images/twitter.svg' height={25}  className={homeStyles.mediaImg} />
        </a>
        <div title='Mail to: shubhamjawandhiya304@gmail.com'>
          <img src='/images/gmail.svg' height={25}  className={homeStyles.mediaImg} />
        </div>
        <a href='https://stackoverflow.com/users/8352271/shubham-jawandhiya' target='_blank'>
          <img src='/images/stack-overflow.svg' height={25}  className={homeStyles.mediaImg} />
        </a>
      </div>
      <div>
        <h2 className={`${homeStyles.headings} ${homeStyles.aboutMe}`}>About Me</h2>
        <p className={homeStyles.subtitle} style={{fontWeight: '200'}}>
          Hi! I'am Shubham, a 23 y/o Software Engineer. I love to solve problems and build products & experiences without limiting myself to a particular tech stack.
          Currently exploring Frontend Engineering at Lowe's India.
          Looking forward to sharing my knowledge via blog articles, conferences etc.
          <br />
          <br />
          Feel free to reach out and say Hi!
        </p>
      </div>
    </Layout>
  )
}