import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";


const Footer = ({ isDarkMode }) => {
    return (
        <div className="mt-20">
            <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6 ">
                <div className="flex items-center gap-2">
                    <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt="" className="w-6" />
                    kabi.chaudhary00@gmail.com
                </div>
                <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
                    <li><Link target="_blank" href="https://github.com/kabichaudhary">Guthub</Link></li>
                    <li><Link target="_blank" href="https://www.linkedin.com/in/kabi-chaudhary-2ab350336/">Linkedin</Link></li>
                    <li><Link target="_blank" href="https://x.com/kabichaudhary99">Twitter</Link></li>
                </ul>
            </div>
        </div>
    )
};

export default Footer;
