import "./globals.css";

import CursorGlow from "@/components/CursorGlow";

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
