import React, { useContext } from 'react'
import MainContext from '../../../Context/Context'
import Cards from '../../../Components/Site/Cards/Cards'

const Home = () => {
    const { data } = useContext(MainContext)

    return (
        <main>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <Cards data={data} />

                    </div>
                </div>
            </div>
        </main>
    )
}

export default Home