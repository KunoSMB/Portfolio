import React from 'react'

const Heading = ({title}) => {
  return (
    <div>
        <h2 className="heading" data-aos='fade-in-zoom'>
            {title}
        </h2>
    </div>
  )
}

export default Heading