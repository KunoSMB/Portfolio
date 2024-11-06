import React from "react";
import { portfolio } from "../data/dummydata";
import { useState } from "react";
import { Visibility } from "@mui/icons-material";
import Heading from "../common/Heading";

const allCategory = ["all", ...new Set(portfolio.map((item) => item.category))];
const Portfolio = () => {
  const [list, setList] = useState(portfolio);
  const [category, setCategory] = useState(allCategory);

  const filterItems = (category) => {
    const newItems = portfolio.filter((item) => item.category == category);
    setList(newItems);

    if (category == "all") {
      setList(portfolio);
    }
  };
  return (
    <>
      <article>
        <div className="container">
          <Heading title="Projects" />
          <div className="catButton">
            {category.map((category, i) => (
              <button
                className="primaryBtn"
                key={i}
                onClick={() => filterItems(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="content grid3">
          {list.map((item, i) => (
            <div className="box" key={i} data-aos="flip-left">
              <div
                className="img"
                data-aos="flip-left"
                data-aos-duration="2000"
              >
                <img src={item.cover} alt=""/>
              </div>
              <div
                className="overlay"
                data-aos="flip-left"
                data-aos-duration="2000"
                onClick={() => window.open(item.url, "_blank")}
                >
                    <h3>{item.title}</h3>
                    <span style={{textAlign :'center'}}>{item.name}</span>
                    <Visibility />
              </div>
            </div>
          ))}
        </div>
      </article>
    </>
  );
};

export default Portfolio;
