"use client";

import React from "react";
import { Separator } from "./ui/separator";

export type JobCardProps = {
  name?: string;
  title?: string;
  company?: string;
};

export const JobCard = ({ name, title, company }: JobCardProps) => {
  return (
    <div className="flex flex-col h-48 gap-2 p-4 pb-5 hover:bg-gray-100 hover:rounded-lg">
      <div>
        <span className="font-medium text-xs text-gray-600">{name}</span>
      </div>
      <div>
        <span className="font-semibold text-md">{title}</span>
        <br />
        <span className="font-medium text-xs">{company}</span>
      </div>
      <div className="mt-10 w-full grid grid-cols-3 gap-2 justify-around text-center">
        <div>
          <span className="font-semibold text-xs">Reach: 10,000</span>
        </div>
        <div>
          <span className="font-semibold text-xs">Applications: 100</span>
        </div>
        <div>
          <span className="font-semibold text-xs">Shortlisted: 10</span>
        </div>
      </div>
      <div>
        <Separator className="mt-4" />
      </div>
    </div>
  );
};
