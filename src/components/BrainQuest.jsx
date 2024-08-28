import React from 'react'
import { useSelector } from 'react-redux'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Options from './Options'

function BrainQuest() {

    const { selectedProduct } = useSelector(state => state.products)
    const data = selectedProduct.Brainquest;
    console.log(data);

    if (data.length === 0) {
        return (
            <h1>No Data Found...</h1>
        )
    }

    return (
        <div className='sliders '>
            {
                data.map((item) => (
                    <div class="card mb-3 p-3">
                        <div class="row g-0 d-flex flex-column border-2 rounded-5" style={{ "width": "100%" }}>
                            <div class="col-md-4">
                                <p>{item.Question}</p>
                            </div>
                            <div class="col-md-8">
                                {
                                    item.Option.map((output, index) => <Options key={index} output={output} />)
                                }
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default BrainQuest
