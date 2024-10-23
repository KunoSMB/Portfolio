import React from 'react'
import Heading from '../common/Heading'
import { blog } from '../data/dummydata'

const Blog = () => {
  return (
    <section className='blog'>
        <div className="container">
            <Heading title='Blog'/>
            <div className="content grid3">
                {blog.map((val ,i) => (
                    <div key={i} className="box" data-aos="flip-up" data-aos-duration="1000">
                        <div className="img" data-aos="flip-up" data-aos-duration="1000">
                            <img src={val.cover} alt="" />
                        </div>
                        <div className="text">
                            <h3 data-aos="flip-up" data-aos-duration="1000">{val.title}</h3>
                            <label data-aos="flip-up" data-aos-duration="1000">By {val.author} {val.date}</label>
                            <p data-aos="flip-up">{val.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Blog