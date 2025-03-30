import Programs from "@/components/home/Programs";
import Projects from "@/components/home/Projects";
import Society from "@/components/home/Society";

export default function Home() {
  return (
    <div>
      <div className="bg-[#090B0F] px-4 lg:px-6">
        <Society />
        <Programs />
      </div>

      <Projects />
    </div>
  );
}
