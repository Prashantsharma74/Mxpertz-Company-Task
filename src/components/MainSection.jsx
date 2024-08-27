import React, { useEffect, useState } from 'react'
import Card from './Card'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../features/products/productsSlice'

function MainSection() {

    const { products, isLoading, isSuccess, isError } = useSelector(state => state.products)
    
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchData(products))
    }, [])

    if (isError) {
        return (
            <div className="container">
                <h2>Something went wrong</h2>
            </div>
        )
    }

    if (isLoading) {
        return (
            <div className="container">
                <h2>Loading...</h2>
            </div>
        )
    }


    if (isSuccess || products) {
        return (
            <main>
                <div className='fiction-div'>
                    <h2>Science Fiction Stories</h2>
                    <ul>
                        <li className='li-first'>
                            <img src="data:image/jpeg;base64,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" alt="img" />
                            New
                        </li>
                        <li className='li-second'>
                            <img src="data:image/jpeg;base64,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" alt="img" />
                            In Progress
                        </li>
                        <li className='li-third'>
                            <img src="data:image/jpeg;base64,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" alt="img" />
                            Completed
                        </li>
                        <li className='li-fourth'>Clear All</li>
                    </ul>
                </div>
                <div className='card-div'>
                    {
                        products.map(item => <Card key={products._id} item={item} />)
                    }
                </div>
            </main>
        )
    }

}

export default MainSection
