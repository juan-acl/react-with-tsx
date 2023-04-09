import { ImgHTMLAttributes, useEffect, useRef, useState } from "react"


type ImageNative = ImgHTMLAttributes<HTMLImageElement>

type LazyImageProps = {
  src: string,
  onLazyLoad?: (img: HTMLImageElement) => void
}

type Props = ImageNative & LazyImageProps

export const LazyImage = ({src, onLazyLoad, ...imgProps}: Props ):JSX.Element => { 
  const img = useRef<HTMLImageElement>(null)
  const [isLazyLoaded, setIsLazyLoaded] = useState(false)
  const [currentSrc, setCurrentSrc] = useState('data:image/svg+xml;base64,PHN2ZyB3awR0aD0iMzIwIiBozWlnaHQ0IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=');

  useEffect(() => {
    if(isLazyLoaded) {
      return ;
    }
  //new observable
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting || !img.current ) {
          return
        }
        setCurrentSrc(src);
          if(typeof onLazyLoad === 'function') {
            onLazyLoad(img.current)
      }
    })
  })
  
  //observable img
    if(img.current) {
      observer.observe(img.current)
    }
  //desconectar el observable
    return () => {
      observer.disconnect()
      console.log('ya me desconecte')
    }
}, [src, onLazyLoad, isLazyLoaded])

  return (
    <>
    <img
      src={src}
      ref={img} 
      {...imgProps}
      />
    </>
  )
}

