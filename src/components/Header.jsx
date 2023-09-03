import React from "react";
import { useState } from "react";
import { BsMoon } from "react-icons/bs";
import { TbMinusVertical } from "react-icons/tb";
import { BiBookAlt } from "react-icons/bi";
import { Switch } from "antd";

const Header = ({ toggleTheme }) => {
  const [selsctfont, setSelectFont] = useState("San serif");
  const fontFamily = ["San Serif", "Serif", "Mono"];
  const handleFontChange = (e) => {
    // setSelectFont(e.target.value);
    if (e.target.value === "San Serif") {
      return;
    } else if (e.target.value === "Serif") {
      setSelectFont(e.target.value);
    } else if (e.target.value === "Mono") {
      setSelectFont(e.target.value);
    }
  };

  return (
    <div>
      <div className=" w-[375px] h-[48px] md:w-[768px] md:h-[64px] lg:w-[1000px] lg:h-[70px]">
        <div className="flex flex-wrap justify-center">
          <div className=" flex items-center justify-between w-[326.99px] h-[32px] mt-2 mb-4 md:w-[689px] md:h-[64px] ">
            <BiBookAlt className=" text-[20px] ml-1" />
            <div className=" flex items-center h-[32px] w-[160.99px] justify-around">
              <select
                value={selsctfont}
                onChange={handleFontChange}
                className=" outline-none font-sans"
              >
                {fontFamily.map((fontFamily) => (
                  <option
                    key={fontFamily}
                    value={fontFamily}
                    className=" text-purple-600"
                  >
                    {fontFamily}
                  </option>
                ))}
              </select>
              <TbMinusVertical />
              <div className=" cursor-pointer ">
                <Switch className=" bg-gray-500" onChange={toggleTheme} />
              </div>
              <BsMoon className=" cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
