'use client'

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

export default function withRole(WrappedComponent, role) {
  return (props) => {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
      if (status === 'authenticated' && session.user.role !== role) {
        router.push('/login');
      }
    }, [session, status]);

    if (status === 'loading') return null;

    return <WrappedComponent {...props} />;
  };
}
