import React from 'react'
import { home } from '../data/dummydata'
import Typewriter from 'typewriter-effect'
import { Loop } from '@mui/icons-material'
import TypewriterComponent from 'typewriter-effect'

const Hero = () => {
  return (
    <>
        <section className="hero">
            
            {home.map((val, i) => (
                <div className="heroContainer" key={i}>
                    <h3>
                        {val.text}
                    </h3>
                    <h1>
                       <TypewriterComponent options={{
                            strings: [`${val.name}`, `${val.post}`],
                            autoStart: true,
                            loop: true,
                        }} />
                    </h1>
                    <p>{val.desc}</p>
                    <button className="primaryBtn">Download Cv</button>
                </div>
            ))}
        </section>
    </>
  )
}

export default Hero