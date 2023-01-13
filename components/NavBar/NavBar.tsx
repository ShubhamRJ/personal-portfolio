import { Navbar, StyledLink, Text } from "@nextui-org/react";
import React, { useState } from "react";
import styles from "./navbar.module.css";

const NavItems = [
  {
    title: "About",
    link: "#about",
  },
  {
    title: "Work",
    link: "#work",
  },
  {
    title: "Contact",
    link: "#contact",
  },
  {
    title: "Resume",
    link: "https://drive.google.com/file/d/1Egv0KIRrTl72JSiECBRA8goKsZe0Aycd/view?usp=share_link",
  },
];

export default function NavBar() {
  const [currentTab, setCurrentTab] = useState("");
  return (
    <Navbar variant="sticky" className={styles.navbar}>
      <Navbar.Brand>
        <Text
          h5
          size={30}
          css={{
            textGradient: "45deg, $blue600 -20%, $pink600 50%",
          }}
          weight="bold"
        >
          SRJ
        </Text>
      </Navbar.Brand>
      <Navbar.Toggle showIn="xs" />
      <Navbar.Content
        enableCursorHighlight
        activeColor="primary"
        hideIn="xs"
        variant="default"
      >
        {NavItems.map((item) => (
          <Navbar.Link
            href={item.link}
            key={item.title}
            onClick={() => setCurrentTab(item.title)}
            isActive={item.title == currentTab}
            target={item.title == "Resume" ? "_blank" : ""}
          >
            <Text
              css={{
                textGradient: "45deg, $blue600 -20%, $pink600 50%",
              }}
            >
              {item.title}
            </Text>
          </Navbar.Link>
        ))}
      </Navbar.Content>
      <Navbar.Collapse disableAnimation>
        {NavItems.map((item, index) => (
          <Navbar.CollapseItem
            key={item.title}
            activeColor="primary"
            isActive={item.title == currentTab}
          >
            <StyledLink
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href={item.link}
              onClick={() => setCurrentTab(item.title)}
              target={item.title == "Resume" ? "_blank" : ""}
            >
              {item.title}
            </StyledLink>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
}
