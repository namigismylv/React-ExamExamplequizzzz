import React from 'react'
import BasketTableItem from '../BasketTableItem/BasketTableItem'
import './BasketTable.css'

const BasketTable = ({basketItems}) => {
  return (
    <table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">No</th>
      <th scope="col">image</th>
      <th scope="col">title</th>
      <th scope="col">description</th>
      <th scope="col">count</th>
      <th scope="col">price</th>
      <th scope="col">add</th>
      <th scope="col">totalprice</th>
      <th scope="col">delete</th>
    </tr>
  </thead>
  <tbody>
    {
        basketItems.map((basketItem,index)=>{
            return (
                <BasketTableItem basketItem={basketItem} key={index} index={index}/>
            )
        })
    }
  </tbody>
</table>
  )
}

export default BasketTable