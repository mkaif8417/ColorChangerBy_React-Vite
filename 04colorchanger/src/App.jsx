import { useState } from "react"


function App() {
  const [color,setcolor]=useState("olive")

  return (
   <div className="w-full h-screen duration-200"
style={{backgroundColor:color}}
   >
    {/* <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2"> */}
   
    <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
 
<button
onClick={()=>setcolor("red")}
className="hover:text-sm outline-none px-4 rounded-full text-white shadow-lg"
style={{backgroundColor:"red"}}>Red</button>

<button 
onClick={()=>setcolor("green")}
className=" hover:text-smoutline-none px-4 rounded-full text-white shadow-lg "style={{backgroundColor:"green"}}>Green</button>

<button
onClick={()=>setcolor("yellow")}
 className="hover:text-sm outline-none px-4 rounded-full text-white shadow-lg "style={{backgroundColor:"yellow"}}>Yellow</button>

<button
onClick={()=>setcolor("pink")}
className="hover:text-sm outline-none px-4 rounded-full text-white shadow-lg "style={{backgroundColor:"pink"}}>Pink</button>

<button 
onClick={()=>setcolor("purple")}
className="hover:text-sm outline-none px-4 rounded-full text-white shadow-lg "style={{backgroundColor:"purple"}}>Purple</button>


<button 
onClick={()=>setcolor("black")}
className="hover:text-sm outline-none px-4 rounded-full text-white shadow-lg "style={{backgroundColor:"black"}}>Black</button>


<button 
onClick={()=>setcolor("grey")}
className="hover:text-sm outline-none px-4 rounded-full text-white shadow-lg "style={{backgroundColor:"grey"}}>Grey</button>
    {/* </div> */}
   </div>
   </div>
  )
}

export default App
