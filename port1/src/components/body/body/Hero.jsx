import './body.scss'

export default function Hero() {
  return (
    <>
    <div id="bodyWrapper" className="h-screen w-full bg-cyan-800 flex items-center justify-center">
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
    </div>
    </>
  )
}
