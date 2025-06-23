import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl fixed bottom-12 inset-x-0">
        <button
          onClick={() => setColor("red")}
          className="outline-none px-4 rounded-full text-white shadow-lg cursor-pointer"
          style={{ backgroundColor: "red" }}
        >
          Red
        </button>

        <button
          onClick={() => setColor("green")}
          className="outline-none px-4 rounded-full text-white shadow-lg cursor-pointer"
          style={{ backgroundColor: "green" }}
        >
          Green
        </button>

        <button
          onClick={() => setColor("yellow")}
          className="outline-none px-4 rounded-full shadow-lg cursor-pointer"
          style={{ backgroundColor: "yellow", color: "black" }}
        >
          Yellow
        </button>

        <button
          onClick={() => setColor("pink")}
          className="outline-none px-4 rounded-full text-white shadow-lg cursor-pointer"
          style={{ backgroundColor: "pink" }}
        >
          Pink
        </button>

        <button
          onClick={() => setColor("purple")}
          className="outline-none px-4 rounded-full text-white shadow-lg cursor-pointer"
          style={{ backgroundColor: "purple" }}
        >
          Purple
        </button>

        <button
          onClick={() => setColor("black")}
          className="outline-none px-4 rounded-full text-white shadow-lg cursor-pointer"
          style={{ backgroundColor: "black" }}
        >
          Black
        </button>

        <button
          onClick={() => setColor("grey")}
          className="outline-none px-4 rounded-full text-white shadow-lg cursor-pointer"
          style={{ backgroundColor: "grey" }}
        >
          Grey
        </button>
      </div>
    </div>
  )
}

export default App
