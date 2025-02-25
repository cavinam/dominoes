import React from "react";

type Domino = [number, number];

interface DominoListProps {
  dominoes: Domino[];
}

export default function DominoList({ dominoes }: DominoListProps) {
  return (
    <div className="max-w-fit grid grid-flow-col gap-2 mt-4 border rounded-md bg-gray-100">
      {dominoes.map((domino, index) => (
        <div
          key={index}
          className="w-8 h-16 bg-white border-2 border-black rounded-md flex flex-col items-center justify-between p-1 shadow-md"
        >
          <div className="text-sm font-bold">{domino[0]}</div>
          <div className="w-full h-[1px] bg-black"></div>
          <div className="text-sm font-bold">{domino[1]}</div>
        </div>
      ))}
    </div>
  );
}
