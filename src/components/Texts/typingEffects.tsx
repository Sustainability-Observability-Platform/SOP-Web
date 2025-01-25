"use client"
import React from "react";
import { ReactTyped } from "react-typed";

export default function Typewriter() {
  return (
    <div className="font-title text-xl">
      <p className="h-[calc(2rem*2)] px-4 md:h-auto">ESG discolure unified data lake for large 
        <strong className="ml-2"><ReactTyped strings={["manufacturers.", "e-commerce.", "travel agency."]} typeSpeed={40} backSpeed={50} loop /></strong>
      </p>
    </div>
  );
}
