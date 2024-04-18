import withRole from '../path/to/withRole';
import {Account} from "../account/page";
import {CardList} from '../cardList/page'
import {Forwarder} from '../forwarder/page'

function UserLayout({ children }) {
    return (
      <div>
        <Account/>
        <CardList/>
        <Forwarder/>
        {children}
      </div>
    );
}

export default withRole(UserLayout, 'user');



