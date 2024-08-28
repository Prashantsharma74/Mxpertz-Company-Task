import React from 'react'

function StoryData({ item }) {
    return (
        <ul className='d-flex just flex-wrap justify-content-between text-center' style={{"width": "100%"}}>
            {
                item.Paragraph.map((text, index) => (
                    <div class="card mb-3" style={{"width": "45%"}} >
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="data:image/jpeg;base64,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" class="img-fluid rounded-start" alt="No Image"/>
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <p class="card-text">{text}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </ul>
    )
}

export default StoryData
