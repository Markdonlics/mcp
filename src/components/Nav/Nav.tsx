import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineProfile } from "react-icons/ai";
import { MdOutlineWeb } from "react-icons/md";
import { MdOutlineMedicalServices } from "react-icons/md";
import { TbComponents } from "react-icons/Tb";
import { TbMessageDots } from "react-icons/Tb";
import { BiUser } from "react-icons/bi";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const links = [
    {
      id: 1,
      title: "home",
      path: "/",
      icon: <AiOutlineHome size={22} title="home" />,
    },
    {
      id: 2,
      title: "pages",
      path: "/",
      icon: <MdOutlineWeb size={22} title="pages" />,
    },
    {
      id: 3,
      title: "components",
      path: "/",
      icon: <TbComponents size={22} title="components" />,
    },
    {
      id: 4,
      title: "services",
      path: "/",
      icon: <MdOutlineMedicalServices size={22} title="services" />,
    },
    {
      id: 5,
      title: "profile",
      path: "/",
      icon: <BiUser size={22} title="profile" />,
    },
    {
      id: 6,
      title: "about",
      path: "/",
      icon: <AiOutlineProfile size={22} title="about" />,
    },
    {
      id: 7,
      title: "contact",
      path: "/",
      icon: <TbMessageDots size={22} title="contact" />,
    },
  ];
  type data = {
    id: number;
    title: string;
    path: string;
    icon: any;
  };
  return (
    <>
      <div className="z-40 sticky top-0 bg-indigo-800 flex-wrap flex items-center lg:justify-center">
        <div className="flex flex-1 lg:flex-none gap-24 justify-between items-center text-indigo-950 uppercase font-semibold p-6">
          <div className="flex items-center flex-shrink-0 text-gray-200 mr-6 active:text-indigo-200">
            <svg
              className="fill-current h-8 w-8 mr-2"
              width="54"
              height="54"
              viewBox="0 0 54 54"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
            </svg>
            <span className="font-bold uppercase text-xl tracking-tighter">
              mcp <span className="capitalize">website</span>
            </span>
          </div>
          <div className="text-indigo-200 block lg:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="px-3 py-2 rounded ring-1 ring-indigo-200 bg-transparent hover:bg-indigo-500 hover:text-gray-200 active:bg-indigo-800"
            >
              <AiOutlineMenu className="fill-current h-3 w-3" title="menu" />
            </button>
          </div>
          <div className="w-full hidden lg:flex lg:items-center lg:w-auto">
            <div className="lg:flex-grow text-sm text-gray-200">
              {links?.map((item: data) => {
                const id = item?.id,
                  title = item?.title,
                  path = item?.path;
                return (
                  <Link
                    key={id}
                    href={path}
                    className="lg:mt-0 mt-4 block mr-5 hover:text-indigo-300 lg:inline-block active:text-indigo-500"
                  >
                    {title}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className={`lg:hidden`}>
        <div
          className={`${
            open ? "w-2/4 sm:w-2/5" : "w-0 sm:w-0"
          } duration-500 fixed top-0 left-0 z-10 min-h-screen text-gray-200 text-sm capitalize bg-indigo-800`}
        >
          <div className="overflow-y-auto relative mx-4 max-h-screen">
            <div className="pt-20"></div>
            <div className="flex flex-col gap-4 relative">
              {links?.map((items: data, i: number) => {
                const id = items?.id,
                  title = items?.title,
                  path = items?.path,
                  icon = items?.icon;
                return (
                  <Link
                    key={i}
                    href={path}
                    onClick={() => setOpen(false)}
                    className={`flex text-sm items-center gap-4 p-2 text-gray-200 font-semibold hover:text-indigo-200 hover:bg-indigo-500 active:text-indigo-500 rounded-md`}
                  >
                    <div>{icon}</div>
                    <h2
                      style={{ transitionDelay: `${i + 1}00ms` }}
                      className={`whitespace-pre duration-500 ${
                        !open && "translate-x-28 opacity-0 overflow-hidden"
                      }`}
                    >
                      {title}
                    </h2>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
