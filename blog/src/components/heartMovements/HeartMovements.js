import { useEffect } from "react";

const HeartMovements = ({ particlesArray, canvasRef }) => {
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const handleParticles = () => {
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
        if (particlesArray[i].radius <= 0.3) {
          particlesArray.splice(i, 1);
          i--;
        }
      }
    };
    const animate = () => {
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      handleParticles();
      requestAnimationFrame(animate);
    };

    animate();
  });
  return <div></div>;
};

export default HeartMovements;
