import menu from '../../assets/bx_bx-menu-alt-right.png';

export const Image = () => {
  return (
    <img
      className=" md:hidden w-16 mt-6 h-16 hover:rotate-90 hover:scale-110 transform transition duration-300 ease-in-out cursor-pointer"
      src={menu}
      alt="Menu Icon"

    />
  );
};
