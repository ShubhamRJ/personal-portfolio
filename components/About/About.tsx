import { Link, Text } from "@nextui-org/react";
import { useAppContext } from "../Context/AppContext";
import GradientText from "../GradientText/GradientText";
import styles from "./about.module.css";

export default function About() {
  const device = useAppContext();
  return (
    <div id="about" className={styles.about}>
      <GradientText h2 size={device == "lg" ? "$6xl" : "4xl"} text="About Me" />
      <br />
      <Text h4 css={{ color: "$gray800" }} weight="light">
        Hey there! I am junior software engineer based in NY, United States.
        Currently a graduate student at{" "}
        <Link href="https://www.stonybrook.edu/">
          <GradientText
            h4
            weight="light"
            text="Stony Brook University."
          ></GradientText>
        </Link>
        <br />
        Generalist software engineer experimenting and finding my niche. 
        <br />
        Extremely curious by nature, loves to explore new products and ideas. Continuously learning something new.
        <br />
        My main focus currently is in Natural Language Processing research and
        learning Distributed Systems.
        <br />
        I have a working knowledge of following technologies:
        <br />{" "}
      </Text>
      <div className={styles.listdiv}>
        <GradientText text="&#8811; Languages: &nbsp;" h4 />
        <Text h5 css={{ color: "$gray800" }} weight="light">
          Python3, JavaScript, TypeScript, C, C++, HTML, CSS, Golang
        </Text>
      </div>
      <div className={styles.listdiv}>
        <GradientText text="&#8811; Tools: &nbsp;" h4 />
        <Text h5 css={{ color: "$gray800" }} weight="light">
          GCP (GCS, GKE, Cloud Run), Docker, Webpack, Spinnaker, Kibana,
          Grafana, Akamai, SonarQube
        </Text>
      </div>
      <div className={styles.listdiv}>
        <GradientText text="&#8811; Frameworks: &nbsp;" h4 />
        <Text h5 css={{ color: "$gray800" }} weight="light">
          ReactJS, NextJS, Flask, Jest, Pytest
        </Text>
      </div>
      <br />
      <div className={styles.listdiv}>
        <GradientText text="I enjoy &nbsp;" h3 weight="light" />
        <Text h4 css={{ color: "$gray800" }} weight="light">
          F1 🏎️ &nbsp; Reading 📚 &nbsp; Marvel 🤖 &nbsp; Photography 📷 &nbsp;
          Dogs 🐶 &nbsp; Running 🏃‍♂️ &nbsp; Treks ⛰️ etc.
        </Text>
      </div>
    </div>
  );
}
