import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticleEffect = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(() => ({
    background: {
      color: { value: "#000000" },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: { enable: true, mode: "push" },
        onHover: { enable: true, mode: "repulse" },
      },
      modes: {
        push: { quantity: 4 },
        repulse: {
          distance: 100,
          duration: 0.1,
        },
      },
    },
    particles: {
      color: { value: "#ffffff" },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 2,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: { default: "bounce" },
        speed: 2,
        straight: false,
      },
      number: {
        density: { enable: true },
        value: 200,
      },
      opacity: { value: 1 },
      shape: { type: "circle" },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  }), []);

  if (init) {
    return (
      <Particles
        id="tsparticles"
        options={options}
      />
    );
  }

  return null;
};

export default ParticleEffect;
