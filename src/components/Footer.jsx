import { quickLinks, settingMenu } from "../utils/Constants";
import { MdCopyright } from "react-icons/md";

const Footer = () => {
    return <div className="bg-gray-700 text-white">
        <div className="flex justify-between py-[15px] px-[15px] md:px-[30px] border-b border-[#dadce0]">
            <p className="leading-none text-[15px]">
                Bangladesh
            </p>
            <p className="flex items-center gap-1"><MdCopyright /> 2023 Cheetah</p>
        </div>
        <div className="flex flex-col md:flex-row justify-around py-3 md:py-0 md:px-[15px] ">
            <div className="flex justify-center">
                {quickLinks.map((menu, index) => (
                    <span key={index} className=" text-[12px] md:text-[14px] leading-none p-[10px] md:p-[15px] hover:underline cursor-pointer">
                        {menu}
                    </span>
                ))}
            </div>
            <div className="flex justify-center">
                {settingMenu.map((menu, index) => (
                    <span key={index} className=" text-[12px] md:text-[14px] leading-none p-[10px] md:p-[15px] hover:underline cursor-pointer">
                        {menu}
                    </span>
                ))}
            </div>
        </div>
    </div>;
};

export default Footer;
