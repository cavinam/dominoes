"use client";

import { useState } from "react";
import DominoList from "@/app/components/DominoList";
import DominoControls from "@/app/components/DominoControl";
import React from "react";

type Domino = [number, number];

export default function Home() {
  const defaultDominoes: Domino[] = [
    [1, 5],
    [4, 6],
    [3, 4],
    [2, 1],
    [1, 2],
    [1, 1],
  ];

  const [dominoes, setDominoes] = useState<Domino[]>(defaultDominoes);

  const resetDominoes = () => {
    setDominoes(defaultDominoes);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Dominoes</h1>

      {/* Render Source Section */}
      <div className="mt-2">
        Source
        {dominoes.map((domino, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 px-2 py-1 m-1 rounded-md border"
          >
            [{domino[0]}, {domino[1]}]
          </span>
        ))}
      </div>
      <div className="mt-2">
        <p>Double Numbers: {dominoes.filter(([a, b]) => a === b).length}</p>
      </div>
      <DominoList dominoes={dominoes} />
      <div className="mt-4">
        <DominoControls
          dominoes={dominoes}
          setDominoes={setDominoes}
          resetDominoes={resetDominoes}
        />
      </div>
    </div>
  );
}
