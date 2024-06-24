import { Contents } from "./Components/Content/Contents"
import { FHeader } from "./Components/Features/FHeader"
import { Features } from "./Components/Features/Features"
import { Header } from "./Components/Header/Header"
import { Hero } from './Components/Hero/Hero'
export const App = () => {
  return (
    <div className="">
      <Header />
      <Hero mainText="Work at the speed of the thought"
        subHeading="Most calendars are designed for teams. Slate is designed for 
freelancers who want a simple way to plan their schedule." />
      <Features>
        <FHeader />
        <Contents title="Content" />

      </Features>


    </div>
  )
}