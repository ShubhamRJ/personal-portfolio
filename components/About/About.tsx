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
      <Text h4 css={{ color: "$gray700" }} weight="normal" size="$lg">
        Curious | Ideator | Perpetual Learner
        <br />
        Hey there! I am junior software engineer based in NY, United States.
        Currently a graduate student at{" "}
        <Link href="https://www.stonybrook.edu/" target="_blank">
          <GradientText
            h4
            size="$lg"
            text="Stony Brook University."
          ></GradientText>
        </Link>
        <br />
        I am continuously working on creating, evaluating and writing new ideas on my personal blog. I have a special knack for understanding the products & services from a customer's perspective and orienting my ideas and code accordingly. I lookout for challenges and learning opportunities from engineers around me.
        <br />
        I have experience with:
        <br />{" "}
      </Text>
      <div className={styles.listdiv}>
        <GradientText
          text="&#8811; Languages: &nbsp;"
          h4
          weight="normal"
          size="$lg"
        />
        <Text h5 css={{ color: "$gray700" }} weight="normal">
          Python3, JavaScript, TypeScript, C, C++, SQL
        </Text>
      </div>
      <div className={styles.listdiv}>
        <GradientText
          text="&#8811; Tools: &nbsp;"
          h4
          weight="normal"
          size="$lg"
        />
        <Text h5 css={{ color: "$gray700" }} weight="normal">
          GCP (GCS, GKE, Cloud Run), Docker, Webpack, Spinnaker, Kibana,
          Grafana, Akamai, SonarQube
        </Text>
      </div>
      <div className={styles.listdiv}>
        <GradientText
          text="&#8811; Frameworks: &nbsp;"
          h4
          weight="normal"
          size="$lg"
        />
        <Text h5 css={{ color: "$gray700" }} weight="normal">
          ReactJS, NextJS, Flask, Jest, Pytest, Pytorch
        </Text>
      </div>
      <div className={styles.listdiv}>
        <GradientText
          text="&#8811; Theory: &nbsp;"
          h4
          weight="normal"
          size="$lg"
        />
        <Text h5 css={{ color: "$gray700" }} weight="normal">
          Natural Language Processing, Data Structures and
          Algorithms, Evolutionary Algorithms, Advanced OS, Databases
        </Text>
      </div>
      {/* {(device == "lg" || device == "md") && <br />}
      <div className={styles.listdiv}>
        <GradientText text="I enjoy &nbsp;" h4 weight="normal" />
        <Text h4 css={{ color: "$gray700" }} weight="normal" size="$lg">
          F1 🏎️ &nbsp; Reading 📚 &nbsp; Marvel 🤖 &nbsp; Photography 📷 &nbsp;
          Dogs 🐶 &nbsp; Running 🏃‍♂️ &nbsp; Treks ⛰️ etc.
        </Text>
      </div> */}
      <Text h4 css={{ color: "$gray700" }} weight="normal" size="$lg">
        Looking forward to travel more and meet new people! &nbsp; Always in for
        a chat so feel free to say hi 👋🏻
      </Text>
      {(device == "sm" || device == "xs") && (
        <>
          {" "}
          <br /> <br />
        </>
      )}
    </div>
  );
}
