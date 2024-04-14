import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'
import { getSession } from 'next-auth/react';

import Header from './app/components/Header';

import LoginPage from './app/login/page';
import RegisterPage from './app/register/page'; 
import AdminLayout from './app/roleLayout/AdminLayout';
import UserLayout from './app/roleLayout/UserLayout';

export default withAuth(
    async function middleware(req) {
        const session = await getSession({ req });
        const userRole = session?.user?.role;

        if (userRole === 'admin') {
            return AdminLayout;
        } else if (userRole === 'user') {
            return UserLayout;
        } else {
            return LoginPage;
        }
    }
)
