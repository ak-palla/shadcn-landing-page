"use client";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string | React.ReactNode;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const lastItemRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    if (ref.current && lastItemRef.current) {
      const containerRect = ref.current.getBoundingClientRect();
      const lastItemRect = lastItemRef.current.getBoundingClientRect();
      // Calculate height to stop at the center of the last item's circle
      const stopHeight = lastItemRect.top - containerRect.top + 20; // 20px is half of the circle height (h-10 = 40px / 2)
      setLineHeight(stopHeight);
      setHeight(containerRect.height);
    }
  }, [ref, data]);

  return (
    <div className="w-full">
      <div ref={ref} className="relative max-w-[1300px] mx-auto pb-8">
        {data.map((item, index) => (
          <div
            key={index}
            ref={index === data.length - 1 ? lastItemRef : null}
            className={`flex justify-start ${index === 0 ? 'pt-0' : 'pt-6'} md:gap-10`}
          >
            <div className="relative flex flex-col md:flex-row z-40 items-center self-start max-w-xs lg:max-w-sm md:w-100px">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-background flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-muted border border-border p-2" />
              </div>
              <div className="hidden md:block md:pl-20">
                {typeof item.title === 'string' ? (
                  <h3 className="text-xl md:text-5xl font-bold text-foreground/60">
                    {item.title}
                  </h3>
                ) : (
                  <div className="flex items-center">
                    {item.title}
                  </div>
                )}
              </div>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              {typeof item.title === 'string' ? (
                <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-foreground/60">
                  {item.title}
                </h3>
              ) : (
                <div className="md:hidden block mb-4">
                  {item.title}
                </div>
              )}
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: lineHeight + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-muted to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <div
            style={{
              height: lineHeight + "px",
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-primary rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
