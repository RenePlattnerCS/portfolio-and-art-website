import PNG from "@/public/images/logo_qp.png";
import Image from "next/image";

function QPIcon() {
  return (
    <Image
      src={PNG}
      alt="winauto"
      width={1000}
      height={1000}
      className="max-w-20 object-contain"
    ></Image>
  );
}
export default QPIcon;
