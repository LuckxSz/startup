export const Button = ({ text }) => {
  return (
    <button className='border rounded-sm sm:ml-52 sm:sticky h-[52px] w-[110px] lg:block md:ml-0 hover:bg-[#3643d8] duration-300'>
      {text}
    </button>
  );
};
