import { KeyboardDoubleArrowUp } from '@mui/icons-material'
import './body.scss'

export default function Hero() {
  return (
    <>
    <div id="bodyWrapper" className="h-screen w-full bg-cyan-800 flex items-center justify-center relative">
    <div className="w-3/4  flex flex-col items-center ">
        <div className="image">
            <img className='bg-slate-500 ' src="./assets/Myself.jpg" alt="" />
        </div>
        <div className='text-white'>
          hello 🙂, I am Promise
        </div>
        <div className='text-slate-100 text-4xl font-medium text-center '>
            A Frontend Developer<br/> specialized in React
        </div>
    </div> 
     <div className='rounded-full border-4 absolute top-1/3 right-0 mr-5 '>
      <KeyboardDoubleArrowUp id='arrow up' className='text-white text-xl!'  />
     </div>
    </div>
    </>
  )
}
