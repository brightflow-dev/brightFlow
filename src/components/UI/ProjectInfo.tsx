import Image from "next/image";

interface ProjectInfo {
  projectTitle: string;
  projectDesc: string;
  projectSecondDesc: string;
  image: string;
  secondChild?: boolean;
}

const ProjectInfo = ({
  projectTitle,
  projectDesc,
  projectSecondDesc,
  image,
  secondChild,
}: ProjectInfo) => {
  return (
    <div className="tiny:flex tiny:flex-col md:flex-row-reverse md:justify-center md:items-center pc:max-w-[1287px] pc:mx-auto pc:pl-[141px] 2xl:pl-0">
      <div
        className="w-full bg-[#111214] tiny:min-h-[244px] smaller:min-h-[304px] sm:min-h-[384px] md:min-h-[340px] lg:min-h-[360px] xl:min-h-[420px]
       px-4 md:px-0 md:pl-4 lg:pl-8 xl:pl-[62px] pc:pl-[86px] tiny:py-8 xl:py-[62px] overflow-hidden"
      >
        <div
          className={`w-full tiny:min-h-[180px] smaller:min-h-[240px] sm:min-h-[320px] md:min-h-[240px] relative tiny:rounded-[22px] md:rounded-none  overflow-hidden ${
            secondChild ? "md:rotate-[-10deg] md:ml-[28px]" : ""
          } lg:min-h-[320px] xl:min-h-[360px]`}
        >
          <div className="absolute inset-0 tiny:rounded-[22px] md:rounded-none md:rounded-tl-[22px] md:rounded-bl-[22px] border-[3px] border-transparent bg-gradient-to-r from-[#333] via-transparent to-[#333] p-[3px] overflow-hidden">
            <Image
              src={`${image}`}
              alt="spiderman"
              fill
              unoptimized
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col tiny:gap-2 smaller:gap-4 sm:gap-[26px] md:gap-4 px-4 lg:px-6 pt-6 pb-[62px]">
        <span className="block tiny:text-[20px] smaller:text-2xl xl:text-[40px] text-[#fff] font-tavDrigina">
          {projectTitle}
        </span>
        <div className="flex flex-col tiny:gap-4 xl:gap-6">
          <span className="block tiny:text-xs tiny:leading-[18px] smaller:text-sm smaller:leading-[21px] text-white/50 font-notoRegular">
            {projectDesc}
          </span>
          <span className="block tiny:text-xs tiny:leading-[18px] text-white/50 font-notoRegular smaller:text-sm smaller:leading-[21px]">
            {projectSecondDesc}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
