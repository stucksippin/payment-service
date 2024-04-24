// import dynamic from 'next/dynamic';
import AccountPage from '../account/page';
import CardList from '../cardList/page';
import Forwarder from '../forwarder/page';



// const ProtectedRoute = dynamic(() => import('../components/ProtectedRoute'), {
//   ssr: false
// });


export default function UserLayout({ children }) {
    return (
      <div>
        <AccountPage/>
        <CardList/>
        <Forwarder/>
        {children}
      </div>
    );
}



// export default ProtectedRoute(UserLayout, ['user']);


