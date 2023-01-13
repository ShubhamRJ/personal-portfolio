import { Text } from "@nextui-org/react";
import { useAppContext } from "../Context/AppContext";
import GradientText from "../GradientText/GradientText";
import styles from "./education.module.css";

export default function Education() {
  const device = useAppContext();
  return (
    <div id="education">
      <GradientText h2 size={device == "lg" ? "$6xl" : "4xl"} text="Education" />
      <Text h5 css={{ color: "$gray700" }} className={styles.education}>
        Work in progress
      </Text>
    </div>
  );
}
