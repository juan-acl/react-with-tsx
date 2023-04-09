import { MouseEventHandler, useState } from "react";
import { LazyImage } from "../components/LazyImage";
import { random } from "lodash"

export default function Home() {
  
  const myRandom = () => random(1, 123);
  //const myRandom = () => Math.floor(Math.random() * 123) +1;
  
  const [images, setImages] = useState<string[]>([]);

  const handleFox: MouseEventHandler<HTMLButtonElement> = (e) => {
    const newFox = `https://randomFox.ca/images/${myRandom()}.jpg`
    setImages([...images, newFox])
  }
  return (
    <main>
      <h1 className="text-3xl font-bold underline" >holaaaa</h1>
      <button onClick={handleFox} >New Fox</button>
      {images.map((item, index) => (
        <div key={index} className="p-4">
          <LazyImage
            width={320} 
            height="auto" 
            className="rounded border-gray-300 " 
            src= {item}
            onClick={() => console.log('props cambiadas')}
            onLazyLoad={(img) => {
              console.log('imagen en onLazyLoad')
            }}
          />
        </div>
      ))}
    </main>
  )
}
