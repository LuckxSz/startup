import { Contents } from "./Components/Content/Contents"
import { FHeader } from "./Components/Features/FHeader"
import { Features } from "./Components/Features/Features"
import { Header } from "./Components/Header/Header"
import { Hero } from './Components/Hero/Hero'

import macBook from './assets/MacbookPro.png'

export const App = () => {
  return (
    <div className="">
      <Header />
      <Hero mainText="Work at the speed of the thought"
        subHeading="Most calendars are designed for teams. Slate is designed for 
freelancers who want a simple way to plan their schedule." />
      <Features>
        <FHeader />

        <div className="mt-52 md:flex-row justify-center flex-col flex">
          <Contents title="Contents" image={macBook} text="We focus on ergonomics and 
meeting you where you work. 
It's only a keystroke away." InsideTitle="Work" InsideText="Ever wondered if you're too reliant 
on a client for work? Slate helps 
you identify ."buttonPlaceHolder="Sign Up" />

        </div>



      </Features >


    </div >
  )
}