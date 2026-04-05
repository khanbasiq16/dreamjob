import { Card } from "@/components/ui/card";
import Image from "next/image";

interface ProfileCardProps {
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

export function ProfileCard({ name, initials, headline, location, stats }: ProfileCardProps) {
  return (
    <div className="flex flex-col gap-[14px]">
    

  
<Card padding="none" className="overflow-hidden bg-white rounded-[10px] shadow-sm border-none">
  {/* 1. Banner Header - Height ko thora barhaya hai */}
  <div className="h-[100px] relative bg-gray-100">
    <Image 
      src="/backimage.jpg"
      alt="Profile background"
      fill
      className="object-cover"
      priority
    />
    
    {/* 2. Avatar Container - Is logic ko check karein */}
    <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 z-10">
      <div className="w-[94px] h-[94px] rounded-full border-[4px] border-white overflow-hidden relative shadow-md bg-white">
        <Image 
          src="/profileimage.png"
          alt="Profile" 
          fill
          className="object-cover"
        />
      </div>
    </div>
  </div>

  {/* 3. Text Section - Padding-top barhani hogi taake text image se niche chala jaye */}
  <div className="pt-[55px] pb-8 px-6 text-center">
    <h2 className="text-[22px] font-semibold text-[#1a3352] leading-tight tracking-tight">
      Albert Flores
    </h2>
    
    <p className="text-[14px] font-medium text-[#333333] mt-2 leading-[1.4] max-w-[260px] mx-auto">
      Senior Product Designer | UI/UX
      Designer | Graphic Designer | Web...
    </p>
    
    <p className="text-[12px] text-[#4b5a6e] mt-2 font-medium">
      Clinton, Maryland
    </p>
  </div>
</Card>

      {/* Stats */}
      <Card padding="none" className="overflow-hidden max-[480px]:hidden px-2 py-1">
        {[
          { label: "Profile Visitors", value: stats.profileVisitors },
          { label: "Resume Viewers", value: stats.resumeViewers },
          { label: "My Jobs", value: stats.myJobs },
        ].map((stat, i, arr) => (
          <div
            key={stat.label}
            className={`flex justify-between items-center px-4 py-[11px] ${i < arr.length - 1 ? "border-b border-[#e3e9f0]" : ""}`}
          >
            <span className="text-xs font-medium text-[#4b5a6e]">{stat.label}</span>
            <span className="text-[13.5px] font-bold text-[#0154AA]">{stat.value}</span>
          </div>
        ))}
      </Card>

      {/* Calendar */}
      <Card className="flex justify-between items-center cursor-pointer transition-shadow max-[480px]:hidden">
        <div>
          <div className="text-xs font-semibold text-[#0f1c2e]">My calendar</div>
          <div className="text-[11px] text-[#8a97a8] mt-0.5">Upcoming Interviews</div>
        </div>
        <svg className="w-4 h-4 text-[#8a97a8]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
        </svg>
      </Card>
    </div>
  );
}
