import React, { useState } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { navlink } from '../data/dummydata.jsx'
import logo from '../data/images/logo.png'
import { Menu } from '@mui/icons-material'


const Header = () => {

    const [responsive ,setResponsive] = useState(false)

  return (
    <>
     <header>
        <div className="container flexsb">
            <div className='logoContainer'>
                <img className='logo' src={logo} alt="logo of sofiane's brand" />
            </div>
            <div className={responsive ? 'hideMenu' : 'nav'}>
                {navlink.map((links, i) => (
                    <Link to={links.url} key={i}>
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