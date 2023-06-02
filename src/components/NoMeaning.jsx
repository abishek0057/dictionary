const handleSearch = (word) =>
  window.open(`https://www.merriam-webster.com/dictionary/${word}`, "_blank");
const NoMeaning = ({ result, input }) => {
  return (
    <div className='flex flex-col justify-center items-center gap-y-2 text-center'>
      <svg
        width='250px'
        height='250px'
        viewBox='0 0 400 400'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          className='dark:stroke-white'
          d='M158.883 171.858C157.302 163.63 157.661 155.331 157.661 147.001'
          stroke='#000000'
          strokeOpacity='0.9'
          strokeWidth='16'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          className='dark:stroke-white'
          d='M243.182 168.082C244.769 160.655 243.182 152.692 243.182 145'
          stroke='#000000'
          strokeOpacity='0.9'
          strokeWidth='16'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          className='dark:stroke-white'
          d='M149 263C175.051 221.917 226.044 220.551 255 257.987'
          stroke='#000000'
          strokeOpacity='0.9'
          strokeWidth='16'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
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
