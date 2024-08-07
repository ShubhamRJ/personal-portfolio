import { Button, Grid, Text } from "@nextui-org/react";
import Link from "next/link";
import { useState } from "react";
import { useAppContext } from "../Context/AppContext";
import GradientText from "../GradientText/GradientText";
import { tagTitles } from "../Projects/Projects";
import styles from "./work.module.css";

const companyContent = {
  "Microsoft": {
    name: "Microsoft Corporation",
    link: "https://microsoft.com",
    shortName: "Microsoft",
    duration: "August 2024 - Present",
    position: "Software Engineer II",
    description: [
      "Working on Azure DataCenter Platform Management Team."
    ],
    tags: [],
    awards: []
  },
  "SBU": {
    name: "Stony Brook University",
    link: "https://workflow.cs.stonybrook.edu/",
    shortName: "SBU",
    duration: "Jan 2023 - Dec 2023",
    position: "Software Engineer",
    description: [
      "Developed an application management system (in a team of 2) for automating departmental workflows in Stony Brook University's Computer Science department. This digitized 10+ paper/google doc-based workflows.",
      "Google OAuth2.0 integration for user authentication and authorization.",
      "Developed a RESTful API backend in NodeJS, ExpressJS and Firebase for handling CRUD operations.",
      "Implemented a custom email server using Postal for sending notifications to users.",
      "Google calendar integration for scheduling appointments and meetings.",
      "Nginx reverse proxy for routing requests to different services hosted on Cloud functions.",
      "Role-based access control for managing user permissions and roles.",
    ],
    tags: [
      "Firebase", 
      "Google Cloud Functions", 
      "ReactJS", 
      "NodeJS", 
      "ExpressJS", 
      "Webpack", 
      "Nginx", 
      "Docker", 
      "GCP", 
      "Git", 
      "Postal email server"
    ],
    awards: [],
  },
  "Lowe's": {
    name: "Lowe's Companies, Inc.",
    link: "https://lowes.com",
    shortName: "Lowe's",
    duration: "July 2020 - July 2022",
    position: "Software Engineer",
    description: [
      "Developed frontend experience for Product Details Page and Paint Configurators for Lowe’s Ecommerce website.",
      "Optimized CI/CD pipelines by reducing docker image size by 80% and build time by 40%.",
      "Reduced log storage cost by 60% standardizing production logging and removing redundant logs.",
      "Implemented algorithms to cascade colors on Lowe’s Paint color wall reducing time to production for new colors by 1 month.",
      "Created a micro-frontend (MFE) framework using module federation frontend for seamless MFE deployments across multiple pages.",
      "Implemented A/B tests, created Grafana dashboards and integrated analytics and tools like SonarQube, Veracode, Datadog.",
    ],
    tags: [
      "JS",
      "TS",
      "Docker",
      "GKE",
      "Grafana",
      "Kibana",
      "NodeJS",
      "Webpack",
      "Module Federation",
      "Akamai",
      "SonarQube",
      "Veracode",
      "GCP",
      "Datadog",
    ],
    awards: ["Spot Award x 3 (2021, 2022),", "Top Contributor Award"],
  },
  "Crio.Do": {
    name: "Crio.Do",
    shortName: "Crio.Do",
    link: "https://www.crio.do/",
    duration: "January 2020 - June 2022",
    position: "Software Engineer Intern",
    description: [
      "Developed assessment backend server in Python to evaluate user-submitted codebases for various metrics in < 5s latency.",
      "Created assessment logic for projects in different languages like Java (Springboot), C, C++.",
      "Managed CI/CD using Jenkins, Docker, and Google Cloud Run which scaled to thousands of concurrent code assessments.",
      "Created unit tests, integration tests, and automation jobs for ensuring system reliability.",
    ],
    tags: ["Python", "Docker", "Pytest", "GCS", "Cloud Run"],
    awards: [],
  },
};

export default function Work() {
  const device = useAppContext();
  const [selectedComp, setSelectedComp] = useState(Object.keys(companyContent)[0]);
  return (
    <div id="work" className={styles.work}>
      <GradientText
        h2
        size={device == "lg" ? "$6xl" : "4xl"}
        text="Work Experience"
      />
      <Grid.Container className={styles.workMain}>
        <Grid sm={2} xs={12} className={styles.companyList}>
          {Object.keys(companyContent).map((comp) => {
            if (comp == selectedComp) {
              return (
                <GradientText
                  key={comp}
                  text={comp}
                  h5
                  weight="bold"
                  className={styles.selected}
                />
              );
            }
            return (
              <Text h6 onClick={() => setSelectedComp(comp)} color="$gray800" key={comp}>
                {comp}
              </Text>
            );
          })}
        </Grid>
        <Grid sm={10} xs={12} className={styles.companyDesc}>
          <Link href={companyContent[selectedComp].link} target="_blank">
            <GradientText h3 text={companyContent[selectedComp].name} />
          </Link>
          <div className={styles.subtitle}>
            <Text h4 color="$gray800" weight="semibold">
              {companyContent[selectedComp].position}
            </Text>
            <Text i color="$gray800">
              {companyContent[selectedComp].duration}
            </Text>
          </div>
          <ul className={styles.descList}>
            {companyContent[selectedComp].description.map((desc, index) => (
              <li key={`${selectedComp}-${index}`}>
                <Text color="$gray700">{desc}</Text>
              </li>
            ))}
          </ul>
          <div className={styles.tagGroup}>
            {companyContent[selectedComp].tags.map((tag) => (
              <Button
                key={tag}
                className={styles.tagButton}
                flat
                size="xs"
                borderWeight="light"
                title={tagTitles[tag]}
              >
                <GradientText size="$sm" text={tag} />
              </Button>
            ))}
          </div>
          {companyContent[selectedComp].awards.length > 0 ? (
            <div className={styles.awards}>
              <Text i color="$gray800" weight="semibold" size="$md">
                Awards:{" "}
              </Text>
              <div className={styles.awardsList}>
                {companyContent[selectedComp].awards.map((award) => (
                  <Text color="$gray700" size="$md" key={award}>
                    &nbsp;{award}&nbsp;
                  </Text>
                ))}
              </div>
            </div>
          ) : (
            <></>
          )}
        </Grid>
      </Grid.Container>
    </div>
  );
}
