import React, { useEffect } from 'react'
import useStudentContext from '../../hooks/useStudentContext'
import Avatar  from '@mui/material/Avatar'
import Skeleton from '@mui/material/Skeleton'

const Header = () => {
    const { student , isLoading} = useStudentContext()
    const { school = { name: 'Sin Nombre'} } = student

    useEffect(() => {
        // console.log(student)
    }, [student]);    

    return (
        <header className='Header'>
            {isLoading 
            ?(
                <>
                    <Skeleton  
                        variant='circular' 
                        animation='wave' 
                        className='Header__avatar Header__avatar--Skeleton'>
                        <Avatar />
                    </Skeleton>

                    <Skeleton  
                        variant = 'text' 
                        animation='wave' 
                        width={250} 
                        height={40} 
                        className='Header__name Header__name--Skeleton'  />
                </>

            )  
            :(
                <>
                    <Avatar className='Header__avatar'>{school.name.substring(0,1)}</Avatar>
                    <h2 className='Header__name'>{school.name}</h2>
                </>
            )}
        </header>
    );
}
 
export default Header;