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

import MovieSS1 from "../assets/screenshots/MovieSS1.png";
import MovieSS2 from "../assets/screenshots/MovieSS2.png";
import MovieSS3 from "../assets/screenshots/MovieSS3.png";

import AccSS1 from "../assets/screenshots/AccSS1.png";
import AccSS2 from "../assets/screenshots/AccSS2.png";
import AccSS3 from "../assets/screenshots/AccSS3.png";
import AccSS4 from "../assets/screenshots/AccSS4.png";

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

  const movie_search = {
    name: "Movie Search",
    screenshots: [
      MovieSS1,
      MovieSS2,
      MovieSS3
    ],
    description: "A movie search app that displays top movies and allows users to search for movies.",
    sourceCode: "https://github.com/Binil-Dangol/Movie-Search",
    viewLive: "https://binil-dangol-movie-search.netlify.app/"
  }

  const accordion = {
    name: "Accordion",
    screenshots: [
      AccSS1,
      AccSS2,
      AccSS3,
      AccSS4
    ],
    description: "A React + Vite project demonstrating a configurable Accordion component with single- and multi-selection modes, plus light/dark theme toggle.",
    sourceCode: "https://github.com/Binil-Dangol/Accordion",
    viewLive: "http://binil-dangol.github.io/Accordion/"
  }

  const projects = [quiz, todo, tic_tac_toe, weather_app, movie_search, accordion];

  const isMobile = useMediaQuery({ query: '(max-width: 499px)' });

  return (
    <div>

      {isMobile ? <MobileComponent projects={projects} /> : <DesktopComponent projects={projects} />}

    </div>
  );
}

export default Projects;