import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#f9fafb] text-gray-900">
        {children}
      </body>
    </html>
  );
}
