import Image from "next/image";

const Mentor = () => {
  return (
    <div className="shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)] rounded-[22px] flex flex-col items-center">
      <div className="flex justify-end w-full pt-4 tiny:pr-4 2xl:pr-14">
        <div className="bg-[#fff] flex rounded-[26px] items-center tiny:gap-2 pc:gap-1 pl-[5px] py-[5px] tiny:w-[204px] pc:w-[234px]">
          <div className="bg-[#D5FE00] rounded-full tiny:w-8 tiny:h-8 pc:w-[42px] pc:h-[42px] flex justify-center items-center">
            <Image
              src="/images/heart.png"
              alt="heart"
              width={20}
              height={20}
              className="pc:w-6 pc:h-6"
            />
          </div>
          <p className="tiny:text-xs pc:text-sm font-notoMedium">
            რეალური პროექტები
          </p>
        </div>
      </div>
      <span
        className="font-spaceGroteskMedium tiny:text-[74px] smaller:text-[84px] sm:text-[94px] md:text-[84px] xl:text-[114px]
           text-[#fff] block tiny:py-6 smaller:pt-6 smaller:pb-[11px] sm:pb-[41px] md:pt-[17px] md:pb-1 lg:pb-[23px] xl:pt-2 xl:pb-[23px] pc:pb-[37px]"
      >
        8+
      </span>
      <span
        className="tiny:text-xs tiny:leading-[18px] smaller:text-sm smaller:leading-[18px] pc:leading-[21px]
          font-notoRegular text-white/50 block text-left tiny:px-4 pc:px-6 tiny:pb-4 smaller:pb-6 md:pb-[25px] lg:pb-6 2xl:pb-[45px]"
      >
        სამენტორო პროგრამის ფარგლებში თქვენ იმუშავებთ რეალურ პროექტებზე,
        რომელითაც გაამრავალფეროვნებთ თქვენს პორტფოლიოს
      </span>
    </div>
  );
};

export default Mentor;
