import React from "react";
import { FaCalendarAlt, FaTag } from "react-icons/fa";
import { useRouter } from "next/navigation"; // For navigation in Next.js

const EventCard = ({ event }) => {
  const router = useRouter();

  return (
    <div
      key={event.id}
      className="max-w-[400px] max-h-[500px] bg-black bg-opacity-40 backdrop-blur-xl border border-gray-700 rounded-2xl p-5 flex flex-col gap-4 shadow-lg transition-transform hover:scale-105 hover:shadow-2xl"
    >
      {/* Event Image */}
      <div className="relative">
        <img
          src={event.image}
          alt={event.name}
          className="w-full h-[200px] object-cover rounded-lg"
        />
        {/* Price Badge */}
        <span className="absolute top-2 right-2 bg-blue-500 text-white text-sm px-3 py-1 rounded-lg font-semibold shadow-md flex items-center gap-1">
          <FaTag /> ₹{event.price}
        </span>
      </div>

      {/* Event Details */}
      <div className="flex flex-col gap-2 text-white">
        <h2 className="text-2xl font-bold">{event.name}</h2>
        <p className="text-sm text-gray-300">{event.category}</p>

        {/* Date with Icon */}
        <p className="text-sm text-gray-400 flex items-center gap-2">
          <FaCalendarAlt className="text-yellow-400" /> {event.date}
        </p>

        {/* Description */}
        <p className="text-sm text-gray-300">{event.description}</p>

        {/* Buttons Section */}
        <div className="mt-4 flex justify-between items-center">
          {/* View Details Link */}
          <button
            onClick={() => router.push(`/events/${event.id}`)}
            className="text-blue-400 hover:underline transition"
          >
            View Details
          </button>

          {/* Book Ticket Button */}
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition">
            Book Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
