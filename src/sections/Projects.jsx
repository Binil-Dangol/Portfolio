import { useMediaQuery } from 'react-responsive';

import quizSS1 from "../assets/screenshots/quizSS1.png";
import quizSS2 from "../assets/screenshots/quizSS2.png";
import quizSS3 from "../assets/screenshots/quizSS3.png";
import quizSS4 from "../assets/screenshots/quizSS4.png";

import todoSS1 from "../assets/screenshots/todoSS1.png";
import todoSS2 from "../assets/screenshots/todoSS2.png";
import todoSS3 from "../assets/screenshots/todoSS3.png";

import xoSS1 from "../assets/screenshots/xoSS1.png";
import xoSS2 from "../assets/screenshots/xoSS2.png";

import weatherSS1 from "../assets/screenshots/SS_(Nest Hub).png";
import weatherSS2 from "../assets/screenshots/SS_(iPhone SE).png";

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

  const tic_tac_toe = {
    name: "Tic-Tac-Toe",
    screenshots: [
      xoSS1,
      xoSS2
    ],
    description: "A simple Tic Tac Toe game built with React.js and Vite.",
    sourceCode: "https://github.com/Binil-Dangol/Tic-Tac-Toe",
    viewLive: "https://binil-dangol.github.io/Tic-Tac-Toe/"
  }

  const weather_app = {
    name: "Weather App",
    screenshots: [
      weatherSS1,
      weatherSS2
    ],
    description: "A weather app that fetches weather data from openweathermap API of the requested city.",
    sourceCode: "https://github.com/Binil-Dangol/Weather-App",
    viewLive: "https://binil-dangol.github.io/Weather-App/"
  }

  const projects = [quiz, todo, tic_tac_toe, weather_app];

  const isMobile = useMediaQuery({ query: '(max-width: 499px)' });

  return (
    <div>

      {isMobile ? <MobileComponent projects={projects} /> : <DesktopComponent projects={projects} />}

    </div>
  );
}

export default Projects;