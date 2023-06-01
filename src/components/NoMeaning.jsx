import sadFace from "../assets/sad-face.svg";

const handleSearch = (word) =>
  window.open(`https://www.merriam-webster.com/dictionary/${word}`, "_blank");
const NoMeaning = ({ result, input }) => {
  return (
    <div className='flex flex-col justify-center items-center gap-y-2 text-center'>
      <img src={sadFace} alt='sad face' />
      <h1 className='text-3xl font-bold '>{result.title}</h1>
      <h1 className='text-lg font-semibold'>{result.message}</h1>
      <h1
        className='hidden sm:block select-none underline cursor-pointer'
        onClick={() => handleSearch(input)}
      >
        Search on <span className='font-bold'>merriam-webster</span>
      </h1>
    </div>
  );
};

export default NoMeaning;
