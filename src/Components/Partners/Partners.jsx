import apple_logo from '../../assets/logos_apple-app-store.png'
import apiary from '../../assets/logos_apiary.png'
import android from '../../assets/logos_android-icon.png'
import basecamp from '../../assets/logos_basecamp.png'
import airbnb from '../../assets/logos_airbnb.png'
import ibm from '../../assets/logos_ibm.png'
import { Button } from '../utils/Button'

export const Partners = ({ text, content }) => {
  return (
    <div className="flex flex-col  items-center w-auto h-[615px] justify-center">
      <h1 className='  text-5xl mb-3 bg-gradient-to-r from-purple-400 via-pink-500 to-[#4452FE] bg-clip-text text-transparent' >{text}</h1>
      <span className='w-[250px]  md:w-[550px] mt-4 text-center h-[80px] text-[17px]'>{content}</span>
      <div className="flex  mt-9 md:mt- md:flex-row md:gap-16  md:w-auto items-center justify-center flex-wrap gap-7 w-[250px] ">
        <img src={apple_logo} alt="apple_logo" />
        <img src={apiary} alt="apiary" />
        <img src={android} alt="android" />
        <img src={basecamp} alt="basecamp" />
        <img src={airbnb} alt="airbnb" />
        <img src={ibm} alt="ibm" />
      </div>
      <div className='mt-14 '>
        <Button border="1px solid" width={150} text="All Partners" />

      </div>
    </div >
  )
}