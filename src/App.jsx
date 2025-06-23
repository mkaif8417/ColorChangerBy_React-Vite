import { useState } from "react";

const colors = [
  { name: "Red", value: "red", textColor: "white" },
  { name: "Green", value: "green", textColor: "white" },
  { name: "Yellow", value: "yellow", textColor: "black" },
  { name: "Pink", value: "pink", textColor: "white" },
  { name: "Purple", value: "purple", textColor: "white" },
  { name: "Black", value: "black", textColor: "white" },
  { name: "Grey", value: "grey", textColor: "white" },
];

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl fixed bottom-12 inset-x-0">
        {colors.map(({ name, value, textColor }) => (
          <button
            key={value}
            onClick={() => setColor(value)}
            className={`outline-none px-4 rounded-full shadow-lg cursor-pointer text-${textColor}`}
            style={{ backgroundColor: value, color: textColor }}
            aria-label={`Set background color to ${name}`}
          >
            {name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
