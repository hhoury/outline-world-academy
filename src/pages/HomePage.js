import React from 'react'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
const HomePage = () => {
    return (
        <div>
            <Header fullMenu={true}/>
            <h1 style={{ margin: '200px auto', textAlign: 'center' }}>
                THIS IS THE HOME PAGE
            </h1>
            <Footer />
        </div>
    )
}

export default HomePage
