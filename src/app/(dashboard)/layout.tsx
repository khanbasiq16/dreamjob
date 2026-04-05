import { Navbar } from "@/components/dashboard/navbar";
import { Sidebar } from "@/components/dashboard/sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
   <div className="mx-auto max-w-[1440px] px-4 py-5 pb-10 
                grid grid-cols-1 gap-4 
                md:grid-cols-[220px_1fr] md:gap-5 
                lg:grid-cols-[240px_1fr] 
                xl:grid-cols-[260px_1fr] xl:px-6
                max-[480px]:px-3 max-[480px]:py-3">
        <Sidebar />
        <main className="flex flex-col gap-[22px]">{children}</main>
      </div>
    </>
  );
}
