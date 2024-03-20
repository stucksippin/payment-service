
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { getServerSession } from "next-auth";
import Form from "./login/Form";
import { useRouter } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Payment Service",
  description: "payment service for naebalovo company",
};

export default async function RootLayout({ children }) {

  return (

    <html lang="en">

      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <footer></footer>

      </body>

    </html>
  );
}
