import React, { useEffect, useRef, useState } from "react";
import "./Background.css";
import GenerateHearts from "../generate_hearts/GenerateHearts";

function Background() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();

    window.addEventListener("resize", setCanvasSize);

    return () => {
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  return (
    <div>
      <canvas ref={canvasRef}></canvas>;
      <GenerateHearts canvasRef={canvasRef} />
    </div>
  );
}

export default Background;
