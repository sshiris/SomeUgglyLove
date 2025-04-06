import { useEffect, useRef } from "react";
import HeartMovements from "../heartMovements/HeartMovements";

const GenerateHearts = ({ canvasRef }) => {
  const particlesArray = useRef([]);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const mouse = {
      x: undefined,
      y: undefined,
    };

    canvas.addEventListener("click", (event) => {
      mouse.x = event.x;
      mouse.y = event.y;
      for (let i = 0; i < 3; i++) {
        particlesArray.current.push(new Particle());
      }
    });
    canvas.addEventListener("mousemove", (event) => {
      mouse.x = event.x;
      mouse.y = event.y;
      for (let i = 0; i < 2; i++) {
        particlesArray.current.push(new Particle());
      }
    });

    class Particle {
      constructor() {
        this.x = mouse.x;
        this.y = mouse.y;
        this.radius = Math.random() * 80 + 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        const hue = Math.random() * 30 + 260; //and a purple
        this.color = `hsl(${hue}, 100%, 50%)`;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.radius > 0.2) {
          this.radius -= 0.1;
        }
      }

      draw() {
        this.update();
        ctx.fillStyle = this.color;
        ctx.beginPath();

        ctx.moveTo(this.x, this.y);
        ctx.arc(this.x - this.radius / 2, this.y, this.radius, 0, Math.PI);
        ctx.arc(this.x, this.y, this.radius / 2, Math.PI, 2 * Math.PI);
        ctx.arc(
          this.x - this.radius,
          this.y,
          this.radius / 2,
          Math.PI,
          2 * Math.PI
        );

        ctx.closePath();
        ctx.fill();
      }
    }
  });
  return (
    <div>
      <HeartMovements
        canvasRef={canvasRef}
        particlesArray={particlesArray.current}
      />
    </div>
  );
};

export default GenerateHearts;
