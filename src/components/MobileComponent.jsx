import style from '../css/projects.module.css';
import ProjectCard from './ProjectCard';
import { FaExternalLinkAlt } from "react-icons/fa";

function MobileComponent({ projects }) {
  return (
    <>

      <div className={style.projectContainer}>

      <h1>Projects</h1>
        {
          projects.map((item, index) => (
            <div className={style.projectContainer} key={index}>
              <h2>{item.name}</h2>
              <ProjectCard project={item} />
              <p style={{width:"80%"}}>{item.description}</p>
              <a target='blank' href={item.sourceCode}><button>Source Code <FaExternalLinkAlt style={{ marginLeft: "0.5rem" }} /></button></a>
              {
                item.viewLive ? <a target='blank' href={item.viewLive}><button>View Live <FaExternalLinkAlt style={{ marginLeft: "0.5rem" }} /></button></a> : null
              }
            </div>
          ))
        }
      </div>
    </>


  );
}

export default MobileComponent;