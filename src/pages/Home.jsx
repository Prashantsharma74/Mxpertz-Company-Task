import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import MainSection from '../components/MainSection'
// import { useDispatch } from 'react-redux'
// import { resetSelectedProduct } from '../features/products/productsSlice'

function Home() {

    // const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(resetSelectedProduct())
    // }, [dispatch])

    return (
        <div className='sec'>
            <Navbar />
            <MainSection />
        </div>
    )
}

export default Home
