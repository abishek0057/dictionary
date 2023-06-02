import { useLayoutEffect, useState } from "react";

const FontSelector = () => {
  const [font, setFont] = useState(
    localStorage.getItem("font") ? localStorage.getItem("font") : "font-poppins"
  );

  useLayoutEffect(() => {
    const bodyEle = document.querySelector("body");
    const fontClasses = ["font-poppins", "font-natoSerif", "font-jbMono"];
    fontClasses.forEach((fontClass) => {
      if (font === fontClass) {
        bodyEle.classList.add(fontClass);
      } else {
        bodyEle.classList.remove(fontClass);
      }
    });
    localStorage.setItem("font", font);
  }, [font]);

  const handleFontChange = (e) => {
    const selectedFont = e.target.value;
    setFont(selectedFont);
  };
  return (
    <div>
      <select
        id='font-selector'
        className='p-2 outline-none focus:shadow-none bg-transparent h-11  dark:bg-slate-900'
        onChange={handleFontChange}
      >
        <option
          value='font-poppins'
          selected={font === "font-poppins" ? true : false}
        >
          Sans-serif
        </option>
        <option
          value='font-natoSerif'
          selected={font === "font-natoSerif" ? true : false}
        >
          Serif
        </option>
        <option
          value='font-jbMono'
          selected={font === "font-jbMono" ? true : false}
        >
          Monospace
        </option>
      </select>
    </div>
  );
};

export default FontSelector;
