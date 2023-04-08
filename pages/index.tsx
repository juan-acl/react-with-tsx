import { RandomFox } from "@/components/RandomFox"
import { useState } from "react";

export default function Home() {

  const random = () => Math.floor(Math.random() * 123) +1;
  
  const [images, setImages] = useState<string[]>([
`https://randomFox.ca/images/${random()}.jpg`,
  ]);
  return (
    <main>
      <h1 className="text-3xl font-bold underline" >holaaaa</h1>
      {images.map((item, index) => (
      <div key={index} >
      <RandomFox image= {item}/>
      </div>
      ))}
    </main>
  )
}
