import Head from "next/head";
import styles from "./layout.module.css";

export const siteTitle = "Shubham Jawandhiya";
const description = `Hi! I'am Shubham, a 24. y/o Software Engineer. 
I love to solve problems and build products & experiences. Currently pursuing MS in Computer Science at Stony Brook University, NY.`;

export default function Layout({ children }) {
  return (
    <div className={styles.body}>
      <Head>
        <title>ShubhamRJ</title>
        <meta name="description" content={description} />
        <meta
          property="og:image"
          content={`https://github.com/ShubhamRJ/personal-portfolio/blob/main/public/images/Website.png`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="og:url" content="https://shubhamjawandhiya.vercel.app/" />
        <meta name="og:description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content={siteTitle} />
        <script data-name="BMC-Widget" data-cfasync="false" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="shubhamjawandhiya" data-description="Support me on Buy me a coffee!" data-message="" data-color="#00A2F5" data-position="Right" data-x_margin="18" data-y_margin="18"></script>
      </Head>
      <main className={styles.body}>{children}</main>
    </div>
  );
}
