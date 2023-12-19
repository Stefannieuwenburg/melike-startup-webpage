
const Button = (props) => {
  return (
    <button className="bg-[#9b7d3e] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black font-[Poppins] cursor-pointer hover:-translate-y-1 hover:scale-110 hover:duration-300 ">
      {props.children}
    </button>
  );
};

export default Button;
