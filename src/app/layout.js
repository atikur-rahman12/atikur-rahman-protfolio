import "./globals.css";

import CursorGlow from "@/components/CursorGlow";

export const metadata = {
  title: "Atikur Portfolio",
  description: "Personal portfolio website built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
