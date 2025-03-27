"use client";

import { createContext, useContext, useState, useEffect } from "react";

// Create EventContext
const EventContext = createContext();

// Provider Component
export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([
    {
      id: 2,
      name: "Tech Conference 2025",
      category: "Technology",
      date: "2025-06-15",
      description:
        "A gathering of the brightest minds in technology and innovation.",
      price: 250,
      image:
        "https://i.pinimg.com/236x/29/01/37/290137c8bd4dba1b211fc5dc42f9445c.jpg",
    },
    {
      id: 2.1,
      name: "Tech Conference 2025",
      category: "Technology",
      date: "2025-06-15",
      description:
        "A gathering of the brightest minds in technology and innovation.",
      price: 250,
      image:
        "https://i.pinimg.com/236x/29/01/37/290137c8bd4dba1b211fc5dc42f9445c.jpg",
    },
    {
      id: 2.2,
      name: "Tech Conference 2025",
      category: "Technology",
      date: "2025-06-15",
      description:
        "A gathering of the brightest minds in technology and innovation.",
      price: 250,
      image:
        "https://i.pinimg.com/236x/29/01/37/290137c8bd4dba1b211fc5dc42f9445c.jpg",
    },
    {
      id: 2.3,
      name: "Tech Conference 2025",
      category: "Technology",
      date: "2025-06-15",
      description:
        "A gathering of the brightest minds in technology and innovation.",
      price: 250,
      image:
        "https://i.pinimg.com/236x/29/01/37/290137c8bd4dba1b211fc5dc42f9445c.jpg",
    },
    {
      id: 2.4,
      name: "Tech Conference 2025",
      category: "Technology",
      date: "2025-06-15",
      description:
        "A gathering of the brightest minds in technology and innovation.",
      price: 250,
      image:
        "https://i.pinimg.com/236x/29/01/37/290137c8bd4dba1b211fc5dc42f9445c.jpg",
    },
    {
      id: 3,
      name: "Music Festival 2025",
      category: "Music",
      date: "2025-08-10",
      description:
        "An electrifying music festival featuring top artists from around the world.",
      price: 150,
      image:
        "https://i.pinimg.com/236x/29/01/37/290137c8bd4dba1b211fc5dc42f9445c.jpg",
    },
    {
      id: 3.1,
      name: "Music Festival 2025",
      category: "Music",
      date: "2025-08-10",
      description:
        "An electrifying music festival featuring top artists from around the world.",
      price: 150,
      image:
        "https://i.pinimg.com/236x/29/01/37/290137c8bd4dba1b211fc5dc42f9445c.jpg",
    },
    {
      id: 3.2,
      name: "Music Festival 2025",
      category: "Music",
      date: "2025-08-10",
      description:
        "An electrifying music festival featuring top artists from around the world.",
      price: 150,
      image:
        "https://i.pinimg.com/236x/29/01/37/290137c8bd4dba1b211fc5dc42f9445c.jpg",
    },
    {
      id: 3.3,
      name: "Music Festival 2025",
      category: "Music",
      date: "2025-08-10",
      description:
        "An electrifying music festival featuring top artists from around the world.",
      price: 150,
      image:
        "https://i.pinimg.com/236x/29/01/37/290137c8bd4dba1b211fc5dc42f9445c.jpg",
    },
  ]);

  //   useEffect(() => {
  //   }, []);

  return (
    <EventContext.Provider value={{ events }}>{children}</EventContext.Provider>
  );
};

// Custom Hook for consuming EventContext
export const useEvents = () => {
  return useContext(EventContext);
};
