import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadAll } from "@tsparticles/all";
import logo from './assets/logo.png';
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

    if (init) {
      return (
        <div>
          <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={options}
          />

          <header>
            <img src={logo} class="logo" alt="logo"/>
            <h1>Cardon Hickman</h1>
          </header>

          <nav>
            <a href="#About-Me">About Me</a>
            <a href="#Projects">Projects</a>
            <a href="#Contacts">Contact Info</a>
          </nav>
        </div>
      );
    }
  
    return <></>;

  // return (
  //   <>
  //   <div>

  //     <header>
  //       <img src={logo} class="logo" alt="logo"/>
  //       <h1>Cardon Hickman</h1>
  //     </header>

  //     <nav>
  //       <a href="#About-Me">About Me</a>
  //       <a href="#Projects">Projects</a>
  //       <a href="#Contacts">Contact Info</a>
  //     </nav>
  //     </div>
  //   </>
  // )
}

export default App
