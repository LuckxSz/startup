import location from "../../assets/location.png"
import phone from "../../assets/phone.png"
import twt from "../../assets/twt.png"
import face from "../../assets/face.png"
import linkedin from "../../assets/linkedin.png"
export const DownFooter = () => {
  return (
    <div className="md:hidden font-semibold flex flex-col mt-12  items-start ml-11 ">
      <div className="flex mt-3 gap-2 items-center">
        <img src={location} alt="location" />
        <span className="items-center">7480 Mockingbird Hill undefined </span>
      </div>
      <div className="flex mt-3 gap-2 items-center">
        <img src={phone} alt="" />
        <span className="">(239) 555-0108</span>
      </div>
      <div className="flex mt-6  pb-14 flex:col gap-3 items-start">
        <img src={twt} alt="twt" />
        <img src={face} alt="face" />
        <img src={linkedin} alt="linkedin" />
      </div>
    </div>
  )
}