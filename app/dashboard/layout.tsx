// app/dashboard/layout.tsx
import "../globals.css";
import Sidebar from "@/components/sidebar";
import ThemeToggle from "@/components/theme-toggle";

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const items = [
    { href: "/dashboard",             label: "Overview",               icon: "Gauge"      as const },
    { href: "/dashboard/moderasi",    label: "Antrian Moderasi",       icon: "ListChecks" as const },
    { href: "/dashboard/tren",        label: "Tren Moderasi & Status", icon: "Activity"   as const },
    { href: "/dashboard/distribusi",  label: "Distribusi Kontribusi",  icon: "BarChart2"  as const },
    { href: "/dashboard/primer",      label: "Primer: Items vs Growth",icon: "TrendingUp" as const },

    { href: "/dashboard/budaya",   label: "Edit Data Budaya", icon: "Edit3" as const },
    { href: "/dashboard/api-docs", label: "API Docs",          icon: "Code2" as const },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto">
        <div className="flex">
          <Sidebar brand="Admin · Budaya" items={items} />
          <main className="flex-1 h-full mx-auto">
            <div className="fixed right-0 lg:flex justify-end px-4 pt-8">
              <ThemeToggle />
            </div>
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
