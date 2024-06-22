export const Button = ({ text, bgColor, width, border }) => {
  return (
    <button
      className={` rounded-sm sm:ml-52  mt-6 ${border ? 'border' : ''} h-[52px] lg:block md:ml-0 hover:scale-105 duration-300`}
      style={{ backgroundColor: bgColor, width: `${width}px`, border: border ? border : 'none' }}  >
      {text}
    </button>
  );
};
