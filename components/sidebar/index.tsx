import Image from "next/image";
import { IoIosLogOut } from "react-icons/io";
import { useSession, signOut } from "next-auth/react";
import PrivateComponent from "@/components/privateComponent";
import Link from "@/components/link";

export const Sidebar = () => {
  const { data } = useSession();

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
          <nav className="w-full">
            <ul className="w-full flex flex-col gap-2 text-xl font-thin tracking-[0.3em] mx-auto items-center">
              <li className="border-0 p-0">
                <Link
                  href="/inventario"
                  className="flex p-5 w-full"
                  activeClassName="bg-slate-800 text-white"
                >
                  Inventarios
                </Link>
              </li>
              <li className="border-0 p-0">
                <Link
                  href="/materiales"
                  className="flex p-5 w-full"
                  activeClassName="bg-slate-800 text-white"
                >
                  Materiales
                </Link>
              </li>
              <PrivateComponent roles={["ADMIN"]}>
                <li className="border-0 p-0">
                  <Link
                    href="/usuarios"
                    className="flex p-5 w-full"
                    activeClassName="bg-slate-800 text-white"
                  >
                    Usuario
                  </Link>
                </li>
              </PrivateComponent>
            </ul>
          </nav>
        </div>
      </aside>
    </div>
  );
};
