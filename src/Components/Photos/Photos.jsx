import p1 from '../../assets/p1.png'
import p2 from '../../assets/p2.png'
import p3 from '../../assets/p3.png'
import p4 from '../../assets/p4.png'

export const Photos = ({ text, content }) => {
  return (
    <div className="mt-52 flex flex-col items-center text-center justify-center">
      <h1 className=" mb-6 text-5xl  bg-gradient-to-r from-purple-400 via-pink-500 to-[#4452FE] bg-clip-text text-transparent ">{text}</h1>
      <span className="w-[375px] mb-9 text-[16px]">{content}</span>
      <div className="flex flex-col gap-5 md:flex-row">
        <img className='hidden md:flex' src="" alt="" />
        <img className='hidden md:flex' src="" alt="" />
        <img className='hidden md:flex' src="" alt="" />
        <img className='hidden md:flex' src="" alt="" />
        <img className='hidden md:flex' src="" alt="" />
        <img className='hidden md:flex' src="" alt="" />
        <img className='hidden md:flex' src="" alt="" />
        <img src={p1} alt="photo1" />
        <img src={p2} alt="photo2" />
        <img src={p3} alt="photo3" />
        <img src={p4} alt="photo4" />
      </div>
      <button className="text-white border mt-14 p-3 px-6 rounded-sm hover:scale-105 duration-300 font-semibold h-[50px]">See more</button>

    </div >
  )
}