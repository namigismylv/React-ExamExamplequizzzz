import React, { useContext } from 'react'
import MainContext from '../../../Context/Context'

const BasketTableItem = ({index,basketItem}) => {
    const {addToBasket,deleteFromBasket}=useContext(MainContext)
    return (
        <tr>
            <td>{index+1}</td>
            <td><img src={basketItem.item.image} width="70px" height="70px"  alt="" /></td>
            <td>{basketItem.item.title}</td>
            <td>{basketItem.item.description}</td>
            <td>{basketItem.count}</td>
            <td>{basketItem.item.price}</td>
            <td><button className='btn btn-primary' onClick={()=> addToBasket(basketItem.item)}>add</button></td>
            <td>{basketItem.totalPrice}</td>
            <td><button className='btn btn-danger' onClick={()=>deleteFromBasket(basketItem)}>delete</button></td>
        </tr>

    )
}

export default BasketTableItem