import { TailwindIndicator } from "@/components/tailwind-indicator";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";

interface CustomAppProps  {
  authState: boolean;
  Component: any;
  pageProps: any;
}
export default function App(props: CustomAppProps) {
  const {
    authState,
    Component,
    Component: {
        layout,
        options = {},
    },
    pageProps,
} = props;

const {
   error,
    ...compProps } = pageProps;

const Layout = layout || ( ( page: any ) => page );

  return (
    <ThemeProvider defaultTheme='light' storageKey='theme' attribute='class'>
      <Layout error={ error } { ...options }>
        <Component { ...compProps }/>
      </Layout>
      <TailwindIndicator />
    </ThemeProvider>
  );
}
