"use client";
import { JobCard, JobCardProps } from "@/components/JobCard";
import { Button } from "@/components/ui/button";
import { BackButton } from "@twa-dev/sdk/react";
import { Plus, PlusCircle } from "lucide-react";
import { useRouter } from "next/navigation";

export default function jobListings() {
  const jobList: JobCardProps = {
    name: "Internal Listing Name",
    title: "Banquet Server - MBS",
    company: "Acme Pte Ltd",
  };
  const router = useRouter();
  return (
    <div className="flex flex-col h-full pb-16">
      <div className="flex flex-col px-4 pt-10 bg-[#FBFBFB] rounded-b-lg w-full h-44">
        <div className="">
          <p className="text-xl font-semibold text-left">Your Listings</p>
        </div>
        <div className="flex mt-11 text-left justify-start">
          <Button variant="ghost" size="sm">
            <span className="text-sm font-medium">Active</span>
          </Button>
          <Button variant="ghost" size="sm">
            <span className="text-sm font-medium">Inactive</span>
          </Button>
        </div>
      </div>
      <div>
        <JobCard {...jobList} />
        <JobCard {...jobList} />
        <JobCard {...jobList} />
      </div>

      <Button
        className="fixed bottom-[76px] right-4 rounded-full p-1 h-14 w-14 shadow-md"
        variant="default"
        size="icon"
        onClick={() =>
          router.push("/business-portal/dashboard/job-listings/add-listing")
        }
      >
        <Plus className="text-white size-8" />
      </Button>
      <BackButton />
    </div>
  );
}
