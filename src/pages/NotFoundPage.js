import React from 'react'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
    return (
        <>
            <Header fullMenu={true} />
            <main className='page-not-found'>
                <h1>Ooops!!</h1>
                <p>We can't find the page you're looking for. Try searching our
                    <Link to='/'> course catalog</Link>
                </p>
            </main>
            <Footer />
        </>
    )
}

export default NotFoundPage
