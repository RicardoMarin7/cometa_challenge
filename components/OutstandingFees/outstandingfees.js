import React, { useEffect, useState } from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import OutstandingFee from './OutstandingFee/outstandingfee'

const OutstandingFees = (props) => {
    const { 
        orders,
        addOrderToPay,
        removeOrderToPay
    } = props
    const [outstandingOrders, setOutstandingOrders] = useState([]);

    const getOutstandingOrders = () =>{
        const outStandingOrdersTemp = orders.filter( order => order.status === 'OUTSTANDING')
        setOutstandingOrders(outStandingOrdersTemp)
    }

    useEffect(() => {
        getOutstandingOrders()
        console.log(orders)
    }, [orders]);

    return (
        <Accordion 
        className='FeesCard Card Card--accordion'
    >
        <AccordionSummary
            className='FeesCard__summary'
            expandIcon={<ExpandMoreIcon fontSize='large'/>}
        >
            <h4 className='FeesCard__title'>Cuotas Futuras</h4>                
        </AccordionSummary>

        <AccordionDetails className='FeesCard__details'>
            {outstandingOrders.map( order => <OutstandingFee 
                        order={order}
                        key={order.id}
                        removeOrderToPay={removeOrderToPay}
                        addOrderToPay={addOrderToPay} />)}
        </AccordionDetails>
    </Accordion>
    );
}
 
export default OutstandingFees;