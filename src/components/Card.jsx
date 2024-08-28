import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { fetchDataById } from '../features/products/productsSlice'

function Card({ item }) {

    const { Title, Status, _id } = item
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleAdd = (item) => {
        dispatch(fetchDataById(item))
    }

    const maxLength = 20; // Set the maximum length you want
    const truncatedTitle = Title && Title.length > maxLength ? `${Title.substring(0, maxLength)}...` : Title;

    return (
        <div className="card h-4" >
            <img src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{truncatedTitle ? truncatedTitle : "NA"}</h5>
                <Link to={`/data`} onClick={() => handleAdd(item)}><button className={`btn ${Status === 'New' ? 'btn-new' :
                    Status === 'In Progress' ? 'btn-in-progress' :
                        Status === 'Completed' ? 'btn-completed' : ''
                    }`}>{Status ? Status : "New"}</button></Link>
            </div>
        </div>
    )
}

export default Card
