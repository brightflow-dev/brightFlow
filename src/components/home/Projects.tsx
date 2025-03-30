import ProjectInfo from "../UI/ProjectInfo";

const Projects = () => {
  return (
    <div className="tiny:mt-[62px] md:mt-[67px] lg:mt-[62px] pc:mt-[92px] 2xl:mt-[62px]">
      <div
        className="text-center flex flex-col tiny:gap-2 smaller:gap-[14px] sm:gap-4 md:gap-2 tiny:pb-[40px] md:pb-[32px] lg:pb-[40px] justify-center items-center
      bg-[#090B0F] px-4 lg:px-6"
      >
        <span
          className="block font-tavDrigina tiny:text-[28px] tiny:leading-[36px] text-[#fff] smaller:text-[32px] smaller:leading-[42px]
        sm:text-[42px] sm:leading-[52px] md:text-[48px] md:leading-[58px] lg:text-[44px] xl:leading-[66px]"
        >
          პროექტები რაზეც მოგიწევთ სამენტორო პროგრამის დროს მუშაობა
        </span>
        <span className="block font-tavDrigina tiny:text-xs tiny:leading-[18px] text-white/50 smaller:text-sm smaller:leading-[21px] xl:w-[816px] pc:w-[688px] 2xl:w-[986px]">
          სწავლება თანამედროვე მეთოდებით, შეფასების ინოვაციური სისტემით და
          პრაქტიკული დავალებებით ქმნის ჩართულ და დინამიურ სასწავლო გარემოს და
          ეხმარება სტუდენტებს აღიჭურვონ საჭირო ცოდნითა და უნარებით
        </span>
      </div>

      <ProjectInfo
        projectTitle="პირველი პროექტი"
        projectDesc="სამენტორო პროგრამის ფარგლებში თქვენ იმუშავებთ რეალურ პროექტებზე,
            რომელითაც გაამრავალფეროვნებთ თქვენს პორტფოლიოს"
        projectSecondDesc="გეყოლებათ მენტორი რომელიც მოახდენს თქვენს დაკვირვებას იმ შემთხვევაში
            თუ დაპრკოლებას წააწყდებით დაგეხმარებათ"
        image="/images/todo.png"
      />
      <ProjectInfo
        projectTitle="პირველი პროექტი"
        projectDesc="სამენტორო პროგრამის ფარგლებში თქვენ იმუშავებთ რეალურ პროექტებზე,
            რომელითაც გაამრავალფეროვნებთ თქვენს პორტფოლიოს"
        projectSecondDesc="გეყოლებათ მენტორი რომელიც მოახდენს თქვენს დაკვირვებას იმ შემთხვევაში
            თუ დაპრკოლებას წააწყდებით დაგეხმარებათ"
        image="/images/todo.png"
        secondChild={true}
      />
    </div>
  );
};

export default Projects;
