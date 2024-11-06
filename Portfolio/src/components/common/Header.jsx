import React, { useState } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { navlink } from '../data/dummydata.jsx'
import { Menu, Home } from '@mui/icons-material'


const Header = () => {

    const [responsive ,setResponsive] = useState(false)

  return (
    <>
     <header>
        <div className="container flexsb">
            <div className='logoContainer'>
                <a href="/#" >
                <Home  className='logo'/>
                </a>
            </div>
            <div className={responsive ? 'hideMenu' : 'nav'}>
                {navlink.map((links, i) => (
                    <Link to={links.url} key={i} data-aos="zoom-in">
                        {links.text}
                    </Link>
                ))}
            </div>
            <button className='toggle' onClick={() => setResponsive(!responsive)}>
                <Menu className = 'icon'></Menu>
            </button>
        </div>
     </header>
    </>
  )
}

export default Header