import { Button, Card, Grid, Link, Row, Text } from "@nextui-org/react";
import Image from "next/image";
import { useAppContext } from "../Context/AppContext";
import GradientText from "../GradientText/GradientText";
import styles from "./projects.module.css";

export const tagTitles = {
  GA: "Genetic Algorithm",
  NLP: "Natural Language Processing",
  TS: "TypeScript",
  GKE: "Google Kubernetes Engine",
  GCS: "Google Cloud Storage",
};

const list = [
  {
    title: "Fault-tolerant Distributed Key Value Store (Raft consensus)",
    description:
      "Distributed, fault-tolerant and sharded key-value store similar to Google Spanner with transaction support (OCC, 2PL, 2PC) written in C++. (Private Repo)",
    tags: ["Distributed", "KV Store", "Raft", "C++"],
    link: "",
  },
  {
    title: "Performance Evaluation of Credit CPU Scheduler in XEN",
    description:
      "Evaluation of Credit CPU Scheduler in XEN hypervisor for performance and fairness by varying domain weights.",
    tags: ["Xen", "Advanced OS", "Hypervisor"],
    link: "https://drive.google.com/file/d/1fuu570AeeBp1XRQ_CSdSItKdH2AioRRh/view",
  },
  {
    title: "Dialogue Summarization – PyTorch, LLMs",
    description: "Experimented with pretrained FLAN-T5 model on DialogSum dataset and ompared the performance of zero-shot, one-shot and few-shot inference dialogue summarization task.",
    tags: ["NLP", "Pytorch", "Python"],
    link: "https://github.com/ShubhamRJ/NLP-Practice/blob/main/Coursera%20-%20DeepLearn.ai%20-%20Generative%20AI%20with%20LLMs/Lab_1_summarize_dialogue.ipynb"
  },
  {
    title: "Author Sentiment Analysis",
    description:
      "Project to build models for the Author Sentiment Analysis Task [Mohaddeseh et. al., 2019]",
    tags: ["NLP", "Pytorch", "Python"],
    link: "https://github.com/ShubhamRJ/Author-Sentiment-Analysis",
  },
  {
    title: "Satellite Image Super-resolution",
    description: "Super-resolution of low-cost low-quality satellite images using pre-trained GANs and CNNs. Compared using number of SIFT features found.",
    tags: ["CV", "GAN", "CNN", "Python"],
    link: "https://github.com/yashodeepm/super-resolution",
  },
  {
    title: "Text clustering optimization",
    description:
      "Comparing evolutionary optimization algorithms for text clustering task using K-Means algorithm",
    tags: ["Data mining", "Text", "Python", "KMeans", "GA"],
    link: "https://github.com/ShubhamRJ/Text-Mining",
  },
  {
    title: "Fingerprint Recognition System",
    description:
      "One shot fingerprint recognition using Siamese CNN Architecture.",
    tags: ["CV", "Neural Networks", "Tensorflow", "Python"],
    link: "https://github.com/ShubhamRJ/Fingerprint-Recognition-using-Siamese-Network",
  },
  {
    title: "Personal Website",
    description:
      "Personal website to showcase my projects and work. Do have a look!",
    tags: ["NextJS", "NextUI", "JS", "TS", "CSS", "HTML"],
    link: "https://github.com/ShubhamRJ/personal-portfolio",
  },
  {
    title: "Ambulance Alerting System",
    description:
      "System to alert the citizens in the path and direction of a deployed ambulance to make way.",
    tags: ["Python", "Flask", "JavaScript", "Android"],
    link: "https://github.com/ShubhamRJ/Hack_Death_Troopers",
  },
  {
    title: "Tourist",
    description:
      "A learning full-stack project for listing tourist places accross the world.",
    tags: ["JS", "ExpressJS", "MongoDB", "NodeJS", "PassportJS"],
    link: "https://github.com/ShubhamRJ/Tourist",
  },
];

export default function Projects() {
  const device = useAppContext();
  return (
    <div id="projects" className={styles.projects}>
      <GradientText h2 size={device == "lg" ? "$6xl" : "4xl"} text="Projects" />
      <Grid.Container
        gap={2}
        justify="flex-start"
        className={styles.projectCard}
      >
        {list.map((item, index) => (
          <Grid xs={12} sm={4} key={item.title} className={styles.gridCard}>
            <Card css={{ p: "$6", mw: "400px" }} isHoverable role="contentinfo">
              <Card.Header className={styles.cardHeader}>
                <Grid.Container css={{ pl: "$6" }}>
                  <Grid xs={12}>
                    <Text h4 css={{ lineHeight: "$xs" }} style={{ margin: 0 }}>
                      {item.title}
                    </Text>
                  </Grid>
                </Grid.Container>
                <Link
                  //   icon
                  color="primary"
                  target="_blank"
                  href={item.link}
                >
                  <Image
                    src="/images/github.svg"
                    height={device == "lg" ? 30 : 20}
                    width={device == "lg" ? 30 : 20}
                    alt="Github"
                  />
                </Link>
              </Card.Header>
              <Card.Body css={{ py: "$2" }} className={styles.cardBody}>
                <div className={styles.tagGroup}>
                  {item.tags.map((tag) => (
                    <Button
                      key={tag}
                      className={styles.tagButton}
                      flat
                      size="xs"
                      borderWeight="light"
                      title={tagTitles[tag]}
                    >
                      <GradientText size="$xs" text={tag} />
                    </Button>
                  ))}
                </div>
                <Text className={styles.mainText} h5 weight="normal">
                  {item.description}
                </Text>
              </Card.Body>
              <Card.Footer></Card.Footer>
            </Card>
          </Grid>
        ))}
      </Grid.Container>
    </div>
  );
}
