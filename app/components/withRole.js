// 'use client';


// import dynamic from 'next/dynamic';
// import { useEffect } from 'react';
// import { useRouter } from 'next/router';
// import { useSession } from 'next-auth/react';

// const withRole = dynamic(() => import('@/app/components/withRole'), {
//   ssr: false
// });

// function ProtectedComponent(WrappedComponent, role) {
//   return (props) => {
//     const { data: session, status } = useSession();
//     const router = useRouter();

//     useEffect(() => {
//       if (status === 'authenticated' && session.user.role !== role) {
//         router.push('/login');
//       }
//     }, [session, status]);

//     if (status === 'loading') return null;

//     return <WrappedComponent {...props} />;
//   };
// }


// export default withRole(ProtectedComponent, ['admin', 'user']);