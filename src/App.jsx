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
              Growing up, I had three siblings, and I was always handy with technology.
              In middle school, I got into programming and robotics, and I also joined the band program, which I continued until high school.
              During high school, I completed AP Physics 1 & 2, AP Computer Science A, and earned my FAA Remote Pilot License.
              <br></br><br></br>
              After graduating high school in 2023, I decided to complete a full-stack web development bootcamp and am currently enrolled at Salt Lake Community College.
              I have taken professional courses in programming, but my ultimate goal is to earn a degree in Mechanical Engineering to enter the field of robotics.
              I have experience in programming languages and technologies including Java, C++, JavaScript, HTML, CSS, JSX, SQL, MERN stack, MongoDB, and more.
              </p>
          </div>
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <div className="project-list">
            <article className="project">
            
              {/* <Carousel plugins={['arrows']}>
                <div class = "project-div">
                  <img src={portrait} />
                  <h3>Title</h3>
                </div>
                <div>
                  <img src={portrait} />
                  <h3>Title2</h3>
                </div>
              </Carousel> */}

            </article>
          </div>
        </section>

        <section id="contact-info">
          <h2>Contact Me</h2>
          <button size="lg" href="https://github.com/C-Hickman23">Github</button>
          <button href="https://www.linkedin.com/in/cardon-hickman-b7491727a/">LinkedIn</button>
        </section>
      </main>
    </div>
  );
}

export default App
