import { Inter } from "next/font/google";
import "../../(front)/globals.css";
// import "./globals.css";

import CardSideNav from "../components/CardSideNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PulsoDex",
  description: "Generated by create next app",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#FAFAFA]`}>
        <div className=" w-full h-full flex  ">
          <div className="">
            <CardSideNav />
          </div>
          <div className=" w-full">{children}</div>
        </div>
      </body>
    </html>
  );
}
