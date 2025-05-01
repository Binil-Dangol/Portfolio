import Slider from "react-slick";
import style from '../css/projects.module.css';
import ProjectCard from './ProjectCard';
import CustomPrevArrow1 from '../components/CustomPrevArrow1';
import CustomNextArrow1 from '../components/CustomNextArrow1';

function DesktopComponent({ projects }) {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    prevArrow: <CustomPrevArrow1 />,
    nextArrow: <CustomNextArrow1 />
  };

  return (
    <div className={style.projectContainer}>

      <h1>Projects</h1>

      <Slider {...settings} className={style.slider}>

        {
          projects.map((item, index) => (
            <ProjectCard project={item} key={index} />
          ))
        }

      </Slider>

    </div>
  );
}

export default DesktopComponent;