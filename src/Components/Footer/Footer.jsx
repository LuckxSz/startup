import { DownFooter } from "./DownFooter"

export const Footer = () => {
  const navigation = ["Home", "Examples", "Pricing", "Updates"]
  const title = ["FingerTipe", "Resources", "About"]
  return (
    <>
      <div className="md:hidden px-12 mt-28 flex flex-col ">
        <h2 className="mt-10 font-bold mb-4 text-[18px]">{title[0]}</h2>
        <span className="mt-3 font-medium">{navigation[0]}</span>
        <span className="mt-3 font-medium">{navigation[1]}</span>
        <span className="mt-3 font-medium">{navigation[2]}</span>
        <h2 className=" mt-10 mb-4 font-bold  text-[18px]">{title[1]}</h2>
        <span className="mt-3 font-medium">{navigation[0]}</span>
        <span className="mt-3 font-medium">{navigation[1]}</span>
        <span className="mt-3 font-medium">{navigation[2]}</span>
        <span className="mt-3 font-medium"> {navigation[3]}</span>
        <h2 className="mt-10 mb-4 font-bold text-[18px]">{title[2]}</h2>
        <span className="mt-3 font-medium">{navigation[0]}</span>
        <span className="mt-3 font-medium">{navigation[1]}</span>
        <span className="mt-3 font-medium">{navigation[2]}</span>
        <span className="mt-3 font-medium "> {navigation[3]}</span>
      </div>
      <DownFooter />

    </>


  )
}
