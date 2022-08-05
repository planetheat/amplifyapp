import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'

const Contact = () => {
    return (
        <>
        <NavBar />
        <main className="bg-indigo-900 min-h-screen p-12">
        <article className="container shadow-lg mx-auto bg-white rounded">
            <header className="relative">
            </header>
         
        <div className="px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full">
                <div className="">
                    <div className="bg-white p12">
                        <h1 className="title text-2xl lg:text-3xl mb-4">Contact</h1>
                    </div>
                </div>
            <p>contact@contact.com</p>
        </div>
        </article>
        <Footer /> 
    </main>
    </>
    )
}

export default Contact
