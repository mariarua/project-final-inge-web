import Image from "next/image";
import { IoIosLogOut } from "react-icons/io";
import { useSession, signOut } from "next-auth/react";

export const Sidebar = () => {
  const { data } = useSession();
  return (
    <div className="flex w-full drop-shadow-sm">
      <aside className="bg-gray min-h-screen w-5/12">
        <div className="flex flex-col items-center gap-1 my-8">
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
        <nav>
          <ul className="flex flex-col gap-2 text-xl font-thin tracking-[0.3em] ">
            <li className="border-0 border-transparent text-gray-800">
              Inventarios
            </li>
            <li className="border-0 border-transparent text-gray-800">
              Materiales
            </li>
            <li className="border-0 border-transparent text-gray-800">
              Usuario
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
};
