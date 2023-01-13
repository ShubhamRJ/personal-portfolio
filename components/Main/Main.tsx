import { Text } from "@nextui-org/react";
import { useAppContext } from "../Context/AppContext";
import styles from './main.module.css';

export default function Main() {
  const device= useAppContext();
  return (
    <div className={styles.main}>
      <Text h3 className={styles.h3} css={{color: "$gray700"}}>
        Hi, my name is
      </Text>
      <Text
        h1
        size={device == 'lg' ? "$8xl" : "6xl"}
        className={device == 'lg' ? styles.h1 : styles.h1small}
        css={{
          textGradient: "45deg, $blue600 -20%, $pink600 50%",
        }}
        weight="bold"
      >
        Shubham Jawandhiya
      </Text>
    </div>
  );
}
