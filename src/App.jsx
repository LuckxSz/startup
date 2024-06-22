import { Header } from "./Components/Header/Header"
import { Hero } from './Components/Hero/Hero'
export const App = () => {
  return (
    <div>
      <Header />
      <Hero mainText="Work at the speed of the thought"
        subHeading="Most calendars are designed for teams. Slate is designed for 
freelancers who want a simple way to plan their schedule." />
    </div>
  )
}