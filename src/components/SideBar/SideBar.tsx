"use client"
import { useState } from "react";
import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";

const items = [
  {
    id: '1',
    name: 'lucas',
    description: 'Followed by mark + 2 more',
    image: 'https://avatarzo.ru/wp-content/uploads/zevayushhij-kot.jpg',
  },
  {
    id: '2',
    name: 'laura',
    description: 'Followed by brandon + 6 more',
    image: 'https://avatarzo.ru/wp-content/uploads/zevayushhij-kot.jpg'
  },
];

const SideBar = () => {
  const [activeRow, setActiveRow] = useState<string>('');

  const handleSideBarClick = (name: string) => {
    setActiveRow(name);
  };

  return (
    <div>
      {items.map(item => (
        <SidebarMenuItem
          key={item.id}
          className={`flex items-center border-l-3 border-transparent ${
            activeRow === item.name ? 'border-red-500' : ''}`}
          onClick={() => handleSideBarClick(item.name)}
        >
          <SidebarMenuButton
            asChild
            className='border-transparent rounded-sm p-2'
          >
            <div className=" flex flex-col h-auto gap-0 !items-start">
              <div className="text-black text-sm ">{item.name}</div>
              <div className="mt-2 text-[#8E8E8E] text-xs">{item.description}</div>
            </div>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </div>
  );
}

export default SideBar
