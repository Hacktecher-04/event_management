"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [showDashboard, setShowDashboard] = useState(false);

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      setUser({ role: Cookies.get("role") });
      setShowDashboard(true);
    } else {
      router.push("/auth/login");
    }
  }, []);

  return showDashboard && (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
        <h2 className="mb-4 text-center text-2xl font-semibold text-gray-700">User Dashboard</h2>
        <p className="text-center">Welcome, User!</p>
      </div>
    </div>
  );
}
