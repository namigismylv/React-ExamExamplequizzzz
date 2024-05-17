import axios from 'axios'
import React, {useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Detail.css'
import MainContext from '../../../Context/Context'
const Details = () => {
    const [item,setItem]=useState({})
    const {id}=useParams()
    const {addToBasket}=useContext(MainContext)
    useEffect(()=>{
        axios.get(`http://localhost:5000/api/products/${id}`).then((res)=>{
        setItem(res.data)
        })
    })
  return (
    
    <div className="container">
        <div className="row mt-5 mb-5">
            <div className="col-6">
                <img src={item.image} width="500px" alt="" />
            </div>
            <div className="col-6">
                <h1 className="details-title">{item.title}</h1>
                <p className='details-desc'>{item.description}</p>
                <button className='btn btn-primary' onClick={()=>addToBasket(item)}>Add to Cart</button>
            </div>
        </div>
    </div>
    
  )
}

export default Details