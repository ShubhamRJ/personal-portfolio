import Image from "next/image";
import { useAppContext } from "../Context/AppContext";
import styles from "./social.module.css";

export default function Social() {
  const device = useAppContext();
  return (
    <div
      className={
        device == "lg" || device == "md"
          ? styles.verticalAlign
          : styles.horizontalAlign
      }
    >
      <a
        href="https://www.linkedin.com/in/shubhamjawandhiya/"
        target="_blank"
        className={styles.mediaImg}
      >
        <Image src="/images/linkedin.svg" height={20} width={20} alt="" />
      </a>
      <a href="https://github.com/ShubhamRJ" target="_blank">
        <Image src="/images/github.svg" height={20} width={20} alt="" />
      </a>
      <a href="https://twitter.com/ShubhamRJ28" target="_blank">
        <Image src="/images/twitter.svg" height={20} width={20} alt="" />
      </a>
      <a
        href="mailto:shubhamjawandhiya304@gmail.com"
        title="Mail to: shubhamjawandhiya304@gmail.com"
      >
        <Image src="/images/gmail.svg" height={20} width={20} alt="" />
      </a>
      <a
        href="https://stackoverflow.com/users/8352271/shubham-jawandhiya"
        target="_blank"
      >
        <Image src="/images/stack-overflow.svg" height={20} width={20}  alt="" />
      </a>
    </div>
  );
}
