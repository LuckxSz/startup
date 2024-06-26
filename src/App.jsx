import { Contents } from "./Components/Content/Contents"
import { Photos } from "./Components/Photos/Photos"
import { FHeader } from "./Components/Features/FHeader"
import { Features } from "./Components/Features/Features"
import { Header } from "./Components/Header/Header"
import { Hero } from './Components/Hero/Hero'
import { Partners } from "./Components/Partners/Partners"
import { Testimonials } from "./Components/Testimonials/Testimonials"
import { TCard } from "./Components/Testimonials/TCard"
import wade from './assets/wade.png'
import philip from './assets/philip.png'
import arthur from './assets/arthur.png'
import regina from './assets/regina.png'
import { LContent } from "./Components/LContent/LContent"
import { Footer } from "./Components/Footer/Footer"

export const App = () => {
  return (
    <>
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
      <Partners text="Partners" content="We focus on ergonomics
      and meeting you where you work. 
It's only a keystroke away." />
      <Testimonials >
        <h1 className="text-center mb-7 text-5xl  bg-gradient-to-r from-purple-400 via-pink-500 to-[#4452FE] bg-clip-text text-transparent ">Testimonials</h1>
        <div className="w-2/3 flex justify-center flex-col  m-auto ">
          <div className="flex justify-center md:gap-5  md:flex-row flex-wrap ">
            <TCard name="Wade Steward
Designer" profileImage={wade} text="Slate helps you see how many 
more days you need to work to 
reach your financial goal for the
 month and year. Slate helps 
you see how many more days 
you need to work to reach your 
financial goal for the month and 
year.your financial 
goal for the month and year." />
            <TCard name="Philip Watson
Designer" profileImage={philip} text="Slate helps you see how many 
more days you need to work to 
reach your financial goal for the
 month and year. Slate helps 
you see how many more days 
you need to work to reach your 
financial goal for the month and 
year.your financial 
goal for the month and year." />
            <div className="md:flex  md:gap-5  ">
              <TCard name="Arthur Wilson
            Designer" profileImage={arthur} text="Slate helps you see how many
          more days you need to work to
          reach your financial goal for the
          month and year. Slate helps
          you see how many more days
          you need to work to reach your
          financial goal for the month and
          year.your financial 
goal for the month and year." />
              <TCard name="Regina Black
Designer" profileImage={regina} text="Slate helps you see how many 
more days you need to work to 
reach your financial goal for the
 month and year. Slate helps 
you see how many more days 
you need to work to reach your 
financial goal for the month and 
year.your financial 
goal for the month and year." />
            </div>
          </div>
        </div>
      </Testimonials >
      <LContent />
      <Footer />

    </ >
  )
}