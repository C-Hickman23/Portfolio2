import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadAll } from "@tsparticles/all";
import logo from './assets/logo.png';
import portrait from './assets/Portrait.jpg';
import './App.css';

function App() {

  const [ init, setInit ] = useState(false);
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadAll(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };

    const options = useMemo(
      () => ({
        background: {
          color: {
            value: "#2f6540",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
          },
          modes: {
            grab :{
              distance: 600,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 175,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 4,
            straight: false,
          },
          number: {
            density: {
              enable: true,
            },
            value: 100,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }),
      [],
    );

    if (!init) return <></>;

    return (
      <div>
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />

      <header>
        <img src={logo} className="logo" alt="logo" />
        <nav>
          <a href="#about-me">About Me</a>
          <a href="#projects">Projects</a>
          <a href="#contact-info">Contact Me</a>
        </nav>
      </header>

      <div class="hero"></div>

      <main>
        <section id="about-me">
          <h2>About Me</h2>
          <div class="row">
            <img src={portrait}></img>
            <p>My name is Cardon James Hickman, born in 2004 I am currently 20 years old. 
              I grew up with 3 siblings me being the 3rd oldest and was always handy with technology as a kid.
              In middle school I got into programming and robotics aswell as the band program which I kept up with until high school.
              <br></br>
              After graduating high school in 2023 I decide to complete a full stack web development bootcamp and also currently enrolled in Salt Lake Community College.
              I have taken a decent amount of professional education for programming but my ultimate goal and what I'm currently working towards is a degree in Mechanical Engineering to go into the field of robotics.
              For programming I have experience in Java, C++, Javascript, HTML, CSS, JSX, SQL, MERN Stacks, SQL, MongoDB and more.
              </p>
          </div>
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <div className="project-list">
            <article className="project">
              <h3>Project Title</h3>
              <p>Project Description. Technologies used and the role I played in its development.</p>
            </article>
          </div>
        </section>

        <section id="contact-info">
          <h2>Contact Me</h2>
          <a href="https://github.com/C-Hickman23">Github</a> <a href="https://www.linkedin.com/in/cardon-hickman-b7491727a/">LinkedIn</a>
        </section>
      </main>
    </div>
  );
}

export default App
