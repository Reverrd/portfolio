
import { GitHub, LinkedIn, Menu, Twitter } from '@mui/icons-material'
export default function Header() {
  const handleClick = (anchor)=>{
    const id = `${anchor}`;
    const element = document.getElementById(id);
    element? element.scrollIntoView({
      behavior:'smooth',
      block:'start',
    }): null;
  }
    const socials = [
        {
          id:1,
          icon: <GitHub />,
          url:'http://github.com/Reverrd'
        },
        {
          id:2,
          icon: <LinkedIn />,
          url:'http://linkedin.com/in/promise-obioma' 
        },
        {
            id:2,
            icon: <Twitter />,
            url:'http://twitter.com' 
        }
      ]
  return (
    <>
    <div id='headContainer' className=" bg-slate-950  h-12 sticky top-0 z-20 ">
    <div id="headWrapper" className='flex text-white justify-between items-center h-12 px-10  '>
    <div className='flex '>
      {
        socials.map((social)=>{
            return(
            <div className='mr-5 hover:cursor-pointer' key={social.id} href={social.url}>
                {social.icon}
            </div>
        )}

        )
      }
      
    </div>
    <div className='right hover:cursor-pointer'>
      <span onClick={()=>handleClick('project')} className='ml-5 lg:inline md:inline sm:hidden xxs:hidden'>Projects</span>
      <span onClick={()=>handleClick('contact')} className='ml-5 lg:inline md:inline sm:hidden xxs:hidden'>Contact Me</span>
      <span className='ml-5 lg:inline md:inline sm:hidden xxs: hidden '>Resume</span>
      <span className=' ml-5 lg:hidden md:hidden'><Menu /></span>
    </div>
    </div>
    </div>
    </>
  )
}
