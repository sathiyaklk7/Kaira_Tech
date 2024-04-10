import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './task.css'
import Foody from "./Foody";
import Menu from './imgs/menu.png'
import No from './imgs/no.png'
//images
import Signal from './imgs/signal.png'
import Shopping from './imgs/shopping.png'
function Home() {
    const [open, setOpen] = useState(false);
    const handeClick = () => setOpen(!open);
    const closeMenu = () => setOpen(false);
    return (
        <div>
            <div>
                <Router>
                    <div className="main">
                        <div className="sub_main">
                            <nav>
                                <img className="signal" src={Signal} />
                                <div onClick={handeClick} className="nav" >
                                    {open ? <img src={Menu} /> : <img className="img2" src={No} />
                                    }
                                </div>
                                <ul className={ open ? 'nav_content active' :'nav_content ' }>

                                    <li><Link className="link one" to='/ '>Foody</Link></li>
                                    <li><Link className="link one" to='/home'>Home</Link></li>
                                    <li><Link className="link one" to='/menu'>Menu</Link></li>
                                    <li><Link className="link one" to='/contact'>Contact</Link></li>
                                    <li><Link className="link one" to='/service'>Service</Link></li>
                                    <li><Link className="link one" to='/shopping'> <img className="shoppingimg" src={Shopping} /></Link></li>
                                    <li><Link className="link signin" to='/signin'>Sign in</Link></li>
                                </ul>
                            </nav>


                            <Routes>
                                <Route path='/' exact element={<Foody />} />
                                {/* <Route path='/home' element={} />
                            <Route path='/menu' element={} />
                            <Route path='/contact' element={} />
                            <Route path='/service' element={} />
                            <Route path='/signin' element={} /> */}
                            </Routes>
                        </div>
                    </div>
                </Router>
            </div>

        </div>
    )
}


export default Home