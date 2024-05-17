import React from 'react'
import { useContext } from 'react'
import MainContext from '../../../Context/Context'
import BasketTable from '../../../Components/Site/BasketTable/BasketTable'

const Basket = () => {
    const { basketItems } = useContext(MainContext)
    return (
        <>
            

                <BasketTable basketItems={basketItems} />
        </>
    )
}

export default Basket