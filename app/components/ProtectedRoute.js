

// 'use client';

// import { useEffect } from 'react';
// import { useRouter } from 'next/router';
// import { useSession } from 'next-auth/react';

// function ProtectedRoute(WrappedComponent, requiredRoles) {
//   return (props) => {
//     const { data: session, status } = useSession();
//     const router = useRouter();

//     useEffect(() => {
//       if (status === 'authenticated' && !requiredRoles.includes(session.user.role)) {
//         router.push('/login');
//       }
//     }, [session, status]);

//     if (status === 'loading') return null;

//     return <WrappedComponent {...props} />;
//   };
// }

// export default ProtectedRoute;
