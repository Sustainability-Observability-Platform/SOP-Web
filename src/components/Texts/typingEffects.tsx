"use client"
import React from "react";
import { ReactTyped } from "react-typed";

export default function Typewriter() {
  const [currentText, setCurrentText] = React.useState('');
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const text = ["manufacturers."];
  return (
    <div>
      <strong><ReactTyped strings={["manufacturers.", "e-commerce.","travel agency."]} typeSpeed={40} backSpeed={50} loop /></strong>
    </div>
  );
}
