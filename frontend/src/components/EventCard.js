import React from 'react'

const EventCard = () => {
    return (
      <div className="bg-white shadow-lg rounded-xl p-4 w-full max-w-md mx-auto hover:shadow-2xl transition-shadow duration-300">
        {/* Event Details */}
        <h2 className="text-xl font-semibold text-gray-800">Tech Conference 2025</h2>
        <p className="text-gray-600 mt-1">📅 April 10, 2025 | 📍 Indore, India</p>
  
        {/* Register Button */}
        <div className="mt-4">
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
            Register Now
          </button>
        </div>
      </div>
    );
  };
  
  export default EventCard;
  