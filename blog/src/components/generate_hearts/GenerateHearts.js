import React, { useEffect } from "react";

const GenerateHearts = ({ canvasRef }) => {
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const mouse = {
      x: undefined,
      y: undefined,
    };
    class Particle {
      constructor() {
        this.x = mouse.x;
        this.y = mouse.y;
        this.radius = Math.random() * 80 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
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
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI);
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
  return null;
};

export default GenerateHearts;
