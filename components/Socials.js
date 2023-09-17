import Link from "next/link";

import {RiInstagramLine, RiWhatsappLine, RiLinkedinLine} from 'react-icons/ri'

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-3xl">
      <Link href={''} className="hover:text-accent transition-all duration-300" ><RiInstagramLine /></Link>
      <Link href={''} className="hover:text-accent transition-all duration-300" ><RiWhatsappLine /></Link>
      <Link href={''} className="hover:text-accent transition-all duration-300" ><RiLinkedinLine /></Link>
    </div>
  );
};

export default Socials;
