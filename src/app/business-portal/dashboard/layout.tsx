export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {children}
      <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200"></div>
    </div>
  );
}
