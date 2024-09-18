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
                            <div className="left" >
                                <img src={val.cover} alt="" />
                            </div>
                            <div className="right">
                                <Heading title='About Me'/>
                                <p>{val.desc}</p>
                                <p>{val.desc1}</p>
                                <div className="btnContainer">
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