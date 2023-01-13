import { Text } from "@nextui-org/react";
import styles from "./gradientText.module.css";

export default function GradientText(props){
    return (
        <Text
            className={styles.text}
            {...props}
            css={{
                textGradient: "45deg, $blue600 -40%, $cyan600 35%",
            }}
        >
            {props.text}
        </Text>
    )
}