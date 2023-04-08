import { RandomFox } from "@/components/RandomFox"

export default function Home() {

const random = () => Math.floor(Math.random() * 123) +1;

  return (
    <main>
      <h1 className="text-3xl font-bold underline" >holaaaa</h1>
      <RandomFox image= {`https://randomFox.ca/images/${random()}.jpg`}/>
    </main>
  )
}
