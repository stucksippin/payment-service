import withRole from '../path/to/withRole';
import { Register } from '../register/page'
import {MoneyStatistis} from '../moneystatistic/page'

function AdminLayout({ children}) {
    return (
      <div>
        <Register />
        <MoneyStatistis />
        {children}
      </div>
    );
}

export default withRole(AdminLayout, 'admin');



