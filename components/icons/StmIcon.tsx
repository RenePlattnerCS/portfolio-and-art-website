import PNG from "@/public/images/stmLogo.png";
import Image from "next/image";

function STMIcon() {
  return (
    <Image
      src={PNG}
      alt="st"
      width={2000}
      height={2000}
      className="max-w-32 object-contain"
    ></Image>
  );
}
export default STMIcon;
