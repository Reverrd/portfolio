
import './project.scss'
export default function ProjectSection() {
    const projects = [
        {
            id:1,
            image: './assets/vocalCentric.png',
            title:'Vocal Centric',
            desc:'This app is about connecting different choir groups together ',
            url:'http://landingpage-sage-pi.vercel.app',
        },
        {
            id:2,
            image: './assets/vocalCentric.png',
            title:'Vocal Centric',
            desc:'This app is about connecting different choir groups together',
            url:'http://landingpage-sage-pi.vercel.app', 
        },
        {
            id:3,
            image: '',
            title:'',
            desc:'',
            url:'',
        }
    ]
  return (
    <>
      <div className="bg-green-900 h-screen">
        <div className="projectWrapper px-5">
        <h1 className=" text-slate-100 text-2xl font-medium pb-10">
            Featured Projects
        </h1>
        <div  className="flex gap-3 justify-evenly">
            {
                projects.map((project)=>{
                return (
                    <div className='bg-white  rounded-xl' key={project.id}>
                        
                        
                        <img className='rounded-xl' src={project.image} alt="" />
                        <div className='pb-2.5'>{project.title}</div>
                        <div>{project.desc}</div>
                        
                        

                    </div>
                )
                })
            }
        </div>
        </div>
      </div>
    </>
  )
}
