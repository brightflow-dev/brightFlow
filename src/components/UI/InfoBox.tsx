interface InfoBox {
  title: string;
  about: string;
  desc: string;
  color: string;
}

const InfoBox = ({ title, about, desc, color }: InfoBox) => {
  return (
    <div className="shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)] rounded-[22px] flex flex-col items-center justify-center text-center">
      <span
        style={{ color }}
        className="block text-[40px] font-darumadropRegular tiny:pt-[34px] smaller:pt-6 sm:pt-[32px] md:pt-6 pc:pt-[32px] pb-4"
      >
        {title}
      </span>
      <span
        className="block font-tavDrigina text-[24px] bg-gradient-to-r from-[#FFFFFF] from-[0%]
       via-[#2F2F2F] via-[68%] to-[#2F2F2F] to-[100%] bg-clip-text text-transparent pb-[34px] px-4"
      >
        {about}
      </span>
      <span className="block font-notoRegular text-xs leading-[18px] text-white/50 pb-[26px] text-left px-4">
        {desc}
      </span>
    </div>
  );
};

export default InfoBox;
