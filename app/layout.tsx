import type { Metadata } from "next";
import CustomCursor from '../components/Cursor';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://wreakdev.vercel.app/'), 
  title : {
    default: "WreakDev - Portfolio",
    template: "%s | WreakDev"
  },
  description: "Infrastructure, Automation & Security Tooling",
  authors : [{ name: "wreakdev" }],
  openGraph: {
    title: "WreakDev - Portfolio",
    description: "Infrastructure, Automation & Security Tooling",
    url: "https://wreakdev.vercel.app/",
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