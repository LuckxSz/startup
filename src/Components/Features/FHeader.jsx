import featuresMobile from '../../assets/featuresMobile.png'
import featuresMobileMD from '../../assets/featuresMobileMD.png'
import cutlery from '../../assets/cutlery.png'
import alien from '../../assets/alien.png'
import infinity from '../../assets/infinity.png'
import { ContentRows } from './ContentRows'

export const FHeader = () => {
  return (
    <>
      <div className="text-white justify-center flex m-auto flex-col mt-16 md:mt-44  ">
        <h1 className="text-5xl md:text-6xl w-30 m-auto uppercase bg-gradient-to-r from-purple-400 via-pink-500 to-[#4452FE] bg-clip-text text-transparent">
          Features
        </h1>

        <div className="w-[449px]  flex justify-center m-auto mt-4">
          <span className=" text-1xl">Most calendars are designed for teams. <br />
            Slate is designed for freelancers who want <br />
            a simple way to plan their schedule.</span>
        </div>


        <div className='m-auto md:mt-12 mt-5 md:flex '>
          <img className='flex md:hidden' src={featuresMobile} alt="" />
          <div className='hidden md:flex'>
            <img src={featuresMobileMD} alt="" />
          </div>
          <div className='flex-col mt-60 w-[269px] h-[172px] flex justify-center m-auto '>
            <ContentRows image={cutlery} title="A single source 
of truth" text="When you add work to your 
Slate calendar we automatically 
calculate useful insights 
" />
            <ContentRows image={alien} title="Intuitive 
interface" text="When you add work to your 
Slate calendar we automatically 
calculate useful insights 
" />
            <ContentRows image={infinity} title="Or with rules" text="When you add work to your 
Slate calendar we automatically 
calculate useful insights 
" />
          </div>
        </div>
      </div>
    </>
  )
}