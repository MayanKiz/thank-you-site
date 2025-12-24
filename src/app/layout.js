import "./globals.css";
import { AudioProvider } from "./AudioProvider";

export const metadata = {
  title: "I Have Something to Say...",
  description:
    "This isn’t just a website. It’s something truly special, built with love — just for you.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <AudioProvider>
          {children}
        </AudioProvider>
      </body>
    </html>
  );
}