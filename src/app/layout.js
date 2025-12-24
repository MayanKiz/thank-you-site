import "./globals.css"
import { AudioProvider } from "@/components/AudioProvider"

export const metadata = {
  title: "I Have Something to Say...",
  description: "This isn’t just a website. It’s something truly special.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <AudioProvider>{children}</AudioProvider>
      </body>
    </html>
  )
}