'use client'

import { useNavigation } from 'next/navigation';
import { useEffect } from 'react';
import { useSession } from 'next-auth/react';

export default function PrivateRoute({ children }) {
  const { data: session, status } = useSession();
  const isUser = !!session?.user;
  const navigation = useNavigation();

  useEffect(() => {
    if (status === 'loading') return; 
    if (!isUser) navigation.push('/login'); 
  }, [isUser, navigation, status]);

  if (isUser) {
    return children;
  }

  return <div>Загрузка...</div>;
}
