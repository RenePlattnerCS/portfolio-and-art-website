import cPNG from "@/public/images/C_Programming_Language.png";
import Image from "next/image";

function CIcon() {
  return (
    <Image
      src={cPNG}
      alt="winauto"
      width={1000}
      height={1000}
      className="max-w-20 object-contain"
    ></Image>
  );
}
export default CIcon;
