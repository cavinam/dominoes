type Domino = [number, number];

interface DominoControlsProps {
  dominoes: Domino[];
  setDominoes: React.Dispatch<React.SetStateAction<Domino[]>>;
  resetDominoes: () => void;
}

export default function DominoControls({
  dominoes,
  setDominoes,
  resetDominoes,
}: DominoControlsProps) {
  const sortDominoes = (asc: boolean = true) => {
    const sorted = [...dominoes].sort((a, b) =>
      asc ? a[0] + a[1] - (b[0] + b[1]) : b[0] + b[1] - (a[0] + a[1])
    );
    setDominoes(sorted);
  };

  const flipDominoes = () => {
    setDominoes(dominoes.map(([a, b]) => [b, a]));
  };

  const removeDuplicates = () => {
    const unique = dominoes.filter(
      (d, index, self) =>
        index ===
        self.findIndex(
          ([a, b]) => (a === d[0] && b === d[1]) || (a === d[1] && b === d[0])
        )
    );
    setDominoes(unique);
  };

  const removeByTotal = (total: number) => {
    setDominoes(dominoes.filter(([a, b]) => a + b !== total));
  };

  return (
    <div>
      <div className="mt-4 space-x-2">
        <button
          onClick={() => sortDominoes(true)}
          className="p-2 bg-blue-500 text-white"
        >
          Sort (ASC)
        </button>
        <button
          onClick={() => sortDominoes(false)}
          className="p-2 bg-blue-500 text-white"
        >
          Sort (DESC)
        </button>
        <button onClick={flipDominoes} className="p-2 bg-yellow-500 text-white">
          Flip
        </button>
        <button
          onClick={removeDuplicates}
          className="p-2 bg-red-500 text-white"
        >
          Remove Duplicates
        </button>
      </div>
      <div className="mt-4">
        <input
          type="number"
          id="removeTotal"
          placeholder="Enter Total"
          className="p-2 border"
        />
        <button
          onClick={() => {
            const total = parseInt(
              (document.getElementById("removeTotal") as HTMLInputElement).value
            );
            if (!isNaN(total)) removeByTotal(total);
          }}
          className="p-2 bg-red-500 text-white ml-2"
        >
          Remove by Total
        </button>
        <button
          onClick={resetDominoes}
          className="border p-2 bg-blue-500 text-white rounded"
        >
          Reset to Default
        </button>
      </div>
    </div>
  );
}
