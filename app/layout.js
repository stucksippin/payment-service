
import { useNavigation } from 'next/navigation';
import { getSession } from 'next-auth/react';
import withAuth from '../middleware';
import PrivateRoute from './components/PrivateRoute/page';

import Header from './components/Header';

import LoginPage from './login/page';
import RegisterPage from './register/page'; 


const RootLayout = ({ children }) => {
  const { data: session } = getSession();
  const userRole = session?.user?.role;

  let Layout;

  if (userRole === 'admin') {
    Layout = AdminLayout;
    return (
      <html lang="en">
        <body className='bg-slate-100'>
          <RegisterPage /> {/* Отображаем страницу регистрации для администраторов */}
          <PrivateRoute>
            <div className="flex">
              <Header />
              {/* <UserBar /> */}
              <Layout>
                <main className="mt-[200px] w-full ml-5 mr-5">{children}</main>
              </Layout>
            </div>
            <footer></footer>
          </PrivateRoute>
        </body>
      </html>
    );
  } else if (userRole === 'user') {
    Layout = UserLayout;
  } else {
    Layout = LoginPage;
  }

  return (
    <html lang="en">
      <body className='bg-slate-100'>
        <LoginPage />
        <PrivateRoute>
          <div className="flex">
            <Header />
            {/* <UserBar /> */}
            <Layout>
              <main className="mt-[200px] w-full ml-5 mr-5">{children}</main>
            </Layout>
          </div>
          <footer></footer>
        </PrivateRoute>
      </body>
    </html>
  );
};

export default RootLayout;
