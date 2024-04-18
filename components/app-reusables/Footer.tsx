import React from "react";
import  Link  from "next/link";
import Image from "next/image";
import Icon from "./Icons";
import { Copyright } from "lucide-react";

const Footer = () => {
  return (
    <footer>
      <div className="px-[4%]  py-[20px] md:py-[20px]">
        <div className=" pb-[8px] border-b-[1px] border-[#D9D9D9] md:w-[674px] mx-auto">
          <div className="flex justify-between md:w-[582px] mx-auto items-center">
            <Link href="/about-us">
              <button className="text-[11px] md:text-[14px] text-text font-[400]">
                About
              </button>
            </Link>
            <Link href="/terms-of-use">
              <button className="text-[11px] md:text-[14px] text-text font-[400]">
                Terms of service
              </button>
            </Link>
            <Link href="/privacy-policy">
              <button className="text-[11px] md:text-[14px] text-text font-[400]">
                Privacy policy
              </button>
            </Link>
            <Link href="/contact-us">
              <button className="text-[11px] md:text-[14px] text-text font-[400]">
                Contact us
              </button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center pt-[20px]">
          <div className="mr-[4px]">
            <Copyright color="#6C6D71" size={12}/>
          </div>
          <h4 className="text-[11px] text-text font-[400] ">
            2024 Honey bunny bun{" "}
          </h4>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
