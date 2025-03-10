"use client"
import { ProfileInfo } from "@/components/ProfileInfo";

export default function ProfilePage() {
  return (
    <div>
      <div className="flex w-full items-center gap-8">
        <ProfileInfo />
      </div>
    </div>
  );
}
