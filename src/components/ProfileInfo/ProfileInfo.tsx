import Image from "next/image";

export const ProfileInfo = () => {
  return (
    <div className="px-8 py-10 flex flex-row justify-around w-full">
      <Image
        src="/images/myIcon.jpg"
        width={150}
        height={150}
        alt="profile"
        className="rounded-full bg-white border border-gray-200 self-center"
      />
      <div>
        <div className="text-2xl font-light mb-8">alexleshyk</div>
        <div className="flex gap-4 mb-8 text-medium font-medium">
          <div>
            1,132<span className="text-sm ml-2.5 font-normal">Posts</span>
          </div>
          <div>
            60K<span className="text-sm ml-2.5 font-normal">Followers</span>
          </div>
          <div>
            4<span className="text-sm ml-2.5 font-normal">Following</span>
          </div>
        </div>
        <div className="text-base mb-1.5">Mediamodifier•Building Brands</div>
        <div className="text-base mb-1.5 text-gray">Product/service</div>
        <div className="text-base mb-1.5">
          We provide essential tools to help entrepreneurs grow their businesses
          online.
        </div>
        <div className="text-base mb-1.5">mediamodifier.com</div>
      </div>
    </div>
  );
};
