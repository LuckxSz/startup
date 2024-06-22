export const ContentRows = ({ image, text, title }) => {
  return (
    <div className="flex flex-col justify-center w-full m-auto ">
      <div className="">
        <img className="" src={image} />
        <h1 className="text-[14px] font-bold">{title}</h1>

      </div>
      <div className="text-center ">
        <span className="text-[12px]">{text}</span>

      </div>

    </div >
  )
}