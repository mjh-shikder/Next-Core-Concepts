import Container from "@/components/shared/Container";
import { Key } from "lucide-react";
import React from "react";

const loading = () => {
  return (
    <div>
      <Container>
        <div className="mt-15 grid grid-cols-3 gap-5">
          {[...Array(12)]?.map((_, index) => {
            return (
              <div
                Key={index}
                className="bg-white dark:bg-zinc-900 rounded-2xl shadow-md overflow-hidden border border-zinc-200 dark:border-zinc-800 animate-pulse"
              >
                {/* Image Skeleton */}
                <div className="h-56 w-full bg-zinc-200 dark:bg-zinc-800 relative">
                  <div className="absolute top-4 right-4 h-6 w-16 bg-zinc-300 dark:bg-zinc-700 rounded-full"></div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  {/* Title */}
                  <div className="h-6 w-3/4 bg-zinc-200 dark:bg-zinc-800 rounded"></div>

                  {/* Description lines */}
                  <div className="space-y-2">
                    <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded"></div>
                    <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded"></div>
                    <div className="h-4 w-5/6 bg-zinc-200 dark:bg-zinc-800 rounded"></div>
                  </div>

                  {/* Meta Info */}
                  <div className="flex justify-between items-center pt-2">
                    <div className="h-4 w-20 bg-zinc-200 dark:bg-zinc-800 rounded"></div>
                    <div className="h-4 w-28 bg-zinc-200 dark:bg-zinc-800 rounded"></div>
                  </div>

                  {/* Button */}
                  <div className="h-12 w-full bg-zinc-300 dark:bg-zinc-700 rounded-xl mt-4"></div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default loading;
