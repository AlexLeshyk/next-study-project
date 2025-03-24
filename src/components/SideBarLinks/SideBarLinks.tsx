import Link from "next/link";

export const SideBarLinks = () => {
  return (
    <nav className="mt-4 flex flex-col gap-3 mr-[42px]">
      <ul className="flex flex-wrap text-[#c7c7c7] text-[11px] gap-2 gap-y-0.5">
        <li>
          <Link href={"/"}>About</Link>
        </li>
        <li>
          <Link href={"/"}>Press</Link>
        </li>
        <li>
          <Link href={"/"}>API</Link>
        </li>
        <li>
          <Link href={"/"}>Jobs</Link>
        </li>
        <li>
          <Link href={"/"}>Privacy</Link>
        </li>
        <li>
          <Link href={"/"}>Terms</Link>
        </li>
        <li>
          <Link href={"/"}>Location</Link>
        </li>
        <li>
          <Link href={"/"}>Hashtags</Link>
        </li>
        <li>
          <Link href={"/"}>Language</Link>
        </li>
      </ul>
      <div className="text-[#c7c7c7] text-[11px] uppercase">© 2021 Instagram from Meta</div>
    </nav>
  );
};
