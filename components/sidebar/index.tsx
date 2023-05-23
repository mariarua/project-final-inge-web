import Image from 'next/image';

export const Sidebar = () => (
    <aside className='bg-gray w-[342px] h-screen'>
      <div className='flex flex-col m-3 gap-14'>
        <div className='flex flex-col items-center gap-1 mt-[30px]'>
            <Image
                className='clip-circle'
                src='/favicon.ico'
                alt='Picture of the author'
                width={160}
                height={160}
            />
            <span className='text-white text-[24px]'>Nombre del usuario</span>
        </div>
        <nav>
            <ul className='flex flex-col gap-2'>
                <li>Inventarios</li>
                <li>Materiales</li>
                <li>Usuario</li>
            </ul>
        </nav>
      </div>
    </aside>
  );