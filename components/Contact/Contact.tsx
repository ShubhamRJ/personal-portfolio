import { Text } from "@nextui-org/react";
import { useAppContext } from "../Context/AppContext";
import GradientText from "../GradientText/GradientText";
import styles from "./contact.module.css";

export default function Contact() {
  const device = useAppContext();
  return (
    <div id="contact">
      <GradientText h2 size={device == "lg" ? "$6xl" : "4xl"} text="Contact" />
      <Text h5 css={{ color: "$gray700" }} className={styles.contact}>
        Work in progress
      </Text>
    </div>
  );
}
