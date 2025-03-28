import InfoBox from "../UI/InfoBox";
import Mentor from "../Design/Mentor";

const Programs = () => {
  return (
    <div
      className="tiny:pt-[62px] pc:pt-[117px] 2xl:pt-[62px] 
    pc:w-[1156px] pc:mx-auto 2xl:w-full"
    >
      <div className="flex justify-center items-center text-center">
        <span
          className="text-[#fff] font-tavDrigina tiny:text-[28px] tiny:leading-9 smaller:text-[32px] smaller:leading-[42px] sm:text-[42px] sm:leading-[52px]
        md:text-[48px] md:leading-[58px] lg:text-[44px] xl:leading-[66px] tiny:pb-6 sm:pb-[16px] md:pb-10 xl:pb-[62px] pc:pb-10 2xl:pb-[62px]"
        >
          ადგილი სადაც ადამიანებს ვეხმარებით ციფრულ სამყაროში გზის აღმოჩენაში
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 tiny:gap-4">
        {/* <div className="flex gap-4 flex-col"> */}
        <Mentor />

        <InfoBox
          title="UI/UX"
          about="სამენტორო პროგრამა"
          desc="სამენტორო პროგრამის ფარგლებში თქვენ იმუშავებთ რეალურ პროექტებზე, რომელითაც გაამრავალფეროვნებთ თქვენს პორტფოლიოს"
          color="#FFA500"
        />

        <InfoBox
          title="REACT"
          about="სამენტორო პროგრამა"
          desc="სამენტორო პროგრამის ფარგლებში თქვენ იმუშავებთ რეალურ პროექტებზე, რომელითაც გაამრავალფეროვნებთ თქვენს პორტფოლიოს"
          color="#0766FF"
        />

        <InfoBox
          title="UI/UX"
          about="დიზაინის კურსი"
          desc="სამენტორო პროგრამის ფარგლებში თქვენ იმუშავებთ რეალურ პროექტებზე, რომელითაც გაამრავალფეროვნებთ თქვენს პორტფოლიოს"
          color="#D5FE00"
        />

        <InfoBox
          title="REACT"
          about="დეველოპმენტის კურსი"
          desc="სამენტორო პროგრამის ფარგლებში თქვენ იმუშავებთ რეალურ პროექტებზე, რომელითაც გაამრავალფეროვნებთ თქვენს პორტფოლიოს"
          color="#5865F2"
        />
      </div>
    </div>
  );
};

export default Programs;
