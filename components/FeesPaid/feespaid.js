import React, { useEffect, useState } from 'react'
import moment from 'moment'
import 'moment/locale/es-mx'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'


const FeesPaid = (props) => {
    const { 
        orders
    } = props

    const [paidOrders, setPaidOrders] = useState([]);

    const getPaidOrders = () =>{
        const paidOrdersTemp = orders.filter( order => order.status === 'PAID')
        setPaidOrders(paidOrdersTemp)
    }

    useEffect(() => {
        getPaidOrders()
    }, [orders]);
    
    return (
        <Accordion 
            className='FeesCard Card Card--accordion'
        >
            <AccordionSummary
                className='FeesCard__summary'
                expandIcon={<ExpandMoreIcon fontSize='large'/>}
            >
                <h4 className='FeesCard__title'>Cuotas Pagadas</h4>                
            </AccordionSummary>

            <AccordionDetails className='FeesCard__details'>
                {paidOrders.map( (order) =>(
                    <div className="FeesCard__fee" key={order.id}>
                        <h4>{order.name}</h4>
                        <p>Pagada el {moment(order?.payin?.created).locale('es').format('LL')}</p>
                    </div>
                ))}
            </AccordionDetails>
        </Accordion>
    );
}
 
export default FeesPaid;