import React from 'react'

const Heading = ({title}) => {
  return (
    <div>
        <h2 className="heading" data-aos='fade-in-zoom' data-aos-duration="1000">
            {title}
        </h2>
    </div>
  )
}

export default Heading