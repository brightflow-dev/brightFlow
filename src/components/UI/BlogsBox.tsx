import Image from "next/image";

interface BlogsBox {
  title: string;
  desc?: string;
  firstElement?: boolean;
}

const BlogsBox = ({ title, desc, firstElement }: BlogsBox) => {
  return (
    <div className="flex flex-col tiny:gap-4 smaller:gap-6 w-full">
      <div className="border rounded-[22px] overflow-hidden w-full">
        <Image
          src="/images/todo.png"
          alt="blog name"
          width={288}
          height={180}
          className={`w-full h-auto object-cover tiny:max-h-[220px] smaller:max-h-[320px] md:max-h-[360px] ${
            firstElement
              ? "lg:h-[320px] pc:h-[380px]"
              : "lg:h-[220px] pc:h-[246px]"
          }`}
        />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-[#fff] font-tavDrigina tiny:text-[20px] smaller:text-2xl block">
          {title}
        </span>
        <span className="text-white/50 tiny:text-xs tiny:leading-[18px] smaller:text-sm smaller:leading-[21px] block">
          {desc}
        </span>
      </div>
    </div>
  );
};

export default BlogsBox;
