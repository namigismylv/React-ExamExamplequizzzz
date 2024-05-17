import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ROUTES from './Routes/Routes'
import MainContext from './Context/Context'
import { useEffect, useState } from 'react'
import axios from 'axios';

function App() {
  const routes = createBrowserRouter(ROUTES)
  const [data, setData] = useState([])
  const [basketItems, setBasketItems] = useState(localStorage.getItem("basketItems") ? JSON.parse(localStorage.getItem("basketItems")) : [])
  useEffect(() => {
    localStorage.setItem("basketItems", JSON.stringify(basketItems))
  }, [basketItems])
  useEffect(() => {
    axios.get("http://localhost:5000/api/products").then(res => {
      setData(res.data)
      console.log(res);
    })
  }, [])
  function addToBasket(item) {
    const target = basketItems.find(x => x.item._id == item._id)
    if (target) {
      target.count += 1
      target.totalPrice += item.price
      setBasketItems([...basketItems])
    }
    else {
      let newBasketItem = {
        item: item,
        count: 1,
        totalPrice: item.price
      }
      setBasketItems([...basketItems, newBasketItem])
    }

  }
  function deleteFromBasket(item) {
    const target = basketItems.find(x => x.item._id == item.item._id)
    if (target.count > 1) {
      target.count -= 1
      target.totalPrice -= item.item.price
      setBasketItems([...basketItems])
    }
    else {
      setBasketItems([...basketItems.filter(x => x.item._id !== item.item._id)])
    }
  }
  const contextData = { data, setData, basketItems, setBasketItems, addToBasket, deleteFromBasket };
  return (
    <>
      <MainContext.Provider value={contextData}>
        <RouterProvider router={routes} />
      </MainContext.Provider>
    </>
  )
}

export default App
