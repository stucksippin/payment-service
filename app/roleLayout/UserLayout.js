import {Account} from "../account/page";
import {CardList} from '../cardList/page'
import {Forwarder} from '../forwarder/page'

export default function UserLayout({ children }) {
    return (
      <div>

        <Account/>
        <CardList/>
        <Forwarder/>


        {children}
      </div>
    );
  }