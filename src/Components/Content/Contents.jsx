import computer from '../../assets/MacbookPro.png'
import boards from '../../assets/Boards Notifications.png'
export const Contents = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="items-center justify-center  flex-col flex">
        <h1 className="text-5xl mb-5 bg-gradient-to-r from-purple-400 via-pink-500 to-[#4452FE] bg-clip-text text-transparent p-2  ">Contents</h1>
        <span className="text-center w-[400px]">We focus on ergonomics and
          meeting you where you work.
          Its only a keystroke away.</span>
      </div>
      <div className="flex flex-col  md:flex-row md:gap-10 justify-center">
        <div className="mt-8 bg-white  rounded-md w-[380px] h-[580px]">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-center pt-8  text-black mt-3 p-3 text-2xl font-semibold">Work</h1>
            <span className="text-[15px] p-7 px-12 text-[#5C5C5C]">Ever wondered if you are too reliant
              on a   client for work? Slate helps
              you identify .</span>
            <button className="bg-[#4452F4] mt-3 p-3 px-9 rounded-sm hover:scale-105 duration-300  font-semibold h-[50px]">Sign Up</button>
            <img className='mt-20' src={computer} alt="" />
          </div>
        </div>
        <div className="mt-8 bg-white  rounded-md w-[380px] h-[580px]">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-center pt-8  text-black mt-3 p-3 text-2xl font-semibold">Design with real data</h1>
            <span className="text-[15px] p-7 px-12 text-[#5C5C5C]">Ever wondered if you are too reliant
              on a client for work? Slate helps
              you identify. </span>
            <button className="bg-[#4452F4] mt-3 p-3 px-9 rounded-sm hover:scale-105 duration-300  font-semibold h-[50px]">Sign Up</button>
            <img className='mt-10' src={boards} alt="" />

          </div>

        </div>
      </div>
    </div >
  )
}