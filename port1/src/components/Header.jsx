
import { GitHub, LinkedIn, Twitter } from '@mui/icons-material'
export default function Header() {
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
    <div id='headContainer' className=" bg-slate-950  h-12 ">
    <div id="headWrapper" className='flex text-white justify-between items-center h-12 px-10'>
    <div className='flex '>
      {
        socials.map((social)=>{
            return(
            <div className='mr-5' key={social.id} href={social.url}>
                {social.icon}
            </div>
        )}

        )
      }
      
    </div>
    <div className='right'>
      <span className='ml-5'>Projects</span>
      <span className='ml-5'>Contact Me</span>
      <span className='ml-5'>Resume</span>
    </div>
    </div>
    </div>
    </>
  )
}
