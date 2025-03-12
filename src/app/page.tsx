import { SideBarRight } from "@/components/SideBarRight/SideBarRight";
import { SubscribersFeed } from "@/components/SubscribersFeed";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col m-auto container">
      <div className="flex p-4 shrink-0 items-end rounded-lg bg-blue-500">
        Logo
      </div>
      <div className="flex justify-between gap-8 mx-auto pt-6 w-full">
        <div className="flex flex-col w-[calc(100%-350px)]">
          <SubscribersFeed />
        </div>
        <SidebarProvider className="flex-col w-[350px] pt-14">
          <SideBarRight />
        </SidebarProvider>
      </div>
    </main>
  );
}
