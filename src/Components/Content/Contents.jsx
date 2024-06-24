import { Button } from "../utils/Button"
import macBook from '../../assets/MacbookPro.png'
export const Contents = ({ text, title, InsideText, InsideTitle }) => {
  return (
    <div className="flex flex-col mt-64  justify-center items-center m-auto w-full">
      <h1 className="text-5xl">{title}</h1>
      <span>{text}</span>
      <div className="flex w-[348px]  rounded-lg bg-white h-[573px] flex-col gap-3">
        <h1>{InsideTitle}</h1>
        <span>{InsideText}</span>
        <Button text="Sign Up" bgColor="#4452FE" width="120" />
        <img src={macBook} alt="macbook" />
      </div>
    </div>
  )
}