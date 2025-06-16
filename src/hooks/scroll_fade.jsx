import {useState,useRef, useEffect} from 'react'

export default function Scroll_fade(option){
      const ref = useRef()
      const [visible,setvisible] =  useState(false)

useEffect(()=>{
      const observer = new IntersectionObserver(([e])=>{
        setvisible(e.isIntersecting)
      },option)
     if(ref.current){
        observer.observe(ref.current)
     }
},[option])
 return[visible,ref]

}
