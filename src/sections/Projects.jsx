import { useMediaQuery } from 'react-responsive';

import quizSS1 from "../assets/screenshots/quizSS1.png";
import quizSS2 from "../assets/screenshots/quizSS2.png";
import quizSS3 from "../assets/screenshots/quizSS3.png";
import quizSS4 from "../assets/screenshots/quizSS4.png";

import todoSS1 from "../assets/screenshots/todoSS1.png";
import todoSS2 from "../assets/screenshots/todoSS2.png";
import todoSS3 from "../assets/screenshots/todoSS3.png";

import DesktopComponent from '../components/DesktopComponent';
import MobileComponent from '../components/MobileComponent';

function Projects() {

  const quiz = {
    name: "Quiz App",
    screenshots: [
      quizSS1,
      quizSS2,
      quizSS3,
      quizSS4
    ],
    description: "A responsive MERN-stack quiz app featuring flag and map quizzes, complete with user authentication and score tracking.",
    tech: "MERN",
    sourceCode: "https://github.com/Binil-Dangol/quiz_app"
  }

  const todo = {
    name: "To-do List App",
    screenshots: [
      todoSS1,
      todoSS2,
      todoSS3
    ],
    description: "A responsive React JS to-do list app featuring task addition, deletion, and reordering.",
    sourceCode: "https://github.com/Binil-Dangol/To-Do-List",
    viewLive: "https://binil-dangol.github.io/To-Do-List/"
  }

  const projects = [quiz, todo];

  const isMobile = useMediaQuery({ query: '(max-width: 499px)' });

  return (
    <div>

      {isMobile ? <MobileComponent projects={projects} /> : <DesktopComponent projects={projects} />}

    </div>
  );
}

export default Projects;