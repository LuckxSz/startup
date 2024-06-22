import logo from '../../assets/figmaland.png';
import { Button } from '../utils/Button';
import { NavBar } from './NavBar';

import { Image } from './Image';
export const Header = () => {
  return (
    <>
      <div className='flex items-center md:justify-center gap-20 justify-center  max-w-full h-[119px]  md:p-0 m-auto'>
        <a href="/">
          <img src={logo} alt="logo" className='h-[55px] md:h-[60px]' />
        </a>
        <NavBar />
        <div className='flex justify-center items-center '>
          <Button text="Login" border="1px solid white" width="100" />
          <Image />
        </div>
      </div>
    </>
  );
};
