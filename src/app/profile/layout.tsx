import SideBar from "@/components/SideBar/SideBar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="flex justify-between gap-10 container mx-auto">
      <div>{children}</div>
      <SidebarProvider>
        <SideBar />
      </SidebarProvider>
    </div>
  );
}
