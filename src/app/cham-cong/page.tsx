"use client"

import TimeKeepingClient from "@/modules/timekeeping";
import { Loader } from "lucide-react";
import React, { Suspense } from 'react';

export default function About() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Suspense
        fallback=
        {
          <div className="w-full h-[500px] flex flex-col justify-center items-center">
            <Loader className="animate-spin" size={24} />
          </div>
        }
      >
        <TimeKeepingClient />
      </Suspense>
    </div>
  );
}
