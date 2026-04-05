import { Job } from "@/types";

const baseJob: Omit<Job, "id" | "promoted"> = {
  title: "UI/UX Designer",
  company: "Teams",
  location: "Seattle, USA (Remote)",
  postedAt: "1 day ago",
  applicants: 22,
  type: "remote",
};

function makeJobs(count: number, promoted: boolean): Job[] {
  return Array.from({ length: count }, (_, i) => ({
    ...baseJob,
    id: `${promoted ? "f" : "r"}-${i}`,
    promoted,
  }));
}

export const FEATURED_JOBS: Job[] = makeJobs(5, true);
export const RECOMMENDED_JOBS: Job[] = makeJobs(10, false);
export const LATEST_JOBS: Job[] = makeJobs(10, false);

export const CURRENT_USER = {
  name: "Albert Flores",
  initials: "AF",
  headline: "Senior Product Designer | UI/UX\nDesigner | Graphic Designer | Web...",
  location: "Clinton, Maryland",
  stats: {
    profileVisitors: 140,
    resumeViewers: 20,
    myJobs: 88,
  },
};
