import React, { useEffect, useState } from 'react'
import Totalinfo from '../components/TotalInfo/totalinfo';
import useStudentContext from '../hooks/useStudentContext';
import BasicLayout from '../layouts/BasicLayout';
import useOrders from '../hooks/useOrders'
import FeesPaid from '../components/FeesPaid/feespaid';
import DueFees from '../components/DueFees'
import OutstandingFees from '../components/OutstandingFees';


const Orders = () => {
    const { student, isLoading, isError } = useStudentContext()
    const { orders = [], isLoadingOrders, isErrorInOrders } = useOrders('3b35fb50-3d5e-41b3-96d6-c5566141fab0')
    const [total, setTotal] = useState(0);    
    const [ordersToPay, setOrdersToPay] = useState([]);

    const calculateNewTotal = () =>{
        let newTotal = 0
        for (let i = 0; i < ordersToPay.length; i++) {
            if(ordersToPay[i].interest !== 'None') newTotal += Number(ordersToPay[i].interest)
            newTotal += Number(ordersToPay[i].price)
        }
        setTotal(newTotal)
    }

    const addOrderToPay = (orderID) =>{
        let ordersToPayTemp = []
        let [orderToAdd] = orders.filter( order => order.id === orderID)
        if(!orderToAdd) console.log('Error orden no encontrada')//display a error message 
        ordersToPayTemp = [...ordersToPay]
        ordersToPayTemp.push(orderToAdd)
        setOrdersToPay(ordersToPayTemp)        
    }

    const removeOrderToPay = (orderID) =>{
        let ordersToPayTemp = ordersToPay.filter( order => order.id !== orderID)            
        setOrdersToPay(ordersToPayTemp)    
    }

    useEffect(() => {
        calculateNewTotal()

    }, [ordersToPay]);


    return (
        <BasicLayout>
            <Totalinfo 
                student={student} 
                isLoading={isLoading}
                total={total}
                />

            <FeesPaid 
                orders={orders}
                isLoading={isLoadingOrders}
            />

            <DueFees 
                orders={orders}
                isLoading={isLoadingOrders}
                setOrdersToPay={setOrdersToPay}
                ordersToPay={ordersToPay}
                removeOrderToPay={removeOrderToPay}
                addOrderToPay={addOrderToPay}
            />

            <OutstandingFees
                orders={orders}
                removeOrderToPay={removeOrderToPay}
                addOrderToPay={addOrderToPay}
            />

        </BasicLayout>
    );
}
 
export default Orders;