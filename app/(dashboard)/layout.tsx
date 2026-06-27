export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar — implement in Milestone 2 (components/layout) */}
      <aside className="hidden w-64 border-r md:block" />
      <div className="flex flex-1 flex-col">
        {/* Navbar — implement in Milestone 2 */}
        <header className="h-14 border-b" />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
