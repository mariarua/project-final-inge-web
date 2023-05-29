import Layout from "@/layouts/Layout";

interface ManagementProps{
    title: string,
    children: JSX.Element
}

const Management = ({title, children}:ManagementProps) => (
  <>    
    <Layout title={title}>
      <div className="flex items-center flex-col px-[80px] pt-[48px] h-screen gap-[50px]">
        <span className="text-5xl">{title}</span>
        <div className="w-full">
          <div className="flex flex-col gap-[40px]">
            {children}
          </div>
        </div>
      </div>
    </Layout>
  </>
);

export default Management;
