"use client";
import { useState } from "react";
import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { SideBarLinks } from "../SideBarLinks";

const items = [
  {
    id: "1",
    name: "lucas",
    description: "Followed by mark + 2 more",
    imageSrc: "/images/lukas.png",
  },
  {
    id: "2",
    name: "laura",
    description: "Followed by brandon + 6 more",
    imageSrc: "/images/laura.png",
  },
  {
    id: "3",
    name: "rikki",
    description: "Followed by brandon + 6 more",
    imageSrc: "/images/rikki.png",
  },
];

export const SideBarRight = () => {
  const [activeRow, setActiveRow] = useState<string>("");
  const router = useRouter();

  const handleSideBarClick = (name: string) => {
    setActiveRow(name);
  };

  return (
    <>
      <div className="flex items-center mb-4">
        <Image
          src="/images/myIcon.jpg"
          alt="description"
          width={56}
          height={56}
          className="mr-3 rounded-full bg-slate-200 border border-gray-200"
        />
        <div className="flex flex-col items-start ml-3 mr-2">
          <div className="text-black text-sm ">alexleshyk</div>
          <div className="mt-2 text-[#8E8E8E] text-xs">Leshyk Alex</div>
        </div>
        <Link href="/" className="ml-auto text-[#0095F6] font-semibold text-xs">
          Switch
        </Link>
      </div>
      <div className="flex justify-between items-center mb-3">
        <div className="font-semibold text-sm text-[#8E8E8E]">Suggestions For You</div>
        <Link href="/" className="ml-auto text-[#262626] font-semibold text-xs">
          See All
        </Link>
      </div>
      {items.map((item) => (
        <SidebarMenuItem
          key={item.id}
          className={`flex items-center border-l-4 border-transparent mr-9 ${
            activeRow === item.name ? "border-red-500" : ""
          }`}
          onClick={() => handleSideBarClick(item.name)}
        >
          <SidebarMenuButton
            asChild
            className="border-transparent rounded-sm p-2"
          >
            <div className="flex items-center h-auto gap-0 ">
              <Image
                src={item.imageSrc}
                alt={item.name}
                width={32}
                height={32}
                className="mr-3"
              />
              <div className="flex flex-col items-start mr-2">
                <div className="text-black text-sm leading-none">{item.name}</div>
                <div className="mt-2 text-[#8E8E8E] text-xs leading-none">
                  {item.description}
                </div>
              </div>
              <Link
                href="/"
                className="ml-auto text-[#0095F6] font-semibold text-xs"
              >
                Follow
              </Link>
            </div>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
      <SideBarLinks />
    </>
  );
};
