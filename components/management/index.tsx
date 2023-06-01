import Layout from "@/layouts/Layout";
import { ReactNode } from "react";

interface ManagementProps {
  title: string;
  children: ReactNode;
}

const Management = ({ title, children }: ManagementProps) => (
  <>
    <Layout title={title}>
      <div className="flex items-center flex-col px-[80px] pt-[48px] gap-[50px]">
        <span className="text-4xl font-thin uppercase tracking-[0.3em] text-center text-gray-700">
          {title}
        </span>
        <div className="w-full">
          <div className="flex flex-col gap-[40px]">{children}</div>
        </div>
      </div>
    </Layout>
  </>
);

export default Management;
