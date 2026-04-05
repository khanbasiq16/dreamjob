import { JobCard } from "@/components/dashboard/job-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FEATURED_JOBS, RECOMMENDED_JOBS, LATEST_JOBS } from "@/constants/jobs";



const SearchIcon = ({
  size = 15,
  strokeWidth = 2,
}: {
  size?: number;
  strokeWidth?: number;
}) => (
  <svg
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    viewBox="0 0 24 24"
  >
    <circle cx="11" cy="11" r="8" />
    <path strokeLinecap="round" d="M21 21l-4.35-4.35" />
  </svg>
);

const ChevronDown = ({ className }: { className?: string }) => (
  <svg
    className={
      className ||
      "absolute right-[10px] top-1/2 -translate-y-1/2 w-[14px] h-[14px] text-[#8a97a8] pointer-events-none"
    }
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

function JobsGrid({ jobs }: { jobs: typeof FEATURED_JOBS }) {
  return (
    <div className="grid grid-cols-5 gap-3 max-[1100px]:grid-cols-4 max-[900px]:grid-cols-3 max-[768px]:grid-cols-2 max-[360px]:grid-cols-1">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}

function SectionHeader({ title, href }: { title: string; href: string }) {
  return (
    <div className="flex justify-start gap-3 items-center mb-3">
      <h2 className="text-[15px] font-medium text-[#0f1c2e]">{title}</h2>
      <a
        href={href}
        className="text-xs  text-[#0154AA] no-underline hover:underline"
      >
        See {title}
      </a>
    </div>
  );
}

export default function FindJobsPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative rounded-[10px]  px-0 py-7 overflow-hidden before:content-[''] before:absolute  before:pointer-events-none  max-[768px]:px-5 max-[480px]:px-4 max-[480px]:py-4">
        <h1 className="text-[clamp(18px,2.2vw,26px)] font-semibold text-[#0f1c2e] leading-tight max-[480px]:text-lg">
          Find your Dream Job, <span className="text-[#0154AA]">Albert!</span>
        </h1>
        <p className="text-[13px] font-medium text-[#4b5a6e] mt-1.5">
          Explore the latest job openings and apply for the best opportunities
          available today!
        </p>

        <div className="bg-[#FFFFFF] flex rounded-[10px] gap-3 mt-[18px] px-3 sm:px-4 py-4 sm:py-5 flex-col lg:flex-row lg:items-center w-full box-border">
          {/* Search Input */}
          <div className="flex-1 min-w-0 w-full">
            <Input
              placeholder="Job Title, Company, or Keywords"
              bgcolor="#FFFFFF"
              border="none"
              focus="none"
            />
          </div>

          <div className="hidden lg:block h-8 w-[1px] bg-[#e3e9f0] flex-shrink-0" />

          <div className="relative w-full lg:w-auto lg:flex-shrink-0">
            <select className="w-full lg:min-w-[150px] pl-3 pr-8 py-2.5 text-[12px] sm:text-[13px] border border-[#e3e9f0] lg:border-none rounded-lg lg:rounded-none text-[#4b5a6e] cursor-pointer outline-none focus:border-[#0154AA] transition-all font-sans appearance-none bg-white">
              <option>Select Location</option>
              <option>Seattle, USA (Remote)</option>
              <option>New York, USA</option>
              <option>San Francisco, USA</option>
            </select>
            <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
              <ChevronDown className="w-4 h-4 text-[#8a97a8]" />
            </div>
          </div>

          <div className="hidden lg:block h-8 w-[1px] bg-[#e3e9f0] flex-shrink-0" />

          <div className="relative w-full lg:w-auto lg:flex-shrink-0">
            <select className="w-full lg:min-w-[130px] pl-3 pr-8 py-2.5 text-[12px] sm:text-[13px] border border-[#e3e9f0] lg:border-none rounded-lg lg:rounded-none text-[#4b5a6e] cursor-pointer outline-none focus:border-[#0154AA] transition-all font-sans appearance-none bg-white">
              <option>Job Type</option>
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Contract</option>
            </select>
            <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
              <ChevronDown className="w-4 h-4 text-[#8a97a8]" />
            </div>
          </div>

          {/* Search Button */}
          <Button
            type="button"
            className="flex items-center justify-center gap-2 px-10 py-2.5 w-full lg:w-auto lg:flex-shrink-0 transition-all active:scale-95"
          >
            <SearchIcon size={16} strokeWidth={2.5} />
            <span className="font-semibold text-[13px]">Search</span>
          </Button>
        </div>

        {/* Tags */}

        <div className="flex items-center gap-2 sm:gap-3 mt-[14px] flex-wrap">
          <span className="text-[11px] sm:text-[12px] text-[#737A91] flex-shrink-0">
            Similar:
          </span>

          {["Frontend", "Backend", "Graphic Designer"].map((tag) => (
            <span
              key={tag}
              className="text-[11px] sm:text-[12px] font-medium px-3 sm:px-5 py-1.5 sm:py-2 border-[1.5px] border-[#8c94ac] rounded-[5px] text-[#737A91] bg-transparent cursor-pointer select-none hover:bg-gray-50 transition-all whitespace-nowrap"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Featured Jobs */}
      <section>
        <SectionHeader title="Featured Jobs" href="#" />
        <JobsGrid jobs={FEATURED_JOBS} />
      </section>

      {/* Recommended Jobs */}
      <section>
        <SectionHeader title="Recommended Jobs" href="#" />
        <JobsGrid jobs={RECOMMENDED_JOBS} />
      </section>

      {/* Latest Jobs */}
      <section>
        <SectionHeader title="Latest Jobs" href="#" />
        <JobsGrid jobs={LATEST_JOBS} />
      </section>
    </>
  );
}
