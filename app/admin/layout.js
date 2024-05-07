import { Inter } from "next/font/google";
import "../globals.css";
import HeaderAdmin from "../components/admin/HeaderAdmin";





const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Payment Service",
    description: "payment service for ***** company",
};

export default async function AdminLayout({ children }) {
    return (
        <>
            <div>
                <HeaderAdmin />
                <main className="container mx-auto">{children}</main>
            </div>
        </>


    );
}