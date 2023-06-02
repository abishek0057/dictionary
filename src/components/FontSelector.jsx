const FontSelector = () => {
  const handleFontChange = (e) => {
    const classes = document.querySelector("body").classList;
    const fontClasses = ["font-poppins", "font-natoSerif", "font-jbMono"];
    classes.remove(...fontClasses);
    classes.add(e.target.value);
  };
  return (
    <div>
      <select
        id='font-selector'
        className='p-2 outline-none focus:shadow-none bg-transparent h-11  dark:bg-slate-900'
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
