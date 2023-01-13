import { Col, Container, Row, theme } from "@nextui-org/react";
import { useAppContext } from "../components/Context/AppContext";
import Layout from "../components/layout";
import Main from "../components/Main/Main";
import NavBar from "../components/NavBar/NavBar";
import Social from "../components/Social/Social";
import styles from "./index.module.css";

export default function Home() {
  return (
    <Layout>
      <Container lg={true} className={styles.container}>
        <Row className={styles.navRow}>
          <NavBar />
        </Row>
        <Row className={styles.bodyRow}>
          <Col span={1}><Social /></Col>
          <Col span={10}>
            <Main />
          </Col>
          <Col span={1}></Col>
        </Row>
      </Container>
    </Layout>
  );
}
