"use client";

import Image from "next/image";
import { EventCard } from "../EventCard";
import { MotionProvider } from "../MotionProvider";

interface EventBoxProps {
  events: IEvent[];
}

export interface IEvent {
  id?: number;
  date: IEventDate;
  location: IEventLocation;
  priceRange: string;
}

export interface IEventDate {
  day: string;
  month: string;
}

export interface IEventLocation {
  city: string;
  country: string;
  address: string;
}

export function EventBox({ events }: EventBoxProps) {
  return (
    <MotionProvider
      delay={0.4}
      amount={0.3}
      className="bg-secondary/60 rounded-[10px] p-4 xl:p-12 relative"
    >
      <div className="flex flex-col xl:flex-row justify-between h-[620px] xl:h-full gap-x-4">
        <div className="hidden xl:flex w-[400px] h-[501px]">
          <Image
            src={"/assets/events/singer.jpg"}
            alt={"singer"}
            width={358}
            height={489}
            quality={100}
            priority
          />
        </div>

        <div className="flex-1 bg-purple-400/10 h-[500px] flex flex-col justify-between overflow-y-scroll scrollbar-thin scrollbar-thumb-accent-default scrollbar-track-white/10 xl:pr-6">
          {events.map((event: IEvent) => {
            return (
              <EventCard
                key={event.id}
                date={event.date}
                location={event.location}
                priceRange={event.priceRange}
              />
            );
          })}
        </div>
      </div>
    </MotionProvider>
  );
}
