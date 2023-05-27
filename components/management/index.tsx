import Layout from "@/layouts/Layout";

interface ManagementProps{
    title: string,
    buttonName: string,
    children: JSX.Element[]
}

const Management = ({title, buttonName, children}:ManagementProps) => (
  <>    
    <Layout title={title}>
      <div className="flex items-center flex-col px-[80px] pt-[48px] h-screen gap-[120px]">
        <span className="text-5xl">{title}</span>
        <div className="w-full">
          <div className="flex flex-col gap-[40px]">
            <div className="flex justify-between">
                {children[0]}
                <button>{buttonName}</button>
            </div>
            {children[1]}
            {children[2]}
          </div>
        </div>
      </div>
    </Layout>
  </>
);

export default Management;
