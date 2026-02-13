import CodeArtParalax from "@/components/paralax/CodeArtParalax";

import Image from "next/image";
import HeroCarousel, {
  artImageLink,
  projectImageLink,
} from "@/components/home/HeroCarousel";
import { fetchAllProjects, fetchFeaturedProducts } from "@/utils/actions";
import backgroundImg from "@/public/images/Cali.png";
import TextParalax from "@/components/paralax/TextParalax";
import SkillsList from "@/components/home/SkillsList";

async function HomePage() {
  const projects = await fetchAllProjects({ search: "" });
  const featuredArt = await fetchFeaturedProducts();

  const items: (projectImageLink | artImageLink)[] = [];
  projects.map((project) => {
    const { profileImage, id } = project;
    items.push({ profileImage, id, link: "projects" });
  });

  featuredArt.map((art) => {
    const { image, id } = art;
    items.push({ image, id, link: "art" });
  });

  return (
    <div className=" bg-sky-100  ">
      <div className="flex items-center justify-center">
        <h1 className="sm:text-9xl font-bold text-6xl p-8 mt-20 leading-10   gap-2 sm:gap-x-6">
          Welcome
        </h1>
      </div>

      <div className="p-1 flex flex-wrap items-center justify-center bg-gray-550  ">
        <HeroCarousel items={items}></HeroCarousel>
      </div>

      <div className="relative w-screen h-140 ">
        <CodeArtParalax></CodeArtParalax>
      </div>

      <div className="relative mt-45 md:mt-50 w-screen h-screen xl:mt-150">
        <div className="overflow-hidden">
          <Image
            src={backgroundImg}
            alt="Cover Image"
            className="object-cover"
            fill
            unoptimized
          />
        </div>
        <TextParalax
          title={"After Graduation"}
          text={`I pursued game development after university, which taught me how to learn rapidly and solve complex technical problems. 
            My upcoming projects will focus on the world of embedded systems, driven by my interest in understanding how things work under the hood and in low-level systems programming and optimization.
            Now I'm seeking embedded systems roles where I can contribute my systematic problem-solving, hands-on experience with bare-metal 
            programming and communication protocols, and eagerness to build meaningful products.
            `}
        ></TextParalax>

        <div className="absolute md:top-100 top-130">
          <TextParalax
            title={"contact me"}
            text={`Feel free to explore my work — I’m ready to help build something great with you!`}
          ></TextParalax>
        </div>
      </div>

      <div className="mt-24 px-8">
        <SkillsList />
      </div>
    </div>
  );
}
export default HomePage;
