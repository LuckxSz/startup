import { Button } from '../utils/Button'
export const Hero = ({ mainText, subHeading }) => {
  return (
    <div className=" w-[402px] h-[452px] md:h-[350px] md:w-[630px]  flex flex-col justify-center m-auto items-center">
      <h1 className="text-white text-5xl  md:text-6xl">{mainText}</h1>
      <span className=" mt-8 md:text-1xl  md:mt-5tracking-wide ">{subHeading}</span>
      <div className='flex flex-col md:flex-row md:gap-7    '>

        <Button text='Try for Free' bgColor="#4452FE" width="120" border="10" />
        <Button text="Learn More" bgColor="black" width='120' border='' />
      </div>
    </div>
  )
}