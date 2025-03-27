const Society = () => {
  return (
    <div className="mt-6">
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
      <div className="flex flex-col mt-4">
        <span className="font-tavDrigina text-[28px] leading-9 bg-gradient-to-r from-[#FFFFFF] from-[0%] via-[#2F2F2F] via-[68%] to-[#2F2F2F] to-[100%] bg-clip-text text-transparent">
          ციფრული
        </span>
        <span className="font-tavDrigina text-[28px] leading-9 bg-gradient-to-r from-[#FFFFFF] from-[0%] via-[#2F2F2F] via-[68%] to-[#2F2F2F] to-[100%] bg-clip-text text-transparent">
          პროდუქტების
        </span>
        <span className="font-tavDrigina text-[28px] leading-9 bg-gradient-to-r from-[#FFFFFF] from-[0%] via-[#2F2F2F] via-[68%] to-[#2F2F2F] to-[100%] bg-clip-text text-transparent">
          საზოგადოება
        </span>
      </div>
      <p className="text-xs text-[#fff] opacity-50 font-tavDrigina mt-2">
        სწავლება თანამედროვე მეთოდებით, შეფასების ინოვაციური სისტემით და
        პრაქტიკული დავალებებით ქმნის ჩართულ და დინამიურ სასწავლო გარემოს და
        ეხმარება სტუდენტებს აღიჭურვონ საჭირო ცოდნითა და უნარებით
      </p>
      <button className="bg-[#FFFFFF] mt-8">
        <span>გაწევრიანება</span>
      </button>
    </div>
  );
};

export default Society;
