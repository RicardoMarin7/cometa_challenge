import React from 'react'
import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const BasicLayout = ({children}) => {
    return (
        <div className="BasicLayout">
            {/* <Sidebar /> */}
            <main>
                <Header />                    
                    {children}                    
                <Footer />            
            </main>
        </div>
    );
}
 
export default BasicLayout;