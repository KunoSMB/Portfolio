import React from 'react'
import { testimonials } from '../data/dummydata'
import { FormatQuote } from '@mui/icons-material'
import Heading from '../common/Heading'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


    

const Testimonials = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      }

  return (
    <>
        <section className="testimonials hero">
            <div className="container">
                <Slider {...settings}>
                {testimonials.map((val,i) => (
                    <div className="box" key={i}>
                        <i>
                            <FormatQuote />
                        </i>
                        <p>{val.text}</p>
                        <div className="img">
                            <img src={val.image} alt="" />
                        </div>
                        <h3>{val.name}</h3>
                        <label>{val.post}</label>
                    </div>
                ))}
                </Slider>
            </div>
        </section>
    </>
  )
}

export default Testimonials