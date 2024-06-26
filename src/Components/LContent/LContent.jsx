import { Button } from "../utils/Button"
import mediaContent from '../../assets/media-content.png'
import mediaContentMD from '../../assets/media-contentMd.png'



export const LContent = () => {
  return (
    <div className="flex flex-col mt-24 text-center">
      <div className="md:flex items-center  md:flex-col ">
        <h1 className="text-4xl w-[360px] h-[120px] m-auto ">OpenType
          features and
          Variable fonts</h1>
        <div className="mt-8  font-semibold  ">
          <Button bgColor="#4452FE" text="Try For Free" width="190" />
        </div>
      </div>
      <div className=" md:hidden  mt-14">
        <img src={mediaContent} alt="" />
      </div>
      <div className="hidden  md:flex md:flex-row m-auto mt-20 rounded-3xl bg-[#343434] w-[1290px] h-[350px] ">
        <div className="flex flex-row justify-center">
          <div className="flex flex-col justify-center ">
            <h1 className="mt-24 text-[44px] w-[650px] h-[144px]">OpenType features
              and Variable fonts</h1>
            <div className="m-12 mb-20">
              <Button width="190" bgColor="#4452FE" text="Try For Free" />
            </div>
          </div>
          <div />
          <img src={mediaContentMD} alt="media_ContentMD" />
        </div>
      </div>
    </div>
  )
}