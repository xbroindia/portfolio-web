 import React from 'react'
 import pic1 from '../src/assets/452864719_1186091555916067_2408008054769092713_n.jpg'
 import pic2 from '../src/assets/xbrocoder.jpg'
 import Shootingstar from './Shootingstar.jsx'
 import Scroll_fade from '../src/hooks/scroll_fade.jsx'

 import { useEffect,useState } from 'react'

 export default function Header() {

    const[visible1,ref1]=Scroll_fade({threshold:0.5})
    const [name, setname] = useState('')
    const [char ,setchar] = useState(0)
    const [editing, setediting] = useState(true)
    const [btn,setbtn] = useState(false)
    const [menue , setmenue] = useState("none")

    const content = "Hi I am a Frontend Web Developer I build modern, Responsive, and Interactive user Interfaces.."

   useEffect(
  ()=>{
  if(btn){
    setmenue("hameburger-menue")
    } 
  else{
    setmenue("none")
  }
  }
)


    useEffect(()=>{
      let timeout; 
         if(editing && char < content.length){
         timeout =  setTimeout(() => {
          setname((prev)=>prev + content[char])
          setchar((prev)=>prev +1)
          },80);
    }
    if(editing && char === content.length){
     setTimeout(() => {
      setediting(false)
     },2000);  
    }
    return ()=> clearTimeout(timeout)
  },[char,content,editing])

  useEffect(()=>{
    let timeout
     if(!editing && char > 0){
           timeout = setTimeout(() => {
             setname((prev)=> prev.slice(0,-1))
             setchar((prev)=> prev - 1)
           },50);
     }
     if(!editing && char === 0){
    timeout = setTimeout(()=>{
        setediting(true)
      },500)
     }
     return ()=> clearTimeout(timeout)
  },[char,editing])


   return (
    <header className=' min-h-[100vh] w-full  bg-black overflow-hidden' id='home'>
    <Shootingstar/>
 <nav className='h-[76px]  w-full bg-black/50 backdrop-blur-3xl z-[1000] fixed flex gap-[20%]  justify-center items-center'>
     <ul className=' gap-[80px]  md:text-[18px] lg:text-[26px] font-bold  hidden md:flex item-center' id={menue} onClick={()=>{setbtn(false)}}>
      <li><a href="#home" className='nav-a'>home</a></li>
      <li><a href="#about" className='nav-a'>about</a></li>
      <li><a href="#projects" className='nav-a'>projects</a></li>
      <li><a href="#contactus" className='nav-a'>contact us</a></li>
     </ul>
     <span className=' text-5xl text-white block md:hidden' onClick={()=>{setbtn(true)}}>≡</span>
     <div className='flex items-center '>
      <img src={pic2} className={` transition-all rounded-[50%] h-[60px] lg:h-[70px] shadow-2xl `}/>
      <h1 className=' text-white text-[16px] lg:text-xl font-bold'>XBROCODER</h1>
     </div>
 </nav> 
    <div className='flex flex-col md:flex-row items-center justify-center gap-[20%]'>
    <div className=' text-white text-3xl lg:text-5xl w-[400px] sm:w-[600px] my-[200px] text-center font-Roboto'>
     {name}
    </div>
    
    <div className='h-[60vh] md:h-[110vh] mt-[30%]  md:-mt-[5%] w-[1000px]  md:w-[600px] md:rounded-t-[0%] bg-gradient-to-tr from-blue-500 to-cyan-500 shadow-[40px_20px_200px_rgb(52,180,235)] pt-[13%] flex flex-col item-center'>
     <div className="flex flex-col items-center">
        <div
      className={`h-[250px] max-w-[350px] lg:h-[350px] bg-blue-500 overflow-hidden mx-auto  shadow-2xl rounded-[50%] ${visible1 ? " opacity-100 scale-100 rotate-y-0":"opacity-0 scale-50 rotate-y-[180deg]"} transition-all duration-[3s]`} ref={ref1}
    >
     <img src={pic1} className={`h-full w-full `} />
      </div>
      <h2 className=" text-4xl capitalize font-Roboto font-bold">shah hamdan</h2>
     </div>
    </div>
    </div>
    </header>
   )
 }
 