import { Text } from "@nextui-org/react";
import { useAppContext } from "../Context/AppContext";
import GradientText from "../GradientText/GradientText";
import styles from "./work.module.css";

export default function Work() {
  const device = useAppContext();
  return (
    <div id="work">
      <GradientText h2 size={device == "lg" ? "$6xl" : "4xl"} text="Work Experience" />
      <Text h5 css={{ color: "$gray700" }} className={styles.work}>
        Work in progress
      </Text>
    </div>
  );
}
