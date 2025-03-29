import Image from "next/image";

const Profession = () => {
  return (
    <div className="bg-[#0766FF] rounded-[22px] relative overflow-hidden tiny:min-h-[288px] md:min-h-[278px] xl:min-h-[400px]">
      <div className="absolute top-0 h-full w-full">
        <div className=" flex justify-between ">
          <Image
            src="/images/hand_ok.png"
            alt="hand ok"
            width={79.45}
            height={141.25}
            objectFit="contain"
            className="tiny:w-[141.25px] tiny:h-auto sm:w-[175.03px] md:w-[141.25px] xl:w-[199.12px]"
          />

          <Image
            src="/images/hand_one_finger.png"
            alt="one finger"
            width={80}
            height={141}
            objectFit="contain"
            className="tiny:w-[142.32px] sm:w-[176.35px] tiny:h-auto md:w-[142.32px] xl:w-[200.82px]"
          />
        </div>
      </div>
      <div className="tiny:flex tiny:flex-col justify-center items-center tiny:px-4 text-center xl:hidden min-h-[308px] sm:min-h-[340px]">
        <span
          className="text-[#fff] font-brainMeltRegular tiny:text-[42px] smaller:text-[48px] sm:text-[52px] md:text-[48px] leading-10
        "
        >
          შეისწავლე მომავლის პროფესიები
        </span>
      </div>
      <div className="xl:flex flex-col justify-center items-center hidden text-center px-6 h-full">
        <span className="text-[#fff] font-brainMeltRegular xl:text-[60px] leading-14">
          შეისწავლე
        </span>
        <span className="text-[#fff] font-brainMeltRegular xl:text-[60px] leading-14">
          მომავლის
        </span>
        <span className="text-[#fff] font-brainMeltRegular xl:text-[60px] leading-14">
          პროფესიები
        </span>
      </div>
      <div className="absolute bottom-0 w-full">
        <div className=" flex justify-between">
          <div className="sm:ml-[39px] md:ml-0">
            <Image
              src="/images/hand_two_fingers.png"
              alt="two finger"
              width={79.62}
              height={141.55}
              objectFit="contain"
              className="tiny:w-[141.55px] sm:w-[175.4px] tiny::h-auto md:w-[141.55px] xl:w-[199.74px]"
            />
          </div>

          <Image
            src="/images/hand_rock.png"
            alt="hand rock"
            width={80}
            height={143}
            objectFit="contain"
            className="tiny:w-[143.52px] sm:w-[177.84px] tiny:h-auto md:w-[143.52px] xl:w-[201.52px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Profession;
