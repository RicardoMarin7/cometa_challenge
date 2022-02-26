import useSWR from 'swr'
import fetcher from '../utils/fetcher'

const useOrders = (studentID) => {
    const { data, error } = useSWR(`/api/student/${studentID}`, fetcher)

    return {
        student: data || {},
        isLoading: !error && !data,
        isError: error
    }
}
 
export default useOrders;