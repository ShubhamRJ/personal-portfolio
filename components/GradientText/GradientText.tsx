import { Text } from "@nextui-org/react";
import styles from "./gradientText.module.css";

export default function GradientText(props) {
  return (
    <Text
      className={styles.text}
      {...props}
      css={{
        textGradient: "45deg, $blue600 -20%, $cyan600 60%",
      }}
    >
      {props.text}
    </Text>
  );
}
