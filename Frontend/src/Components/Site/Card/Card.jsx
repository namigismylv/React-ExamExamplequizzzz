import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'
const Card = ({ item }) => {
    return (
        <>
            <Link to={`/detail/${item._id}`}>
                <div class="card w-75 mb-3">
                    <div class="card-body">
                        <img src={item.image} width="70px" height="70px" style={{ borderRadius: "50%" }} alt="" />
                        <div className="card-title">
                            <h5 class="card-title">{item.title}</h5>
                            <p class="card-text">{item.description}</p>

                        </div>
                        <p class="card-text-price">${item.price}</p>
                    </div>
                </div></Link>

        </>
    )
}

export default Card