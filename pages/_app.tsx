import { createTheme, NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { AppWrapper } from "../components/Context/AppContext";

export default function App({ Component, pageProps }) {
  console.log("Hi there fellow developer! Have a nice day.");
  const lightTheme = createTheme({
    type: "light",
    theme: {},
  });

  const darkTheme = createTheme({
    type: "dark",
    theme: {},
  });
  return (
    <NextThemesProvider
      defaultTheme="dark"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      <NextUIProvider>
        <AppWrapper>
          <Component {...pageProps} />
        </AppWrapper>
      </NextUIProvider>
    </NextThemesProvider>
  );
}
