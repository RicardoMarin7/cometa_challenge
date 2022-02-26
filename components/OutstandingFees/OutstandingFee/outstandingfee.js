import React, { useState} from 'react'
import numberToMoney from '../../../utils/numberToMoney'
import moment from 'moment'
import 'moment/locale/es-mx'
import Checkbox from '@mui/material/Checkbox'

const OutstandingFee = ({order, addOrderToPay, removeOrderToPay }) => {
    const [checked, setChecked] = useState(false);
    
    const handleChange = (orderID) =>{
        if(checked) removeOrderToPay(orderID)
        if(!checked) addOrderToPay(orderID)
        setChecked(!checked)
    }

    return (
        <div className="Fee">
            <div className="Fee__details">
                <h4>{order.name}</h4>
                <p>Vencido el {moment(order.due).locale('es').format('LL')}</p>
            </div>

            <div className="Fee__pay">
                <div className="Fee__charges">
                    <p>{numberToMoney(order.price)}</p>
                    {order.interest !== 'None' ? <p className='Fee__charges__interest'>Interés {numberToMoney(order.interest)}</p> :  ''}
                </div>
                <Checkbox 
                    sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                    checked={checked}
                    onChange={() => handleChange(order.id)}
                />
            </div>
        </div>
    );
}
 
export default OutstandingFee;