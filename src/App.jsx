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
            <p>Introduction about myself, my skills, experience, and what I'm passionate about.</p>
          </div>
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <div className="project-list">
            {/* Map through your projects here */}
            <article className="project">
              <h3>Project Title</h3>
              <p>Project Description. Technologies used and the role I played in its development.</p>
            </article>
            {/* Repeat for other projects */}
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
