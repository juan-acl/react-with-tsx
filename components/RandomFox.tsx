type Props = { 
  image: string,
}


export const RandomFox = ({image}: Props ):JSX.Element => { 
  //const image:string = 
  return (
    <>
    <img width={320} height="auto" className="rounded" src={image} />
    </>
  )
}

