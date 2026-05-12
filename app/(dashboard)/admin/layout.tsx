"use client";
import Link from "next/link";
import { jwtDecode } from "jwt-decode";
import { decode } from "punycode";


export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const accessToken = localStorage.getItem("admin_login");
  let email = "";
  if (accessToken) {
    const decoded: any = jwtDecode(accessToken);
    email = decoded.sub;
  }
  console.log(email);
  // const email = localStorage.getItem("admin_email");
  return (
    <div className="min-h-screen flex bg-white text-black">

      {/* SIDEBAR */}
      <aside className="w-64 bg-white border-r border-gray-300 flex flex-col">

        {/* BRAND */}
        <div className="h-16 flex items-center px-5 border-b">
          <div>
            <h1 className="font-bold text-lg text-indigo-600">
              Admin Panel
            </h1>
            <p className="text-xs text-black">
              Management System
            </p>
          </div>
        </div>

        {/* NAV */}
        <nav className="p-3 space-y-1 text-sm flex-1">

          <Link
            href="/admin"
            className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-indigo-50 hover:text-black transition text-black"
          >
            📊 Dashboard
          </Link>

          <Link
            href="/admin/users"
            className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-indigo-50 hover:text-black transition text-black"
          >
            👥 Users
          </Link>

        </nav>

        {/* FOOTER */}
        <div className="p-4 border-t text-xs text-black">
          v1.0 • Admin System
        </div>

      </aside>

      {/* MAIN */}
      <div className="flex-1 flex flex-col">

        {/* TOPBAR */}
        <header className="h-16 bg-white border-b flex items-center justify-between px-6">

          <div className="flex items-center gap-3">
            <span className="text-lg font-semibold text-black">
              Dashboard
            </span>

            <span className="px-2 py-1 text-xs bg-indigo-100 text-black rounded-full">
              Admin
            </span>
          </div>

          <div className="flex items-center gap-3">

            <span className="text-sm text-black">
              {email || "Guest"}
            </span>


          </div>

        </header>

        {/* CONTENT */}
        <main className="p-6 bg-white text-black">
          {children}
        </main>

      </div>

    </div>
  );
}