import { TailwindIndicator } from "@/components/tailwind-indicator";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import { ClerkProvider } from '@clerk/nextjs'


interface CustomAppProps {
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

  const Layout = layout || ((page: any) => page);

  return (
    <ClerkProvider>
      <ThemeProvider defaultTheme='light' storageKey='theme' attribute='class'>
        <Layout error={error} {...options}>
          <Component {...compProps} />
        </Layout>
        <TailwindIndicator />
      </ThemeProvider>
    </ClerkProvider>
  );
}
