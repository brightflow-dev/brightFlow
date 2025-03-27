import Image from "next/image";
import { NavLink } from "./NavLink";

const Header = () => {
  return (
    <div className="lg:flex lg:justify-between lg:gap-16 lg:px-6">
      <div
        className="tiny:px-[14.5px] tiny:py-[16px] smaller:px-4 tiny:gap-2  rounded-2xl outline-[5px]  flex justify-between
        lg:gap-4 outline-[rgba(0,0,0,0.10)]"
      >
        <Image
          src="/images/brightFlow.png"
          alt="bright flow logo"
          width={44}
          height={44}
          className="block sm:hidden"
        />
        <Image
          src="/images/brightFlow640.png"
          alt="bright flow logo"
          width={124}
          height={44}
          className="hidden sm:block"
        />
        <div className="flex tiny:gap-2 smaller:gap-[16px] lg:items-center">
          <div className="flex justify-between gap-4 pt-[2px] pb-2">
            <div className="tiny:my-0.5 lg:mt-0.5 lg:mb-1.5 border-l-1 border-l-[rgba(255,255,255,0.2)] smaller:hidden lg:block"></div>
            <div className="tiny:my-0.5">
              <p className="text-[#fff] opacity-70 text-[10px] font-notoLight xl:text-[13px]">
                გაქვს კითხვები?
              </p>
              <p className="text-[#fff] text-[12px] font-notoLight xl:text-[16px]">
                24/7 მოგვწერე
              </p>
            </div>
            <div className="tiny:my-0.5 lg:mt-0.5 lg:mb-1.5 border-l-1 border-l-[rgba(255,255,255,0.2)] hidden lg:block"></div>
          </div>
          <button className="tiny:my-1 tiny:w-[89px] tiny:h-[36px] xl:w-[111px] bg-[#fff] rounded-[8px] flex items-center justify-center ">
            <span className=" text-[#000000] font-tavDrigina text-[10px] xl:text-sm">
              კონტაქტი
            </span>
          </button>
        </div>
      </div>

      <div
        className="rounded-2xl outline-[5px] tiny:py-4 smaller:px-4 justify-between
       outline-[rgba(0,0,0,0.10)] hidden lg:flex lg:gap-[18px]"
      >
        <div className="h-full bg-white/10 w-0.5 rounded-[22px] relative">
          <span className="w-full h-[40%] bg-[#D5FE00] absolute top-0 left-0 rounded-[22px]"></span>
        </div>
        <ul className="flex justify-center items-center text-white gap-4 font-notoRegular text-sm">
          <NavLink href="/" label="მთავარი" />
          <NavLink href="/about" label="შესახებ" />
          <NavLink href="/courses" label="კურსები" />
          <NavLink href="/projects" label="პროექტები" />
          <NavLink href="/blog" label="ბლოგი" />
        </ul>
      </div>
    </div>
  );
};

export default Header;
