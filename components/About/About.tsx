import { Text } from "@nextui-org/react";
import { useAppContext } from "../Context/AppContext";
import GradientText from "../GradientText/GradientText";
import styles from "./about.module.css";

export default function About() {
  const device = useAppContext();
  return (
    <div id="about">
      <GradientText h2 size={device == "lg" ? "$6xl" : "4xl"} text="About Me" />
      <Text h5 css={{ color: "$gray700" }} className={styles.about}>
        Work in progress
      </Text>
    </div>
  );
}
