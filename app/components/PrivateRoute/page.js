// 'use client'

// import { useRouter } from 'next/router';
// import { useEffect } from 'react';
// import { useSession } from 'next-auth/react';

// export default function PrivateRoute({ children }) {
//   const { data: session, status } = useSession();
//   const isUser = !!session?.user;
//   const router = useRouter();

//   useEffect(() => {
//     if (status === 'loading') return; 
//     if (!isUser) router.push('/login'); 
//   }, [isUser, router, status]);

//   if (isUser) {
//     return children;
//   }

//   return <div>Загрузка...</div>;
// }
