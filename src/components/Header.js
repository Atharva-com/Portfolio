import Image from "next/image";
import Link from "next/link";
import logo from '../../public/logo.svg'
import Socials from "./Socials";

const Header = () => {
  return <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">

    <div className="container mx-auto">

      <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">

        {/* logo */}
        <Link href={'/'}>

          <div className="w-[300px] h-[48px]">
            <h1 className="text-[35px] tracking-widest font-semibold text-center">
              Atharva
              <span className="text-gray-400 font-medium"> Barve</span>
            </h1>
          </div>

        </Link>

        {/* socials */}
        <Socials />

      </div>

    </div>

  </header>;
};

export default Header;
