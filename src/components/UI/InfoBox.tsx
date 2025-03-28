import Image from "next/image";

interface InfoBox {
  title: string;
  about: string;
  desc: string;
  color: string;
}

const InfoBox = ({ title, about, desc, color }: InfoBox) => {
  return (
    <div className="shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)] rounded-[22px] flex flex-col items-center justify-center text-center tiny:px-4 xl:px-6">
      <span
        style={{ color }}
        className="block tiny:text-[40px] smaller:text-[46px] sm:text-[56px] md:text-[46px] xl:text-[72px] font-darumadropRegular tiny:pt-[34px] smaller:pt-6 sm:pt-[32px] md:pt-6 pc:pt-[32px] pb-4"
      >
        {title}
      </span>
      <span
        className="block font-tavDrigina tiny:text-[24px] smaller:text-[28px] smaller:leading-[32px] sm:text-[32px] sm:leading-[36px] md:text-[28px]
        md:leading-[32px] xl:text-[40px] xl:leading-[normal]
        bg-gradient-to-r from-[#FFFFFF] from-[0%]
       via-[#2F2F2F] via-[68%] to-[#2F2F2F] to-[100%] bg-clip-text text-transparent pb-[34px] "
      >
        {about}
      </span>
      <span className="tiny:block font-notoRegular tiny:text-xs tiny:leading-[18px] smaller:text-sm text-white/50 pb-[26px] text-left  sm:hidden md:block xl:hidden">
        {desc}
      </span>
      <div className="sm:flex sm:justify-between sm:items-center sm:w-full tiny:hidden  gap-4 pb-[26px] md:hidden xl:flex">
        <span className="block font-notoRegular sm:text-sm sm:leading-[18px] xl:leading-[21px] text-white/50  text-left ">
          {desc}
        </span>
        <div className="shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)] px-6 py-[14px] w-fit rounded-[26px] shrink-0 flex items-center justify-center">
          <Image
            src="/images/arrow.png"
            alt="arrow"
            width={24}
            height={24}
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default InfoBox;
