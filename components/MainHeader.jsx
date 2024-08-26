import Link from "next/link";
import Image from "next/image";
import Styles from "./component-styles.module.css";
import logoImage from "@/assets/logo.png";
const MainHeader = () => {
  console.log("MainHeader testing something nowww!");
  return (
    <div className={Styles.headerWrapper}>
      <Link href={"/"}>
        <Image width={20} height={20} src={logoImage}></Image>
      </Link>

      <Link href="/community">Community</Link>
      <Link href="/meals">Meals</Link>
    </div>
  );
};

export default MainHeader;
