import Image from "next/image";
import backgroundImg from "@/public/images/AboutImg2.png";

function AboutPage() {
  return (
    <div className="bg-gray-950/90 z-0">
      <section className="mt-12 flex items-center justify-center">
        <div className="overflow-hidden">
          <Image
            src={backgroundImg}
            alt="Cover Image"
            className="object-cover"
            fill
          />
        </div>

        <div className=" sm:bg-blue-400/40 rounded-lg bg-black/80 sm:w-150 md:w-250 z-2 flex flex-col flex-wrap gap-2 sm:gap-x-6 items-center justify-center  leading-none tracking-wide  p-8 mt-12">
          <h1 className="text-white text-4xl font-bold sm:text-6xl">
            About me
          </h1>
          <p className="sm:text-sky-100 p-5 leading-7 sm:text-2xl text-md  text-white">
            Hi, I&apos;m René. <br></br>I graduated from the University of
            Tübingen with a Bachelor&apos;s degree in Computer Science and a
            strong passion for building games and other software. After a year
            of working on my art projects and game development, I&apos;ve
            recently shifted my focus toward embedded systems programming.
            I&apos;m currently exploring new opportunities where I can grow as a
            developer and collaborate with teams who value precision,
            creativity, and continuous learning.
          </p>

          <p className="sm:text-sky-100 p-5 sm:text-lg text-xs text-white">
            Alongside my technical work, I keep my creative side alive, which
            you&apos;ll see reflected in the artwork featured on this site. I
            believe that combining analytical thinking with creativity leads to
            clearer ideas, stronger problem-solving, and more thoughtful designs
            — whether I&apos;m writing embedded C/C++ code or sketching on a
            canvas. Thanks for taking the time to visit my portfolio. If
            you&apos;re interested in collaborating, discussing embedded
            systems, or simply connecting, feel free to reach out
          </p>
        </div>
      </section>
    </div>
  );
}
export default AboutPage;
