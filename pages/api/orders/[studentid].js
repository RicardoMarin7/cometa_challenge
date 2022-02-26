import { STUDENTS_ENDPOINT } from '../../../utils/constants'
const handler = async (req, res) =>{
    try {        
        const { query } = req
        const response = await fetch(`${STUDENTS_ENDPOINT}/${query.studentid}/orders`, { headers: { Hash: 'OcJn4jYChW'}} )
        const data = await response.json()        
        if(data.detail) throw data.detail
        res.status(200).json(data)        
    } catch (error) {
        res.status(500).send({error: error})
    }
}
export default handler