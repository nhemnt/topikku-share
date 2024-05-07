import Image from "next/image";
import { Inter } from "next/font/google";
import { withLayout } from "@/components/layout";

const inter = Inter({ subsets: ["latin"] });

function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
     Hemant 
    </main>
  );
}



export default withLayout( Home , {});