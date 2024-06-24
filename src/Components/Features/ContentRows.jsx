export const ContentRows = ({ image, text, title }) => {
  return (
    <div className="flex  flex-col gap-3 justify-center w-auto m-auto ">
      <div className="flex px-8 mt-5 items-center justify-center">
        <img className="mr-3" src={image} />
        <h1 className="hover:bg-gradient-to-r hover:from-purple-400 duration-500  hover:via-pink-500 hover:to-[#4452FE] hover:bg-clip-text hover:text-transparent   text-[18px] font-bold">{title}</h1>

      </div>
      <div className="text-center ">
        <span className="mt-4 text-[14px]">{text}</span>

      </div>

    </div >
  )
}