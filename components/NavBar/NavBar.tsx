import { Navbar, StyledLink } from "@nextui-org/react";
import Link from "next/link";
import { useRef, useState } from "react";
import GradientText from "../GradientText/GradientText";
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
    title: "Projects",
    link: "#projects"
  },
  {
    title: "Education",
    link: "#education",
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
  const navToggleRef = useRef();

  return (
    <Navbar variant="sticky" className={styles.navbar}>
      <Navbar.Brand>
        <Link href="#home">
          <GradientText text="SJ" h4 size={40} weight="bold" />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle showIn={"xs"} autoFocus ref={navToggleRef} />
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
            <GradientText text={item.title} weight="bold" />
          </Navbar.Link>
        ))}
      </Navbar.Content>
      <Navbar.Collapse disableAnimation>
        {NavItems.map((item) => (
          <Navbar.CollapseItem
            key={item.title}
            activeColor="primary"
            isActive={item.title == currentTab}
            onClick={() => {
              navToggleRef.current && (navToggleRef.current as any).click();
            }}
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
              <GradientText text={item.title} props={{}} />
            </StyledLink>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
}
