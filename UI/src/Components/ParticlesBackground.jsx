import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine); // ✅ no "checkVersion" issues
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
      }}
      options={{
        fullScreen: { enable: false },
        background: { color: { value: 'transparent' } },
        fpsLimit: 60,
        particles: {
          number: { value: 80, density: { enable: true, area: 800 } },
          color: { value: '#ffffffff' },
          shape: { type: 'circle' },
          opacity: { value: 0.3 },
          size: { value: 4, random: true },
          links: {
            enable: true,
            distance: 130,
            color: '#ffffffff',
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1.5,
            direction: 'none',
            random: false,
            straight: false,
            outModes: { default: 'out' },
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: 'repulse' },
            onClick: { enable: true, mode: 'push' },
          },
          modes: {
            repulse: { distance: 100 },
            push: { quantity: 4 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
