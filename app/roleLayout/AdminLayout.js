import { Register } from '../register/page'
import {MoneyStatistis} from '../moneystatistic/page'

export default function AdminLayout({ children}) {
    return (
      <div>
    
                <Register />
                <MoneyStatistis />
    
      
        {children}
      </div>
    );
  }