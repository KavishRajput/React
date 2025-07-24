import avtar from '../Images/avtar_default_img.jpeg';
import { useState } from 'react';
import { Index_Page_Dropdown } from './Index_Page_Dropdown';

export const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleshow = () => setShow(!show);

  return (
    <div className="sticky top-0 z-50 bg-white shadow-md flex justify-between items-center px-5 py-3 w-full">
      <p className="text-2xl font-serif font-bold text-gray-800">Blog Diaries</p>
      <div className="relative">
        <img
          src={avtar}
          alt="avatar"
          className="rounded-full w-10 h-10 cursor-pointer"
          onClick={handleshow}
        />
        {show && <Index_Page_Dropdown/>}
      </div>
    </div>
  );
};