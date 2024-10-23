import React from 'react'
import { social } from '../data/dummydata'

const Footer = () => {
  return (
    <footer>
        {social.map((item ,i) => (
            <>
                <i key={i} data-aos="zoom-in" data-aos-duration="1000">{item.icon}</i>
            </>
        ))}
        <p>All Rights Reserved 2024</p>
    </footer>
  )
}

export default Footer