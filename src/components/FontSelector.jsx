const FontSelector = () => {
  const handleFontChange = (e) => {
    document.querySelector("body").classList = e.target.value;
    console.log(e.target.value);
  };
  return (
    <div>
      <select
        id='font-selector'
        className='p-2 outline-none focus:shadow-none bg-transparent h-11'
        onChange={handleFontChange}
      >
        <option value='font-poppins'>Sans-serif</option>
        <option value='font-natoSerif'>Serif</option>
        <option value='font-jbMono'>Monospace</option>
      </select>
    </div>
  );
};

export default FontSelector;
