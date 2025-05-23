const Society = () => {
  return (
    <div className="tiny:mt-6 smaller:mt-8 xl:pt-[62px]">
      <svg
        width="208"
        height="26"
        viewBox="0 0 208 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M208 3.56751L201.507 24.9726L168.543 25.4822L150.063 25.9918H36.1225L0 26L1.48937 1.98863L48.6088 0L81.0733 0.509644L182.528 1.52893L208 3.56751Z"
          fill="#D5FE00"
        />
        <text
          x="50%" // Position text horizontally in the center
          y="50%" // Position text vertically in the center
          textAnchor="middle" // Center align text horizontally
          dy=".3em" // Adjust vertical position if needed
          fill="#000000" // Text color
          fontSize="12" // Font size
          fontFamily="NotoSansRegular"
        >
          შემოუერთდი საზოგადოებას
        </text>
      </svg>
      <div className="flex flex-col tiny:mt-4 smaller:mt-6">
        <span
          className="font-tavDrigina tiny:text-[28px] tiny:leading-9 smaller:text-[32px] smaller:leading-[42px] sm:text-[42px] sm:leading-[52px]
        bg-gradient-to-r from-[#FFFFFF] from-[0%] via-[#2F2F2F] via-[68%] to-[#2F2F2F] to-[100%] bg-clip-text text-transparent md:hidden"
        >
          ციფრული
        </span>
        <span
          className="font-tavDrigina tiny:text-[28px] tiny:leading-9 smaller:text-[32px] smaller:leading-[42px] sm:text-[42px] sm:leading-[52px]
        bg-gradient-to-r from-[#FFFFFF] from-[0%] via-[#2F2F2F] via-[68%] to-[#2F2F2F] to-[100%] bg-clip-text text-transparent md:hidden"
        >
          პროდუქტების
        </span>
        <span
          className="font-tavDrigina tiny:text-[28px] tiny:leading-9 smaller:text-[32px] smaller:leading-[42px] sm:text-[42px] sm:leading-[52px] 
        bg-gradient-to-r from-[#FFFFFF] from-[0%] via-[#2F2F2F] via-[68%] to-[#2F2F2F] to-[100%] bg-clip-text text-transparent md:hidden"
        >
          საზოგადოება
        </span>
        <span
          className="font-tavDrigina md:text-[48px] md:leading-[58px] xl:text-[62px] xl:leading-[92px]
        bg-gradient-to-r from-[#FFFFFF] from-[0%] via-[#2F2F2F] via-[68%] to-[#2F2F2F] to-[100%] bg-clip-text text-transparent hidden md:block"
        >
          ციფრული პროდუქტების
        </span>
        <span
          className="font-tavDrigina md:text-[48px] md:leading-[58px] xl:text-[62px] xl:leading-[92px]
        bg-gradient-to-r from-[#FFFFFF] from-[0%] via-[#2F2F2F] via-[68%] to-[#2F2F2F] to-[100%] bg-clip-text text-transparent hidden md:block"
        >
          საზოგადოება
        </span>
      </div>
      <p
        className="tiny:text-xs tiny:leading-[18px] text-[#fff] opacity-50 font-tavDrigina mt-2 sm:text-sm sm:leading-[21px] xl:text-base xl:leading-6
       lg:w-[564px] xl:w-[688px] 2xl:w-[736px]"
      >
        სწავლება თანამედროვე მეთოდებით, შეფასების ინოვაციური სისტემით და
        პრაქტიკული დავალებებით ქმნის ჩართულ და დინამიურ სასწავლო გარემოს და
        ეხმარება სტუდენტებს აღიჭურვონ საჭირო ცოდნითა და უნარებით
      </p>
      <button className="bg-[#FFFFFF] tiny:mt-8 xl:mt-[62px] tiny:w-full tiny:rounded-[12px] tiny:py-[18px] sm:py-[23px] xl:py-[21px] lg:w-[232px] xl:w-[223px]">
        <span className="font-tavDrigina tiny:text-base">გაწევრიანება</span>
      </button>
    </div>
  );
};

export default Society;
