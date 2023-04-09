import { MouseEventHandler, useState } from "react";
import { LazyImage } from "../components/LazyImage";
import { random } from "lodash"
import Head from "next/head";

export default function Home() {
  
  const myRandom = () => random(1, 123);
  //const myRandom = () => Math.floor(Math.random() * 123) +1;
  
  const [images, setImages] = useState<string[]>([]);

  const handleFox: MouseEventHandler<HTMLButtonElement> = (e) => {
    const newFox = `https://randomFox.ca/images/${myRandom()}.jpg`
    setImages([...images, newFox])
    //window.plausible("")
  }
  return (
    <div>
      <Head>
        <title>React with typescript</title>
        <script 
          defer
          data-domain="yourdomain.com"
          src="https://plausible.io/js/script.js"
        ></script>
      </Head>
    <main>
      <h1 className="text-3xl font-bold text-center underline" >Foxes</h1>
        <div className="flex justify-center" >
      <button className="tracking-wider bg-indigo-500 text-3xl font-bold rounded-full py-2 px-3 " onClick={handleFox} >New Fox</button>
        </div>
      {images.map((item, index) => (
        <div key={index} className="flex items-stretch gap-10 ">
            <div className='py-4 gap-10'>
          <LazyImage
            width={150} 
            height={150} 
            className="rounded border-gray-300 " 
            src= {item}
            onClick={() => console.log('props cambiadas')}
            onLazyLoad={(img) => {
              console.log('imagen en onLazyLoad')
            }}
          />
          </div>
        </div>
      ))}
    </main>
</div>
  )
}
