export const Hero = ({ mainText, subHeading }) => {
  return (
    <div className=" w-[402px] h-[352px] md:h-[350px] md:w-[630px] flex flex-col justify-center m-auto items-center">
      <h1 className="text-white text-6xl">{mainText}</h1>
      <span className="mt-5 ">{subHeading}</span>
    </div>
  )
}