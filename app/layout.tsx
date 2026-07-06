import type { Metadata } from "next";
import CustomCursor from '../components/Cursor';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://WreakDev.vercel.app/'), 
  title : {
    default: "wpxq - Portfolio",
    template: "%s | WreakDev"
  },
  description: "Building Backend & Automation tools",
  authors : [{ name: "wreakdev" }],
  openGraph: {
    title: "WreakDev - Portfolio",
    description: "Building Backend & Automation tools",
    url: "https://WreakDev.vercel.app/",
    siteName: "WreakDev - Portfolio",
    locale: "en_US",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-black">
      <body className="bg-black text-white m-0 p-0 antialiased overflow-x-hidden">
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}