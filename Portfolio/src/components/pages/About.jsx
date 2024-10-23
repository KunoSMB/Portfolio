import Heading from "../common/Heading"
import { about } from "../data/dummydata"

const About = () => {
  return (
    <>
        <section className="about">
           <div >
                {
                    about.map((val, i) =>(
                        <div className="aboutContainer" key={i}>
                            <div className="left">
                                <img src={val.cover} alt="" />
                            </div>
                            <div className="right" data-aos='fade-down-left'>
                                <Heading title='About Me'/>
                                <p data-aos='fade-left' data-aos-duration="4000">{val.desc}</p>
                                <p>{val.desc1}</p>
                                <div className="btnContainer" data-aos='fade-up' data-aos-duration="4000">
                                    <button className="weirdBtn">Download CV</button>
                                    <button className="primaryBtn">Download CV</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
           </div>
        </section>
    </>
  )
}

export default About