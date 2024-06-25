import p1 from '../../assets/p1.png'
import p2 from '../../assets/p2.png'
import p3 from '../../assets/p3.png'
import p4 from '../../assets/p4.png'
import dp1 from '../../assets/dp1.png'
import dp2 from '../../assets/dp2.png'
import dp3 from '../../assets/dp3.png'
import dp4 from '../../assets/dp4.png'
import dp5 from '../../assets/dp5.png'
import dp6 from '../../assets/dp6.png'
import dp7 from '../../assets/dp7.png'

export const Photos = ({ text, content }) => {
  return (
    <div className="mt-32 flex flex-col items-center text-center justify-center">
      <h1 className="mb-4 text-5xl bg-gradient-to-r from-purple-400 via-pink-500 to-[#4452FE] bg-clip-text text-transparent">{text}</h1>
      <span className="w-[375px]">{content}</span>
      <div className="flex flex-col gap-5 md:gap-0">
        <div className='flex flex-wrap justify-center gap-4'>
          <img className='hidden md:block' src={dp1} alt="desktop-p1" />
          <img className='hidden md:block' src={dp2} alt="desktop-p2" />
          <img className='hidden md:block' src={dp3} alt="desktop-p3" />
          <img className='hidden md:block' src={dp4} alt="desktop-p4" />
        </div>
        <div className='flex flex-wrap justify-center gap-4 mt-4'>
          <img className='hidden md:block' src={dp5} alt="desktop-p5" />
          <img className='hidden md:block' src={dp6} alt="desktop-p6" />
          <img className='hidden md:block' src={dp7} alt="desktop-p7" />
        </div>
        <div className='flex flex-wrap justify-center flex-col  gap-y-7 md:hidden'>
          <img className='block' src={p1} alt="photo1" />
          <img className='block' src={p2} alt="photo2" />
          <img className='block' src={p3} alt="photo3" />
          <img className='block -mt-7' src={p4} alt="photo4" />
        </div>
      </div>
      <button className="text-white border mt-14 p-3 px-6 rounded-sm hover:scale-105 duration-300 font-semibold h-[50px]">See more</button>
    </div>
  )
}