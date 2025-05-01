import DashNavLinks from "@/components/ui/dashboard/dashNavLinks";

export default function dashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className=""
      >
        <DashNavLinks />
        {children}
      </body>
    </html>
  );
}