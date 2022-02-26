import React from 'react'
import Header from '../../components/Header'

const BasicLayout = ({children}) => {
    return (
        <div className="BasicLayout">
            {/* <Sidebar /> */}
            <main>
                <Header />                    
                    {children}                    
            </main>
        </div>
    );
}
 
export default BasicLayout;