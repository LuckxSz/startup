export const NavBar = () => {
  const liItems = ["Home", "Products", "About", "Contact"];

  return (
    <ul className="hidden md:flex space-x-4">
      {liItems.map((item, id) => (
        <li key={id} className='list-none cursor-pointer hover:text-[#4452FE] duration-300'>
          <a href="/"> {item} </a>
        </li>
      ))}
    </ul>
  );
};
