import { useAppContext } from "../Context/AppContext";
import styles from "./social.module.css";

export default function Social() {
  const device = useAppContext();
  return (
    <div className={device == 'lg' ? styles.verticalAlign : styles.horizontalAlign}>
      <a
        href="https://www.linkedin.com/in/shubhamjawandhiya/"
        target="_blank"
        className={styles.mediaImg}
      >
        <img src="/images/linkedin.svg" height={20} />
      </a>
      <a href="https://github.com/ShubhamRJ" target="_blank">
        <img src="/images/github.svg" height={20} />
      </a>
      <a href="https://twitter.com/ShubhamRJ28" target="_blank">
        <img src="/images/twitter.svg" height={20} />
      </a>
      <div title="Mail to: shubhamjawandhiya304@gmail.com">
        <img src="/images/gmail.svg" height={20} />
      </div>
      <a
        href="https://stackoverflow.com/users/8352271/shubham-jawandhiya"
        target="_blank"
      >
        <img src="/images/stack-overflow.svg" height={20} />
      </a>
    </div>
  );
}
