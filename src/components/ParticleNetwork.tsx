"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
<<<<<<< HEAD
import type { Container, ISourceOptions } from "@tsparticles/engine";
=======
import { type Container, type ISourceOptions } from "@tsparticles/engine";
>>>>>>> bd8b04e (Add in network particles to home screen)
import { loadSlim } from "@tsparticles/slim";

import "@styles/ParticleNetwork.css";

enum MoveDirection {
  bottom = "bottom",
  bottomLeft = "bottom-left",
  bottomRight = "bottom-right",
  left = "left",
  none = "none",
  right = "right",
  top = "top",
  topLeft = "top-left",
  topRight = "top-right",
  outside = "outside",
  inside = "inside",
}

enum OutMode {
  bounce = "bounce",
  none = "none",
  out = "out",
  destroy = "destroy",
  split = "split",
}

<<<<<<< HEAD
const ParticleNetwork = () => {
  const [init, setInit] = useState(false);
  const [isParticlesLoaded, setIsParticlesLoaded] = useState(false);
=======
export const ParticleNetwork = () => {
  const [init, setInit] = useState(false);
<<<<<<< HEAD
>>>>>>> bd8b04e (Add in network particles to home screen)
=======
  const [isParticlesLoaded, setIsParticlesLoaded] = useState(false);
>>>>>>> 4f18b83 (Fix particle fade in to only trigger once the engine is loaded)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
<<<<<<< HEAD
<<<<<<< HEAD
    setIsParticlesLoaded(true);
=======
>>>>>>> bd8b04e (Add in network particles to home screen)
=======
    setIsParticlesLoaded(true);
>>>>>>> 4f18b83 (Fix particle fade in to only trigger once the engine is loaded)
  };

  const options: ISourceOptions = useMemo(
    () => ({
      fpsLimit: 120,
      fullScreen: {
        enable: false,
        zIndex: -2,
      },
      particles: {
        color: {
          value: "#FF555B",
        },
        links: {
          color: "#FF555B",
          distance: 150,
          enable: true,
          opacity: 1,
<<<<<<< HEAD
<<<<<<< HEAD
          width: 2.5,
=======
          width: 2,
>>>>>>> bd8b04e (Add in network particles to home screen)
=======
          width: 2.5,
>>>>>>> 8ff1451 (Fix particle loading problem by fading them in)
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.out,
          },
          random: false,
          speed: 3,
          straight: true,
        },
        number: {
          density: {
            enable: true,
          },
          value: 100,
        },
        opacity: {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          value: 0.7,
=======
          value: 0.5,
>>>>>>> bd8b04e (Add in network particles to home screen)
=======
          value: 1,
>>>>>>> 1d22529 (Move network particles to be overlapping in the correct location)
=======
          value: 0.7,
>>>>>>> 1fd6f67 (Adjust parameters on particles, adjust speed of mobile menu opening)
        },
        shape: {
          type: "circle",
        },
        size: {
<<<<<<< HEAD
<<<<<<< HEAD
          value: { min: 5, max: 5 },
=======
          value: { min: 3, max: 5 },
>>>>>>> bd8b04e (Add in network particles to home screen)
=======
          value: { min: 5, max: 5 },
>>>>>>> 8ff1451 (Fix particle loading problem by fading them in)
        },
      },
      detectRetina: true,
    }),
    [],
  );

  if (init) {
    return (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      <div
        className={`h-[80vh] absolute inset-0 -z-10 opacity-0 ${isParticlesLoaded && "opacity-0 animate-fade-in"}`}
      >
=======
      <div style={{ height: "100vh" }}>
>>>>>>> bd8b04e (Add in network particles to home screen)
=======
      <div className="h-[80vh] absolute inset-0 -z-10">
>>>>>>> 1d22529 (Move network particles to be overlapping in the correct location)
=======
      <div
        className={`h-[80vh] absolute inset-0 -z-10 opacity-0 ${isParticlesLoaded && "opacity-0 animate-fade-in"}`}
      >
>>>>>>> 4f18b83 (Fix particle fade in to only trigger once the engine is loaded)
        <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={options} />
      </div>
    );
  }

  return <></>;
};
<<<<<<< HEAD

export default ParticleNetwork;
=======
>>>>>>> bd8b04e (Add in network particles to home screen)
