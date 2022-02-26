import useSWR from 'swr'
import fetcher from '../utils/fetcher'

const useOrders = (studentID) => {
    const { data, error } = useSWR(`/api/orders/${studentID}`, fetcher)

    return {
        orders: data,
        isLoadingOrders: !error && !data,
        isErrorInOrders: error
    }
}
 
export default useOrders;