import Image from "next/image";

const Header = () => {
  return (
    <div className="pl-4 ">
      <div className=" border-r-0 rounded-tl-2xl rounded-bl-2xl  outline-[5px] p-4 tiny:py-4 flex tiny:px-[10.5] justify-between tiny:gap-3 outline-[rgba(0,0,0,0.10)]">
        <Image
          src="/brightFlow.png"
          alt="bright flow logo"
          width={44}
          height={44}
        />
        <div className="flex gap-3">
          <div className="flex justify-between gap-4 pt-[2px] pb-2">
            <div className="border-l-1 border-l-[rgba(255,255,255,0.2)]"></div>
            <div>
              <p className="text-[#fff] opacity-70 text-[10px] font-notoLight">
                გაქვს კითხვები?
              </p>
              <p className="text-[#fff] text-[12px] font-notoLight">
                24/7 მოგვწერე
              </p>
            </div>
          </div>
          <button className="tiny:px-4 tiny:py-[13px] bg-[#fff] rounded-[8px] flex items-center justify-center ">
            <span className="text-[#000000] font-tavDrigina text-[10px]">
              კონტაქტი
            </span>
          </button>
        </div>
      </div>
    </div>

    // <div className="tiny:py-4 flex tiny:px-[10.5] justify-between tiny:gap-3 border border-red-100 rounded-2xl">
    //   <Image
    //     src="/brightFlow.png"
    //     alt="bright flow logo"
    //     width={44}
    //     height={44}
    //   />
    //   <div className="flex justify-between gap-4 pt-[2px] pb-2">
    //     <div className="border-l-1 border-l-[rgba(255,255,255,0.2)]"></div>
    //     <div>
    //       <p className="text-[#fff] opacity-70 text-[10px]">გაქვს კითხვები?</p>
    //       <p className="text-[#fff] text-[12px]">24/7 მოგვწერე</p>
    //     </div>
    //   </div>
    //   <button className="tiny:px-4 tiny:py-[13px] bg-[#fff] rounded-[8px] flex items-center justify-center ">
    //     <span className="text-[#000000]">კონტაქტი</span>
    //   </button>
    // </div>
  );
};

export default Header;
