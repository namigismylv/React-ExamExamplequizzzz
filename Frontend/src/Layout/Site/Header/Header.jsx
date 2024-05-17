import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import MainContext from '../../../Context/Context'
const Header = () => {
    const {basketItems}=useContext(MainContext)
  return (
    <>
    <header className='headerLocal'>
        <div className="header">
            <div className="header__left">
                <Link to="/">Tasty</Link>
            </div>
            <div className="header__right">
                <ul className='header__right__ul'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/basket'>Cart <span>({basketItems.length})</span></Link>
                    </li>
                </ul>
            </div>
        </div>
    </header>
    
    
    </>
    
  )
}

export default Header