export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  postedAt: string;
  applicants: number;
  type: "full-time" | "part-time" | "contract" | "remote";
  promoted?: boolean;
  saved?: boolean;
}

export interface User {
  name: string;
  initials: string;
  headline: string;
  location: string;
  stats: {
    profileVisitors: number;
    resumeViewers: number;
    myJobs: number;
  };
}

export interface NavLink {
  label: string;
  href: string;
  active?: boolean;
}
