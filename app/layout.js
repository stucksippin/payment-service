import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import UserBar from "./components/UserBar";




const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Payment Service",
  description: "payment service for ***** company",
};

export default async function RootLayout({ children }) {
  return (

    <html lang="en">

      <body className='bg-slate-100'>
        <div>
          <main>{children}</main>
        </div>
        <footer></footer>

      </body>

    </html>
  );
}