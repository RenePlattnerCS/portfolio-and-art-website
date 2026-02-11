import Image from "next/image";
import Link from "next/link";
import backgroundImg from "@/public/images/japan.png";

function ContactPage() {
  return (
    <div className="bg-emerald-500/50 z-0">
      <section className="mt-12 flex items-center justify-center">
        <div className="overflow-hidden">
          <Image
            src={backgroundImg}
            alt="Cover Image"
            className="object-cover"
            fill
          />
        </div>

        <div className="p-8 mt-12 z-2 bg-green-100/70  justify-center items-center flex flex-col w-7/10 rounded-2xl">
          <h1 className="text-3xl text-black mb-3 lg:text-6xl"> Contact Me</h1>
          <p className="text-black sms:text-lg md:text-xl lg:text-2xl w-7/10 text-xs p-4">
            I&apos;m always open to new opportunities, collaborations, or just a
            friendly chat. Whether you&apos;re hiring, have a project in mind,
            or want to connect — feel free to reach out!
            <br />
            📧 Email:{" "}
            <Link
              href="mailto:rene.plattner.dev@gmail.com"
              target="_blank"
              className="text-blue-600 hover:text-blue-800 "
            >
              rene.plattner.dev@gmail.com
            </Link>
            <br />
            💼 LinkedIn:{" "}
            <Link
              href="https://www.linkedin.com/in/rene-plattner-4ab105390/"
              target="_blank"
              className="text-blue-600 hover:text-blue-800 "
            >
              linkedin.com/in/rene-plattner-4ab105390/
            </Link>
            <br />
            🐙 GitHub:{" "}
            <Link
              href="https://github.com/RenePlattnerCS?tab=repositories"
              target="_blank"
              className="text-blue-600 hover:text-blue-800 "
            >
              github.com/RenePlattnerCS
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
export default ContactPage;
