import { Col, Container, Row, Text } from "@nextui-org/react";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import { useAppContext } from "../components/Context/AppContext";
import Education from "../components/Education/Education";
import Layout from "../components/layout";
import Main from "../components/Main/Main";
import NavBar from "../components/NavBar/NavBar";
import Social from "../components/Social/Social";
import Work from "../components/Work/Work";
import styles from "./index.module.css";

export default function Home() {
  const device = useAppContext();
  return (
    <Layout>
      <Container lg={true} className={styles.container}>
        <Row className={styles.navRow}>
          <NavBar />
        </Row>
        {device == "lg" || device == "md" ? (
          <Row className={styles.bodyRow}>
            <Col span={device == "lg" ? 1 : 2}>
              <Social />
            </Col>
            <Col span={device == "lg" ? 11 : 10} className={styles.main}>
              <Main />
              <About />
              <Work />
              <Education />
              <Contact />
              <div className={styles.footer}>
                <div className={styles.line} />
                <Text h5 css={{ color: "$gray600" }}>
                  Shubham Jawandhiya
                </Text>
                <div className={styles.line} />
              </div>
            </Col>
          </Row>
        ) : (
          <Row className={styles.mowBodyRow}>
            <Row className={styles.mowMain}>
              <Main />
              <About />
              <Work />
              <Education />
              <Contact />
            </Row>
            <Row className={styles.mowSocial}>
              <Social />
            </Row>
          </Row>
        )}
      </Container>
    </Layout>
  );
}
