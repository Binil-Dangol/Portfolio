import style from '../css/projectCard.module.css';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import CustomNextArrow from './CustomNextArrow';
import React from 'react';
import CustomPrevArrow from './CustomPrevArrow';
import { FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ project }) {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />
  };

  const mobileSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />
  };

  return (
    <div className={style.projectCardContainer}>

      {/* <h2>Project Title: {project.name}</h2> */}

      <Slider {...settings} className={style.slider}>
        {
          project.screenshots.map((item, index) => (
            // <div className={style.SSContainer}>

            // </div>
            <div key={index} className={style.SS}>

              <img src={item} alt="project screenshot" />

              <div className={style.overlay}>
                <h2>{project.name}</h2>
                <p>{project.description}</p>
                <a target='blank' href={project.sourceCode}><button className={style.overlayBtn}>Source Code <FaExternalLinkAlt style={{ marginLeft: "0.5rem" }} /></button></a>
                {
                  project.viewLive ? <a target='blank' href={project.viewLive}><button className={style.overlayBtn}>View Live <FaExternalLinkAlt style={{ marginLeft: "0.5rem" }} /></button></a> : null
                }
              </div>

            </div>
          ))
        }
      </Slider >

    </div >
  );
}

export default ProjectCard;