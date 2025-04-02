import Image from "next/image";

const ArrowMore = () => {
  return (
    <div className="relative p-[1px] w-fit ">
      <div className="p-[14px] px-[24px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)] w-fit rounded-[26px]">
        <Image
          src="/images/arrow.png"
          width={24}
          height={24}
          alt="მეტის ნახვა"
        />
      </div>
    </div>
  );
};

export default ArrowMore;
