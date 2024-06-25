import { Contents } from "./Components/Content/Contents"
import { Photos } from "./Components/Photos/Photos"
import { FHeader } from "./Components/Features/FHeader"
import { Features } from "./Components/Features/Features"
import { Header } from "./Components/Header/Header"
import { Hero } from './Components/Hero/Hero'
import { Partners } from "./Components/Partners/Partners"


export const App = () => {
  return (
    <div>
      <Header />
      <Hero mainText="Work at the speed of the thought"
        subHeading="Most calendars are designed for teams. Slate is designed for 
freelancers who want a simple way to plan their schedule." />
      <Features>
        <FHeader />
      </Features >
      <div className="mt-52 md:flex-row justify-center flex-col flex">
        <Contents />
      </div>
      <Photos text="Gallery" content="We focus on ergonomics and meeting
 you where you work. 
It's only a keystroke away." />
      <Partners />
    </div >
  )
}