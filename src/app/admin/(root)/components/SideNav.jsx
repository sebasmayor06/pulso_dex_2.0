"use client "
import Link from "next/link";
import styles from "./SideNav.module.css"
import { usePathname } from 'next/navigation'

const SideNav = ({ name, href, img, isOpen }) => {
  const pathname = usePathname()
  return (
    <>
    
      <Link href={href} >
        <li className={`${styles.flex} ${pathname ===href ?`${styles.flexFocus} bg-[#F3F4F8]` : ""} flex  items-center rounded-xl pl-6 py-[.6rem] my-2 transition duration-300 ease-in hover:bg-[#F3F4F8]`}>
        <div className={`${styles.svgContainer} sidebar_name`} dangerouslySetInnerHTML={{ __html: img }} />
          <h2 className="text-[#8B909A] pl-4 font-semibold group-hover:text-[#23272E] sidebar_name">
            {name}
          </h2>
        </li>
      </Link>
    </>
  );
};

export default SideNav;
