import type { Metadata } from "next";
import CustomCursor from '../components/Cursor';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://wreakdev.vercel.app/'), 
  title : {
    default: "WreakDev | DevSecOps & Open Source Tool Developer",
    template: "%s | WreakDev"
  },
  description: "Infrastructure, Automation & Security Tooling",
  authors : [{ name: "wreakdev" }],
  openGraph: {
    title: "WreakDev | DevSecOps & Open Source Tool Developer",
    description: "Infrastructure, Automation & Security Tooling",
    url: "https://wreakdev.vercel.app/",
    siteName: "WreakDev | DevSecOps & Open Source Tool Developer",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/217353155?v=4&s=400",
        width: 400,
        height: 400,
        alt: "WreakDev Github PFP" ,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "WreakDev | DevSecOps & Open Source Tool Developer",
    images: ["https://avatars.githubusercontent.com/u/217353155?v=4&s=400"],
  },
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