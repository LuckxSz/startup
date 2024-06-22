import logo from '../../assets/figmaland.png';
import { Button } from './Button';
import { NavBar } from './NavBar';

import { Image } from './Image';
export const Header = () => {
  return (
    <>

      <div className=' flex items-center justify-around max-w-full h-[119px]  md:p-0 m-auto'>
        <a href="/">
          <img src={logo} alt="logo" className='h-[55px] md:h-[60px]' />
        </a>
        <NavBar />
        <Button text="Login" />
        <Image />
      </div>
    </>
  );
};
