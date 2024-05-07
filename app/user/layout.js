import { Inter } from "next/font/google";
import "../globals.css";
import UserBar from "../components/UserBar";
import Header from "../components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Payment Service",
    description: "payment service for ***** company",
};

export default async function UserLayout({ children }) {

    return (


        <div className="flex">
            <UserBar />
            <Header />
            <main className="mt-[200px] w-full ml-5 mr-5">{children}</main>
        </div>


    );
}