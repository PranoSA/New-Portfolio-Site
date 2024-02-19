import Link from "next/link";

export const metadata = {
    title: 'Next.js',
    description: 'Generated by Next.js',
  };
  
  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
     <div class="h-14 bg-gradient-to-r from-sky-500 to-indigo-500"></div>
      <html lang="en">
      <body>
        <div className="fixed top-0 left-0 p-4">
          <Link href="/" className="text-blue-500 hover:underline text-2xl">
              ← Home
          </Link>
        </div>
        {children}
      </body>
    </html>
    );
  }
  
