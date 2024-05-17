import React from 'react'
import Card from '../Card/Card'

const Cards = ({ data }) => {
    return (
        <>
            {
                data.map((item, index) => {
                    return (
                        <Card item={item} key={index} />

                    )
                })
            }
        </>
    )
}

export default Cards