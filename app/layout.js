// import { useNavigation } from 'next/navigation';
// import withAuth from '../middleware';

// import Header from './components/Header';

// import LoginPage from './login/page';
// import RegisterPage from './register/page'; 
// import AdminLayout from './roleLayout/AdminLayout';
// import UserLayout from './roleLayout/UserLayout';


// const RootLayout = ({ children }) => {
//   return <>{children}</>;
// };

// export default withAuth(RootLayout);


import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

import User from './roleLayout/UserPage';


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Payment Service",
  description: "payment service for ***** company",
};

export default async function RootLayout({ children }) {
  return (

    <html lang="en">

      <body className='bg-slate-100'>
        <div className="flex">
          <Header />
         
          <User />
          {/* <UserBar /> */}
          <main className="mt-[200px] w-full ml-5 mr-5">{children}</main>
        </div>
        <footer></footer>

      </body>

    </html>
  );
}