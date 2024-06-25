import screens from '../../assets/screens.png'
import screensMD from '../../assets/screensMD.png'
import { Button } from '../utils/Button'
export const Hero = ({ mainText, subHeading }) => {
  return (
    <>
      <div className=" w-[402px] s  h-[500px] md:h-[350px] md:w-[630px]  flex flex-col justify-center m-auto items-center">
        <h1 className=" bg-gradient-to-r from-purple-400 via-pink-500 to-[#4452FE] bg-clip-text text-transparent  mt-14 text-center text-5xl  md:text-6xl">{mainText}</h1>
        <span className=" mt-8 md:text-1xl  md:mt-5 tracking-wide ">{subHeading}</span>
        <div className='flex flex-col   sm:flex mt-5 md:mr-0 sm:mr-48 md:flex-row gap-4 md:gap-9'>
          <Button text='Try for Free' bgColor="#4452FE" width="160" />
          <Button text="Learn More" bgColor="black" width='160' border="1px solid white" />
        </div>
      </div>
      <div className='flex justify-center md:justify-center md:m-auto md:flex min-w-[550px]'>
        <img className='w-auto max-w-full h-auto md:hidden mt-12' src={screens} alt="screen" />

        <img className='hidden md:flex mt-14 md:justify-center max-w-full' src={screensMD} alt="ScreenPhoto_Desktop" />
      </div>
    </>
  )
}