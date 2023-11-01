import Link from "next/link";
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiLinkedinLine
} from 'react-icons/ri'
import {FaGithub} from 'react-icons/fa'

const Socials = () => {
  return <div className="flex items-center gap-x-5 text-xl relative z-[1000]">

    <Link href={'https://github.com/Atharva-com'} target="_blank" className="hover:text-accent transition-all duration-300">
      <FaGithub />
    </Link>

    <Link href={'https://www.instagram.com/invites/contact/?i=1k97zedl0w4j0&utm_content=qx7xeok'} target="_blank"  className="hover:text-accent transition-all duration-300">
      <RiInstagramLine />
    </Link>

    <Link href={'https://www.facebook.com/profile.php?id=100072092326881'} target="_blank"  className="hover:text-accent transition-all duration-300">
      <RiFacebookLine />
    </Link>

    <Link href={'https://www.linkedin.com/in/atharva-barve-31b5a723a'} target="_blank"  className="hover:text-accent transition-all duration-300">
      <RiLinkedinLine />
    </Link>

  </div>;
};

export default Socials;
