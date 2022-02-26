import { createContext } from 'react'

const StudentContext = createContext({
    student: {},
    isLoading: undefined,
    isError: undefined,
})

export default StudentContext