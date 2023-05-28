import Image from "next/image";
import { IoIosLogOut } from "react-icons/io";
import { useSession, signOut } from "next-auth/react";


export const Sidebar = () => {
  const { data } = useSession();
  console.log(data);
  return (
    <div className="flex bg-gray w-5/12 min-h-screen">
      <aside className="w-full shadow-sm shadow-gray-600">
        <div className="flex flex-col mx-auto items-center gap-1 my-8">
          <Image
            className="clip-circle rounded-full"
            src={data?.user?.image || "/blank-profile-picture.jpg"}
            alt="Picture of the author"
            width={90}
            height={90}
          />
          <span className="font-thin text-gray-800 tracking-[0.3em] pt-2">
            {data?.user?.name}
          </span>
          <IoIosLogOut onClick={() => signOut()} className="mb-2" />
        </div>
        <div className="w-full flex">
          <nav className="w-full ">
            <ul className="w-full flex flex-col gap-2 text-xl font-thin tracking-[0.3em] mx-auto items-center">
              <li className="w-full border-0 border-transparent text-gray-800 cursor-pointer">
                Inventarios
              </li>
              <li className="border-0 border-transparent text-gray-800 cursor-pointer">
                Materiales
              </li>
              <li className="border-0 border-transparent text-gray-800 cursor-pointer">
                Usuario
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </div>
  );
};
