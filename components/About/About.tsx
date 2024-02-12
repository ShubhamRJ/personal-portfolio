import { Link, Text } from "@nextui-org/react";
import { useAppContext } from "../Context/AppContext";
import GradientText from "../GradientText/GradientText";
import styles from "./about.module.css";

const skills = {
  "Languages:": "Python3, JavaScript, TypeScript, C, C++, SQL, HTML, CSS",
  "Databases:": "MySQL, MongoDB, Firebase, CockroachDB, SingleStore VectorDB",
  "Web Technologies:": "NodeJS, ReactJS, NextJS, Flask, Jest, Pytest, Webpack",
  "AI Technologies:":
    "Pytorch, TensorFlow, NLTK, HuggingFace, LangChain, RAG, GCP VertexAI, AWS Sagemaker",
  "Tools:":
    "GCP, Docker, Kubernetes, Git, Spinnaker, Kibana, Grafana, Akamai CDN, SonarQube",
  "Theory:":
    "Distributed Systems, Natural Language Processing, Data Structures and Algorithms, Advanced OS, Databases",
};

export default function About() {
  const device = useAppContext();
  return (
    <div id="about" className={styles.about}>
      <GradientText h2 size={device == "lg" ? "$6xl" : "4xl"} text="About Me" />
      <br />
      <Text h4 css={{ color: "$gray700" }} weight="normal" size="$lg">
        Curious | Ideator | Perpetual Learner
        <br />
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
        I am continuously working on creating, evaluating and writing new ideas
        on my <a href="https://shubhamrj.github.io" target="_blank">personal blog</a>. I have a special knack for understanding the
        products & services from a customer's perspective and orienting my ideas
        and code accordingly. I lookout for challenges and learning
        opportunities from engineers around me.
        <br />
        I have experience with:
        <br />{" "}
      </Text>
      <table>
        <tbody>
          {Object.keys(skills).map((skill) => (
            <tr key={skill}>
              <td style={{ width: "30%" }}>
                <GradientText
                  className="skillName"
                  text={`≫ ${skill} `}
                  h4
                  weight="normal"
                  size="$lg"
                />
              </td>
              <td>
                {" "}
                <Text h5 css={{ color: "$gray700" }} weight="normal">
                  {skills[skill]}
                </Text>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
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
