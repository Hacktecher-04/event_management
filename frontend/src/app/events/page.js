"use client";
import { useEvents } from "../../context/EventContext";
import EventCard from "../../components/EventCard";

export default function EventsPage() {
  const { events } = useEvents();

  return (
    <div className="w-full">
      <h1 className="text-center text-white text-2xl font-bold py-4">
        College Events
      </h1>

      <h2 className="ml-4 text-[#dadada]">
        Technology: 
      </h2>
      <div className="mt-2 w-full p-4 flex items-center justify-center gap-8 flex-wrap">
        {events.length > 0 ? (
          events.filter((event) => event.category === "Technology").map((event) => <EventCard key={event.id} event={event} />)
        ) : (
          <p className="text-white text-lg">Loading events...</p>
        )}
      </div>
      <hr className="mt-5 w-full border-t-2 border-gray-700" />
      <h2 className="ml-4 mt-2 text-[#dadada]">
        Music: 
      </h2>
      <div className="mt-2 w-full p-4 flex items-center justify-center gap-8 flex-wrap">
        {events.filter((event) => event.category === "Music").length > 0 ? (
          events.filter((event) => event.category === "Music").map((event) => <EventCard key={event.id} event={event} />)
        ) : (
          <p className="text-white text-lg">Loading events...</p>
        )}
      </div>
    </div>
  );
}
