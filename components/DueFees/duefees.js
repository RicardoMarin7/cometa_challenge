import React, { useEffect, useState } from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import DueFee from './DueFee'


const DueFees = (props) => {    
    const { 
        orders,
        removeOrderToPay,
        addOrderToPay
    } = props

    const [dueOrders, setDueOrders] = useState([]);

    const getDueOrders = () =>{
        const dueOrdersTemp = orders.filter( order => order.status === 'DUE')
        setDueOrders(dueOrdersTemp)
    }




    useEffect(() => {
        getDueOrders()
    }, [orders]);

    return (
        <Accordion 
            className='FeesCard Card Card--accordion'
        >
            <AccordionSummary
                className='FeesCard__summary'
                expandIcon={<ExpandMoreIcon fontSize='large'/>}
            >
                <h4 className='FeesCard__title'>Cuotas Atrasadas</h4>                
            </AccordionSummary>

            <AccordionDetails className='FeesCard__details'>
                {dueOrders.map( order => (
                    <DueFee 
                        order={order}
                        key={order.id}
                        removeOrderToPay={removeOrderToPay}
                        addOrderToPay={addOrderToPay}
                    />
                ))}
            </AccordionDetails>
        </Accordion>
    );
}
 
export default DueFees;