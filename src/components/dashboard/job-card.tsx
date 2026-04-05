
"use client";
import { useState } from "react";
import { Job } from "@/types";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const LocationIcon = () => (
  <svg className="w-3 h-3 flex-shrink-0 text-[#8a97a8]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
  </svg>
);

const ClockIcon = () => (
  <svg className="w-3 h-3 flex-shrink-0 text-[#8a97a8]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10"/>
    <path strokeLinecap="round" d="M12 6v6l4 2"/>
  </svg>
);

const BookmarkIcon = ({ saved }: { saved: boolean }) => (
  <svg className="w-[14px] h-[14px]" fill={saved ? "#0154AA" : "none"} stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
  </svg>
);

interface JobCardProps {
  job: Job;
}

export function JobCard({ job }: JobCardProps) {
  const [saved, setSaved] = useState(job.saved ?? false);

  return (
    <div className="
      bg-white border border-[#e3e9f0] rounded-[10px]
      p-3 sm:p-[14px]
      flex flex-col gap-2 sm:gap-[10px]
      cursor-pointer
      transition-all duration-[180ms]
      hover:shadow-[0_4px_18px_rgba(1,84,170,0.10)]
      hover:-translate-y-0.5
      hover:border-[#cce0f5]
      w-full
      min-w-0
      box-border
    ">

      {/* Promoted Badge */}
      {job.promoted && (
        <span className="text-[10px] font-semibold text-black  px-[2px] py-[3px]  w-fit tracking-[0.02em] leading-none">
          Promoted
        </span>
      )}

      {/* Company Logo + Title */}
      <div className="flex items-center gap-2 sm:gap-[10px] min-w-0">
        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#FAFAFA] flex items-center justify-center flex-shrink-0 overflow-hidden">
          <img
            src="/teams.png"
            alt="Team Logo"
            className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
          />
        </div>
        <div className="min-w-0 flex-1">
          <div className="text-[12px] sm:text-[12.5px] font-medium text-[#0f1c2e] leading-tight truncate">
            {job.title}
          </div>
          <div className="text-[10px] font-medium sm:text-[11px] text-[#8a97a8] mt-px truncate">
            {job.company}
          </div>
        </div>
      </div>

      {/* Location + Posted At */}
      <div className="flex flex-col gap-1 sm:gap-[5px] min-w-0">
        <div className="flex items-center gap-[5px] text-[10px] sm:text-[11px] text-[#4b5a6e] min-w-0">
          <LocationIcon />
          <span className="truncate">{job.location}</span>
        </div>
        <div className="flex items-center gap-[5px] text-[10px] sm:text-[11px] text-[#4b5a6e] flex-wrap">
          <ClockIcon />
          <span className="whitespace-nowrap">{job.postedAt}</span>
          <span className="text-[#e3e9f0] mx-0.5">|</span>
          <a href="#" className="text-[#0154AA] font-semibold no-underline hover:underline whitespace-nowrap">
            {job.applicants} applicants
          </a>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2 mt-0.5">
        <Button
          size="sm"
          className="flex-1 text-center hover:scale-[1.02] text-[11px] sm:text-sm h-[30px] sm:h-[36px] px-2"
        >
          Apply Now
        </Button>
        <button
          title={saved ? "Unsave" : "Save"}
          onClick={(e) => {
            e.stopPropagation();
            setSaved(!saved);
          }}
          className={cn(
            "border-none rounded-lg w-[30px] h-[30px] flex items-center justify-center cursor-pointer flex-shrink-0 transition-all bg-transparent",
            saved
              ? "text-[#0154AA] bg-[#e6f0fb]"
              : "text-[#8a97a8] hover:text-[#0154AA] hover:bg-[#e6f0fb]"
          )}
        >
          <BookmarkIcon saved={saved} />
        </button>
      </div>
    </div>
  );
}