import BlogsBox from "../UI/BlogsBox";
import ArrowMore from "../UI/ArrowMore";

const OurBlog = () => {
  return (
    <div className="w-full md:mt-[62px] pc:mt-[92px] 2xl:mt-[62px] flex flex-col tiny:gap-[40px] sm:gap-[34px] md:gap-[32px] pc:gap-[40px]">
      <div className="text-center">
        <span
          className="text-white font-tavDrigina tiny:text-[28px] tiny:leading-[32px] smaller:text-[32px] smaller:leading-[36px] sm:text-[42px]
        sm:leading-[42px] md:text-[48px] md:leading-[58px] lg:text-[44px] lg:leading-[58px] pc:leading-[66px]"
        >
          ჩვენი ბლოგი
        </span>
      </div>
      <div className="tiny:flex flex-col justify-center items-center tiny:gap-6 smaller:gap-8 md:hidden">
        <BlogsBox
          title="ბლოგის დასახელება"
          desc="სამენტორო პროგრამის ფარგლებში თქვენ იმუშავებთ რეალურ პროექტებზე, რომელითაც გაამრავალფეროვნებთ თქვენს პორტფოლიოს"
        />
        <BlogsBox title="ბლოგის დასახელება" />
        <BlogsBox title="ბლოგის დასახელება" />
        <BlogsBox title="ბლოგის დასახელება" />
      </div>
      <div className="md:flex justify-center tiny:hidden gap-4 xl:hidden">
        <div className="w-[50%] flex flex-col gap-[24px]">
          <BlogsBox
            title="ბლოგის დასახელება"
            desc="სამენტორო პროგრამის ფარგლებში თქვენ იმუშავებთ რეალურ პროექტებზე, რომელითაც გაამრავალფეროვნებთ თქვენს პორტფოლიოს"
            firstElement={true}
          />
          <BlogsBox title="ბლოგის დასახელება" />
          <BlogsBox title="ბლოგის დასახელება" />
        </div>
        <div className="w-[50%] flex flex-col gap-[24px]">
          <BlogsBox title="ბლოგის დასახელება" />
          <BlogsBox title="ბლოგის დასახელება" />
          <BlogsBox title="ბლოგის დასახელება" />
        </div>
      </div>
      <div className="hidden xl:grid grid-cols-3 gap-4">
        <div className="">
          <BlogsBox
            title="ბლოგის დასახელება"
            desc="სამენტორო პროგრამის ფარგლებში თქვენ იმუშავებთ რეალურ პროექტებზე, რომელითაც გაამრავალფეროვნებთ თქვენს პორტფოლიოს"
            firstElement={true}
          />
        </div>
        <div className="flex flex-col gap-6">
          <BlogsBox title="ბლოგის დასახელება" />
          <BlogsBox title="ბლოგის დასახელება" />
        </div>
        <div className="flex flex-col gap-6">
          <BlogsBox title="ბლოგის დასახელება" />
          <BlogsBox title="ბლოგის დასახელება" />
        </div>
      </div>
      <div className="flex justify-center items-center tiny:gap-6 pc:gap-4 font-tavDrigina">
        <span className="tiny:text-sm text-[#fff] pc:text-base">
          მეტის ნახვა
        </span>
        <ArrowMore />
      </div>
    </div>
  );
};

export default OurBlog;
