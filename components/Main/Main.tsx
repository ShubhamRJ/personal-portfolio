import { Text } from "@nextui-org/react";
import { useAppContext } from "../Context/AppContext";
import GradientText from "../GradientText/GradientText";
import styles from "./main.module.css";

export default function Main() {
  const device = useAppContext();
  return (
    <div className={styles.main} id="home">
      <Text
        h3={device == "lg"}
        h5={device != "lg"}
        className={styles.h3}
        css={{ color: "$gray700" }}
      >
        Hi, my name is
      </Text>
      <GradientText
        text="Shubham Jawandhiya"
        h2
        size={device == "lg" ? "$8xl" : "6xl"}
        className={device == "lg" ? styles.h1 : styles.h1small}
        weight="semibold"
      />
      <Text h3={device == "lg"} h5={device != "lg"} css={{ color: "$gray700" }}>
        Software Engineer &nbsp; | &nbsp; Travel Enthusiast &nbsp; | &nbsp;
        Coffee for life
      </Text>
    </div>
  );
}
