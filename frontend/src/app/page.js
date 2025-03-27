import EventCard from "../components/EventCard";

export default function Home() {
  return (
    <>
      <div className="p-10 bg-gray-50 min-h-screen flex flex-col items-center">
        {/* Hero Section */}
        <div className="w-full max-w-7xl h-[200px] mt-6 flex items-center justify-center rounded-lg shadow-lg bg-gradient-to-r from-blue-500 to-purple-600">
          <h1 className="text-6xl font-extrabold text-white drop-shadow-lg">Welcome to College Fest!</h1>
        </div>

        {/* Tagline Section */}
        <div className="text-center font-semibold text-3xl py-12 max-w-4xl">
          <h1 className="text-gray-700">“Showcase your skills, collaborate with brilliant minds, and win exciting prizes!”</h1>
        </div>

        {/* Upcoming Events Section */}
        <div className="w-full max-w-7xl">
          <h2 className="text-center font-bold text-4xl pb-8 text-blue-700">Upcoming Events!</h2>

          {/* Event Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
          </div>
        </div>
      </div>



    </>
  );
}