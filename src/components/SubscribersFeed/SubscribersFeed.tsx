import Image from "next/image";
import { Button } from "../ui/button";
import { PlusIcon } from "lucide-react";

const users = [
  {
    id: "1",
    name: "lucas",
    imageSrc: "/images/lukas.png",
  },
  {
    id: "2",
    name: "laura",
    imageSrc: "/images/laura.png",
  },
  {
    id: "3",
    name: "rikki",
    imageSrc: "/images/rikki.png",
  },
  {
    id: "4",
    name: "lucas",
    imageSrc: "/images/lukas.png",
  },
  {
    id: "5",
    name: "laura",
    imageSrc: "/images/laura.png",
  },
  {
    id: "6",
    name: "rikki",
    imageSrc: "/images/rikki.png",
  },
  {
    id: "7",
    name: "lucas",
    imageSrc: "/images/lukas.png",
  },
  {
    id: "8",
    name: "laura",
    imageSrc: "/images/laura.png",
  },
  {
    id: "9",
    name: "rikki",
    imageSrc: "/images/rikki.png",
  },

  {
    id: "10",
    name: "lucas",
    imageSrc: "/images/lukas.png",
  },
  {
    id: "11",
    name: "laura",
    imageSrc: "/images/laura.png",
  },
  {
    id: "12",
    name: "rikki",
    imageSrc: "/images/rikki.png",
  },
];

export const SubscribersFeed = () => {
  return (
    <div className="pt-[18px] pb-5 pl-5 border border-[#dbdbdb] rounded-lg flex gap-[13px] overflow-y-hidden">
      <div className="flex flex-col items-center min-w-[70px] relative">
        <Image
          src="/images/myIcon.jpg"
          alt="user"
          width={70}
          height={70}
          className="rounded-full bg-white border border-gray-200"
        />
        <Button className="bg-[#009BFB] h-5 w-5 p-0 rounded-full absolute right-0 bottom-6">
          <PlusIcon className="w-5 h-5 bg-white" />
        </Button>
        <div className="mt-0.5 text-sm text-[#161722]">Your story</div>
      </div>
      {users.map((item) => {
        return (
          <div
            key={item.id}
            className="flex flex-col items-center min-w-[70px]"
          >
            <Image
              src={item.imageSrc}
              alt="user"
              width={70}
              height={70}
              className="rounded-full p-[3px] bg-white border-[3px] border-red-600"
            />
            <div className="mt-0.5 text-sm text-[#161722]">{item.name}</div>
          </div>
        );
      })}
    </div>
  );
};
