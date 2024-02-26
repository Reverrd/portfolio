import { useState, useEffect } from 'react'
import { KeyboardDoubleArrowUp } from '@mui/icons-material'
import './body.scss'

const words = ['React Js', 'Next Js', 'Tailwind CSS', 'SCSS', 'Material UI']
export default function Hero() {
 const [currentWord, setCurrentWord] = useState(0)

 useEffect(()=>{
  const interval = setInterval(()=>{
    setCurrentWord((prevWord) =>(prevWord + 1) %words.length)
  },2000)
  return ()=>
  clearInterval(interval)
 },[])
  const[isScrolled, setIsScrolled] = useState(false)
  useEffect(()=>{
  const handleScroll = ()=>{
    window.scrollY >100 ?
    setIsScrolled(true) : 
    setIsScrolled(false)
    
  }
  window.addEventListener('scroll', handleScroll)

  return ()=>{
    window.removeEventListener('scroll', handleScroll)
  }
},[])
  const handleClick = (target)=>{
    const id = `${target}`;
    const element = document.getElementById(id)
    element ? element.scrollIntoView({
      behavior:'smooth',
      block:'start'
    }): null
  }
  return (
    <>
    <div id="home" className="h-screen w-full bg-cyan-800 flex items-center justify-center relative">
    <div className="w-3/4  flex flex-col items-center ">
      <div className="container flex items-end justify-center relative  w-72 h-72 ">
        <div className="box border-2 w-60 h-60 rounded-rounded-circle bg-slate-500 absolute bottom-0   ">
        <div className="image  ">
            <img className='absolute bottom-0 '  src="./assets/Myself.jpg" alt="" />
        </div>
        </div>
      </div>
        <div className='text-white'>
          hello 🙂, My name is Promise
        </div>
        <div  className='text-slate-100 text-4xl xsm:text-xl font-medium text-center  '>
            A Frontend Developer<br/> specialized in <span id='scrollText' >{words[currentWord]}</span>
        </div>
    </div> 
    {isScrolled &&(
     <div
    
     onClick={()=>handleClick('home')} className='rounded-full border-4 fixed top-1/3 right-0 mr-5 cursor-pointer mix-blend-luminosity '>
      <KeyboardDoubleArrowUp id='arrow up' className='text-white text-xl!'  />
     </div>)}
    </div>
    </>
  )
}
