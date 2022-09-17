import Image from "next/image";
import HeaderItem from "../HeaderItem/HeaderItem";

import Icons from "../../utils/consts/Icons";

function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        {Icons.map(({ title, Icon }, index) => (
          <HeaderItem key={index} title={title} Icon={Icon} />
        ))}
      </div>

      <Image
        className="object-contain"
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}
        alt="Hulu logo"
      />
    </header>
  );
}

export default Header;
