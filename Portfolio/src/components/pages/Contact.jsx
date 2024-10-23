import React from 'react'
import { contact } from '../data/dummydata'
import Heading from '../common/Heading'

const Contact = () => {
  return (
    <>
    <div className="contact">
        <div className="container">
            <Heading title='Keep In Touch'/>
            <div className="content flexsb">
                <div className="right">
                    <form>
                        <div className="flex">
                            <input type="text" placeholder='Name' data-aos="zoom-in-right" data-aos-duration="1000"/>
                            <input type="text" placeholder='Email' data-aos="zoom-in-left" data-aos-duration="1000"/>
                        </div>
                        <input type="text" placeholder='Subject' data-aos="zoom-in" data-aos-duration="1000"/>
                        <textarea name="" id="" cols='30' rows='10' data-aos="zoom-in" data-aos-duration="1000"></textarea>
                        <button data-aos="zoom-in-up" data-aos-duration="1000">Submit</button>
                    </form>
                </div>
                <div className="left">
                    {contact.map((item ,i) => (
                        <div className="box" key={i} data-aos="zoom-in-down">
                            <i >{item.icon}</i>
                            <p >{item.text1}</p>
                            <p >{item.text2}</p>
                        </div>
                    ))}
                </div>
            </div>




        </div>
    
    </div>
      
    </>
  )
}

export default Contact