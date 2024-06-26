export const TCard = ({ profileImage, name, text }) => {
  return (
    <div className="flex flex-col mt-6   border-[#5C5C5C] rounded-xl w-[380px] items-center border">
      <div className="flex  p-4  items-center text-xl">
        <img className="px-7" src={profileImage} alt={name} />
        <span className=" mr-3 font-semibold">{name}</span>
      </div>
      <span className="w-72 text-center text-sm p-8 ">{text}</span>
    </div>
  )
}