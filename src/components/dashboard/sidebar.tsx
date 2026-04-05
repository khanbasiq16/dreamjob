import { ProfileCard } from "@/components/dashboard/profile-card";
import { CURRENT_USER } from "@/constants/jobs";

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-[14px] max-[800px]:grid max-[768px]:grid-cols-2 max-[800px]:gap-3 max-[480px]:grid-cols-1">
      <ProfileCard
        name={CURRENT_USER.name}
        initials={CURRENT_USER.initials}
        headline={CURRENT_USER.headline}
        location={CURRENT_USER.location}
        stats={CURRENT_USER.stats}
      />
    </aside>
  );
}
