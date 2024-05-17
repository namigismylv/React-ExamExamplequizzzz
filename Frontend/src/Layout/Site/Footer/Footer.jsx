import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div className="footer__top">
                    <div className="container">
                        <div className="row mb-5">
                            <div className="col-3">
                                <div className="footer__widget">
                                    <h2>Tasty</h2>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                    <ul className='social__media'>
                                        <li>
                                            <Link to=""><i class="fa-brands fa-instagram"></i></Link>
                                        </li>
                                        <li>
                                            <Link to=""><i class="fa-brands fa-facebook-f"></i></Link>
                                        </li>
                                        <li>
                                            <Link to=""><i class="fa-brands fa-twitter"></i></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="footer__widget">
                                    <h2>Opening Hours</h2>
                                    <ul>
                                    <li><Link to="">Monday: <span>08: - 22:00</span></Link></li>
                                        <li>
                                            <Link to="">Tuesday: <span>08: - 22:00</span></Link>
                                        </li>
                                        <li>
                                            <Link to="">Wednesday: 08: - 22:00</Link>
                                        </li>
                                        <li>
                                            <Link to="">Thursday: <span>08: - 22:00</span></Link>
                                        </li>
                                        <li>
                                            <Link to=""> Friday: <span>08: - 22:00</span></Link>
                                        </li>
                                        <li>
                                            <Link to=""> Saturday: <span>08: - 22:00</span></Link>
                                        </li>
                                        <li>
                                            <Link to=""> Sunday: <span>08: - 22:00</span></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="footer__widget">
                                    <h2>Contact Information</h2>
                                    <ul>
                                        <li>
                                            <Link to="">198 West 21th Street, Suite 721 New York NY 10016</Link>
                                        </li>
                                        <li>
                                            <Link to="">+ 1235 2355 98</Link>
                                        </li>
                                        <li>
                                            <Link to="">info@yoursite.com</Link>
                                        </li>
                                        <li>
                                            <Link to="">email@email.com</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="footer__widget">
                                    <h2>Newsletter</h2>
                                    <p>Far far away, behind the word mountains, far from the countries.</p>
                                    <form action="#">
                                        <span><i class="fa-solid fa-paper-plane"></i></span>
                                        <input type="text" placeholder='Subscribe'/>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__bottom">
                    <div className="container">
                        <div className="row">
                    <div className="col-12">
                    <p>Copyright ©2024 All rights reserved | This template is made with <i class="fa-solid fa-heart"></i> by Colorlib</p>

                    </div>

                        </div>
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer