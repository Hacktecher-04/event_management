"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const token = Cookies.get("token");
    const role = Cookies.get("role");

    if (!token || role !== "admin") {
      setIsAdmin(false);
      router.push("/auth/login");
    } else {
      setUser({ role });
      setIsAdmin(true);
    }
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      {isAdmin && (
        <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
          <h2 className="mb-4 text-center text-2xl font-semibold text-gray-700">Admin Dashboard</h2>
          <p className="text-center">Welcome, Admin!</p>
        </div>
      )}
    </div>
  );
}

