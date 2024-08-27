import React from 'react'
import { Link } from 'react-router-dom'

function Card({ item }) {

    const { Title, _id, Status } = item

    if (!item.status) {
        return (
            <div className="card h-4" >
                <img src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{Title}</h5>
                    <Link to="/data"><button className="btn btn-primary" >New</button></Link>
                </div>
            </div>
        )
    }

    return (
        <div className="card h-4" >
            <img src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{Title}</h5>
                <Link to={`/data/${_id}`}><button className="btn btn-primary" >{Status}</button></Link>
            </div>
        </div>
    )
}

export default Card
